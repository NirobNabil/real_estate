const data = {
  "Large flat": {
    "area": "<strong>42m<sup>2</sup><strong>",
    "rooms": 72,
    "price": "420 024$",
    "details": {
      "area": "<strong>42m<sup>2</sup><strong>",
      "floor": 4,
      "floors": 3,
      "bedrooms": 8,
      "bathrooms": 64,
      "rooms": 72
    },
    "slideshow": [
      {"title": "Firendly einvroment", "img": "assets/img/photos/slider01.jpg"},
      {"title": "Firendly einvroment", "img": "assets/img/photos/slider01.jpg"},
      {"title": "Firendly einvroment", "img": "assets/img/photos/slider01.jpg"},
      {"title": "Firendly einvroment", "img": "assets/img/photos/slider01.jpg"},
      {"title": "Firendly einvroment", "img": "assets/img/photos/slider01.jpg"},
      {"title": "Firendly einvroment", "img": "assets/img/photos/slider01.jpg"},
    ],
    "layout": {
      "img": "assets/img/photos/plan_example.jpg",
      "rooms": [
        { 
          "name": "kitchen",
          "area": "<strong>16m<sup>2</sup>",
          "img": "assets/img/objects/Large flat/object03.jpg",
          "x": "22%",
          "y": "20%"
        },
        { "name": "bedroom",
          "area": "<strong>26m<sup>2</sup>",
          "img": "assets/img/objects/Large flat/object03.jpg",
          "x": "51%",
          "y": "20%"
        },
        { "name": "bathroom",
          "area": "<strong>36m<sup>2</sup>",
          "img": "assets/img/objects/Large flat/object03.jpg",
          "x": "53%",
          "y": "70%"
        },
        { "name": "dining",
          "area": "<strong>56m<sup>2</sup>",
          "img": "assets/img/objects/Large flat/object03.jpg",
          "x": "83%",
          "y": "62%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "assets/img/photos/video-bg.jpg",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    "features": {
      "headline": "Features",
      "subtitle": "lorem  ipsum doler motor ipsums doler motor motor hahalol",
      "img": "assets/img/photos/about03.jpg",
      "feature_list": [
        {"icon": "ti-shine", "name": "feature1", "description": "lorem ipsum doler motor"}, 
        {"icon": "ti-shine", "name": "feature2", "description": "lorem ipsum doler motor"} 
      ]
    },
    "card": {
      "area": "<strong>42m<sup>2</sup><strong>",
      "floor": 3,
      "price": "420 024$",
      "price_per_m2": "10000.5714286$"
    }
  }
}

let gallerySliderItems = []

const populate_layout = (rooms) => {
  const layoutElem = document.querySelector('#layout');
  console.log("called ");
  console.log(rooms);
  rooms.map( (room) => {
    layoutElem.innerHTML += `
      <div class="plan-feature animated" data-animation="fadeInDown" data-x="${room.x}" data-y="${room.y}">
          <span class="plan-pointer" data-items="gallerySliderItems" data-toggle="gallery"><i class="ti ti-plus"></i><span>${room.name}</span></span>
          <div class="plan-popup dark">
              <img src="${room.img}" alt="" class="popup-image">
              <div class="popup-content">
                  <h5 class="mb-0">${room.name}</h5>
                  <span class="text-muted">Total area: </span>${room.area}</strong>
              </div>
          </div>
      </div>
    `
  } ) 
} 

const populate_features = ( features ) => {
  const SlideshowContainer = document.querySelector('#slideshow');
  features.map( (feature, i) => {
    SlideshowContainer.innerHTML += `
      <div id="features.feature-1" class="feature feature-${i+1}">
        <i class="icon icon-primary ti ${feature.icon}"></i>
        <div class="feature-content">
            <h5 class="mb-0">${feature.name}</h5>
            <p class="text-muted">${feature.description}</p>
        </div>
      </div>
    `
    
  } )
}

const populate_slideshow = slideshow => {
  const SlideshowContainer = document.querySelector('#slideshow');
  const SlideshowNavigationContaine = document.querySelector('#slideshow-navigation')
  Object.keys(slideshow).map( key => {
    SlideshowContainer.innerHTML += `
      <div class="slide">
        <div class="slide-bg bg-image-holder bg-image-fixed">
            <img src="${slideshow[key].img}" alt="">
        </div>
        <div class="slide-content container text-center">
            <h1>${slideshow[key].title}</h1>
        </div>
    </div>
    `
    SlideshowNavigationContaine.innerHTML += `
      <div class="slide"><img src="${slideshow[key].img}" alt=""></div>
    `
  })
}

const pop_map = {
  "features-feature_list": populate_features,
  "layout-rooms": populate_layout,
  "slideshow": populate_slideshow,
}

const populate_general = (leading, container, d) => {
  console.log(leading, container, d);
  // console.log(typeof d)
  if( typeof d !== "object" ) {
    if( container.nodeName == "IMG" ) container.src = d;
    if( container.id == "promo-video" ) container.setAttribute("data-video", d);
    else container.innerHTML = d;
    return;
  }

  Object.keys(d).map( key => {
    const id = `${leading}${leading != "" ? "-" : ""}${key}`;
    console.log(key, id);
    if(id in pop_map) pop_map[id](d[key]);
    else populate_general(`${id}`, container.querySelector(`#${id}`), d[key]);
  })
}

const populate = (flat_name) => {
  console.log("called");
  populate_general("", document, data[flat_name]);
}