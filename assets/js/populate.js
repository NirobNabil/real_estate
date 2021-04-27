const data = {
  "Large flat": {
    "area": "42m^2",
    "rooms": 72,
    "floors": 3,
    "floor": 4,
    "price": "420 024$",
    "bedrooms": 8,
    "bathrooms": 64,
    "slideshow": [
      "./objects/large_flat/object-large01.jpg",
      "./objects/large_flat/object01.jpg",
      "./objects/large_flat/object02.jpg",
      "./objects/large_flat/object03.jpg",
      "./objects/large_flat/object01.jpg",
      "./objects/large_flat/object03.jpg",
    ],
    "layout": {
      "layout_img": "./photos/plan-example.jpg",
      "rooms": [
        { 
          "name": "kitchen",
          "area": "<strong>16m<sup>2</sup>",
          "img": "object03.jpg",
          "x": "22%",
          "y": "20%"
        },
        { "name": "bedroom",
          "area": "<strong>26m<sup>2</sup>",
          "img": "object03.jpg",
          "x": "51%",
          "y": "20%"
        },
        { "name": "bathroom",
          "area": "<strong>36m<sup>2</sup>",
          "img": "object03.jpg",
          "x": "53%",
          "y": "70%"
        },
        { "name": "dining",
          "area": "<strong>56m<sup>2</sup>",
          "img": "object03.jpg",
          "x": "83%",
          "y": "62%"
        }
      ],
    },
    "promo": {
      "headline": "Neat and modern interiors",
      "background": "./objects/large_flat/object03.jpg",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    "Features": {
      "headlines": "Features",
      "subtitle": "lorem  ipsum doler motor ipsums doler motor motor hahalol",
      "features": [
        {"icon": "ti-shine", "name": "feature1"}, 
        {"icon": "ti-shine", "name": "feature2"} 
      ]
    }
  }
}

const populate_layout = (flat_name) => {
  const layoutElem = document.querySelector('#layout');
  const layout = data[flat_name].layout;
  layout.rooms.map( (room) => {
    layoutElem.innerHTML += `
      <div class="plan-feature animated" data-animation="fadeInDown" data-x="${room.x}" data-y="${room.y}">
          <span class="plan-pointer" data-items="gallerySliderItems" data-toggle="gallery"><i class="ti ti-plus"></i><span>${room.name}</span></span>
          <div class="plan-popup dark">
              <img src="assets/img/objects/${flat_name}/${room.img}" alt="" class="popup-image">
              <div class="popup-content">
                  <h5 class="mb-0">${room.name}</h5>
                  <span class="text-muted">Total area: </span>${room.area}</strong>
              </div>
          </div>
      </div>
    `
  } ) 
} 

const populate = (flat_name) => {
  const flat = data[flat_name];
  Object.keys(flat).map( key => {
    document.querySelectorAll(`#${key}`).forEach( elem => {
      elem.innerHTML = flat[key];
    } )
  } )
}