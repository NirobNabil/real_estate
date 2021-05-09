const floor = 1;
const price_per_sq = 4500

const navbar_data = {
  "address_short": "Lily Complex"
}

const mother_video_link = "https://www.youtube.com/embed/tYwfavQL9yU"; 

const social_links =  {
  "google": "https://www.google.com/search?client=firefox-b-d&q=lily+builders",
  "facebook": "https://www.facebook.com/Lily-Builders-107411038022640/",
  "instagram": "https://www.facebook.com/Lily-Builders-107411038022640/"
}

const slideshow_overlay = "";

const slideshow_overlay_arr = ["Lily complex", slideshow_overlay, slideshow_overlay, slideshow_overlay, slideshow_overlay]

const home_data = {
  "slideshow": [
    {"name": slideshow_overlay_arr[0], "img": "assets/img/slideshow/1.jpg"},
    {"name": slideshow_overlay_arr[1], "img": "assets/img/slideshow/2.jpg"},
    {"name": slideshow_overlay_arr[2], "img": "assets/img/slideshow/3.jpg"},
    {"name": slideshow_overlay_arr[3], "img": "assets/img/slideshow/4.jpg"},
    {"name": slideshow_overlay_arr[4], "img": "assets/img/slideshow/5.jpg"},
  ],
  "gallery": [
    {"img": "assets/img/slideshow/1.jpg"},
    {"img": "assets/img/slideshow/2.jpg"},
    {"img": "assets/img/slideshow/3.jpg"},
    {"img": "assets/img/slideshow/4.jpg"},
    {"img": "assets/img/slideshow/5.jpg"},    
    {"img": "assets/img/slideshow/6.jpg"},    
    {"img": "assets/img/slideshow/7.jpg"},    
    {"img": "assets/img/slideshow/8.jpg"},    
    {"img": "assets/img/slideshow/5.jpg"},    
  ],
}

let data = {
  "flat-a": {
    "flat_name": "Flat A",
    "area": "<strong>1159ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT ,200",
    "landing_img": "../assets/img/flats/A/Unit-A-2.png",
    "details": {
      "area": "<strong>1159ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/A/Unit-A-2.png",
      "../assets/img/flats/A/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/A/layout.png",
      "rooms": [
        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "22%",
          "y": "30%"
        },
        { "name": "bedroom 2",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "22%",
          "y": "65%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "72%",
          "y": "47%"
        },
        { "name": "dining",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "45%",
          "y": "50%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/A/Unit-A-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat A",
      "bedrooms": 3,
      "img": "../assets/img/flats/A/Unit-A-2.png",
      "area": "<strong>1159ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 55,63,200",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-b": {
    "flat_name": "Flat B",
    "area": "<strong>1136ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 54,52,800",
    "floor": floor,
    "landing_img": "../assets/img/flats/B/Unit-B-2.png",
    "details": {
      "area": "<strong>1136ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/B/Unit-B-2.png",
      "../assets/img/flats/B/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/B/layout.png",
      "rooms": [
        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "80%",
          "y": "30%"
        },
        { 
          "name": "bedroom 2",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "65%",
          "y": "60%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "39%",
          "y": "60%"
        },
        { "name": "kitchen",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "25%",
          "y": "64%"
        },
        { "name": "dining + drawing",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "15%",
          "y": "40%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/B/Unit-B-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat A",
      "bedrooms": 3,
      "img": "../assets/img/flats/B/Unit-B-2.png",
      "area": "<strong>1159ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 54,52,800",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-c": {
    "flat_name": "Flat C",
    "area": "<strong>1034ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 49,63,200",
    "floor": floor,
    "landing_img": "../assets/img/flats/C/Unit-C-2.png",
    "details": {
      "area": "<strong>1034ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/C/Unit-C-3.png",
      "../assets/img/flats/C/Unit-C-2.png",
      "../assets/img/flats/C/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/C/layout.png",
      "rooms": [

        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "84%",
          "y": "65%"
        },
        { "name": "bedroom 2",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "65%",
          "y": "38%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "15%",
          "y": "35%"
        },
        { "name": "dining + drawing",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "35%",
          "y": "60%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/C/Unit-C-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat C",
      "bedrooms": 3,
      "img": "../assets/img/flats/C/Unit-C-2.png",
      "area": "<strong>1034ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 49,63,200",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-d": {
    "flat_name": "Flat D",
    "area": "<strong>1048ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 50,30,400",
    "floor": floor,
    "landing_img": "../assets/img/flats/D/Unit-D-2.png",
    "details": {
      "area": "<strong>1034ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/D/Unit-D-2.png",
      "../assets/img/flats/D/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/D/layout.png",
      "rooms": [

        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "70%",
          "y": "30%"
        },
        { "name": "bedroom 2",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "32%",
          "y": "55%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "12%",
          "y": "45%"
        },
        { "name": "dining + drawing",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "35%",
          "y": "30%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/D/Unit-D-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat D",
      "bedrooms": 3,
      "img": "../assets/img/flats/D/Unit-D-2.png",
      "area": "<strong>1048ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 50,30,400",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-e": {
    "flat_name": "Flat E",
    "area": "<strong>1135ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 54,48,000",
    "floor": floor,
    "landing_img": "../assets/img/flats/E/Unit-E-2.png",
    "details": {
      "area": "<strong>1034ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/E/Unit-E-2.png",
      "../assets/img/flats/E/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/E/layout.png",
      "rooms": [

        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "70%",
          "y": "33%"
        },
        { "name": "bedroom 2",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "53%",
          "y": "30%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "25%",
          "y": "58%"
        },
        { "name": "dining + drawing",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "45%",
          "y": "71%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/E/Unit-E-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat E",
      "bedrooms": 3,
      "img": "../assets/img/flats/E/Unit-E-2.png",
      "area": "<strong>1048ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 54,48,000",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-f": {
    "flat_name": "Flat F",
    "area": "<strong>1100ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 52,80,000",
    "floor": floor,
    "landing_img": "../assets/img/flats/F/Unit-F-2.png",
    "details": {
      "area": "<strong>1034ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/F/Unit-F-2.png",
      "../assets/img/flats/F/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/F/layout.png",
      "rooms": [

        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "55%",
          "y": "73%"
        },
        { "name": "bedroom 2",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "43%",
          "y": "31%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "31%",
          "y": "35%"
        },
        { "name": "dining + drawing",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "35%",
          "y": "58%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/F/Unit-F-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat F",
      "bedrooms": 3,
      "img": "../assets/img/flats/F/Unit-F-2.png",
      "area": "<strong>1100ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 52,80,000",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-g": {
    "flat_name": "Flat G",
    "area": "<strong>1365ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 65,52,000",
    "floor": floor,
    "landing_img": "../assets/img/flats/G/Unit-G-2.png",
    "details": {
      "area": "<strong>1365ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/G/Unit-G-2.png",
      "../assets/img/flats/G/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/G/layout.png",
      "rooms": [

        { 
          "name": "bedroom 1",
          "area": "<strong>16ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "78%",
          "y": "69%"
        },
        { "name": "bedroom 2",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "68%",
          "y": "31%"
        },
        { "name": "bedroom 3",
          "area": "<strong>26ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "13%",
          "y": "43%"
        },
        { "name": "dining + drawing",
          "area": "<strong>56ft<sup>2</sup>",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "45%",
          "y": "58%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/G/Unit-G-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat G",
      "bedrooms": 3,
      "img": "../assets/img/flats/G/Unit-G-2.png",
      "area": "<strong>1365ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 65,52,000",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-h": {
    "flat_name": "Flat H",
    "area": "<strong>1140ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 54,72,000",
    "floor": floor,
    "landing_img": "../assets/img/flats/H/Unit-H-2.png",
    "details": {
      "area": "<strong>1365ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 3,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/H/Unit-H-2.png",
      "../assets/img/flats/H/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/H/layout.png",
      "rooms": [
        { 
          "name": "bedroom 1",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "55%",
          "y": "42%"
        },
        { "name": "bedroom 2",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "42%",
          "y": "45%"
        },
        { "name": "bedroom 3",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "23%",
          "y": "46%"
        },
        { "name": "dining + drawing",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "75%",
          "y": "58%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/H/Unit-H-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat H",
      "bedrooms": 3,
      "img": "../assets/img/flats/H/Unit-H-2.png",
      "area": "<strong>1140ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 54,72,000",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-i": {
    "flat_name": "Flat I",
    "area": "<strong>1100ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 52,80,000",
    "floor": floor,
    "landing_img": "../assets/img/flats/I/Unit-I-2.png",
    "details": {
      "area": "<strong>1100ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 2,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/I/Unit-I-2.png",
      "../assets/img/flats/I/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/I/layout.png",
      "rooms": [
        { 
          "name": "bedroom 1",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "79%",
          "y": "22%"
        },
        { "name": "bedroom 2",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "38%",
          "y": "23%"
        },
        { "name": "bedroom 3",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "20%",
          "y": "60%"
        },
        { "name": "dining + drawing",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "73%",
          "y": "68%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/I/Unit-I-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat I",
      "bedrooms": 3,
      "img": "../assets/img/flats/I/Unit-I-2.png",
      "area": "<strong>1100ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 52,80,000",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
  "flat-j": {
    "flat_name": "Flat J",
    "area": "<strong>1100ft<sup>2</sup><strong>",
    "rooms": 3,
    "price": "BDT 52,80,000",
    "floor": floor,
    "landing_img": "../assets/img/flats/J/Unit-J-2.png",
    "details": {
      "area": "<strong>1100ft<sup>2</sup><strong>",
      "floor": floor,
      "floors": 1,
      "bedrooms": 3,
      "bathrooms": 2,
      "rooms": 3
    },
    "slideshow": [
      "../assets/img/flats/J/Unit-J-2.png",
      "../assets/img/flats/J/layout.png",
    ],
    "layout": {
      "img": "../assets/img/flats/J/layout.png",
      "rooms": [
        { 
          "name": "bedroom 1",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "72%",
          "y": "30%"
        },
        { "name": "bedroom 2",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "72%",
          "y": "59%"
        },
        { "name": "bedroom 3",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "48%",
          "y": "71%"
        },
        { "name": "dining + drawing",
          "img": "../assets/img/objects/Large flat/object03.jpg",
          "x": "50%",
          "y": "35%"
        }
      ],
    },
    "promo": {
      "headline": "Neat &amp; Modern Interiors",
      "background": "../assets/img/flats/J/Unit-J-2.png",
      "video": mother_video_link,
    },
    "features": {
      "headline": "Features",
      "subtitle": "",
      "img": "../assets/img/flats/features.jpeg",
      "feature_list": [
        {"icon": "ti-shine", "name": "Mosque"}, 
        {"icon": "ti-shine", "name": "Gymnasium",},
        {"icon": "ti-shine", "name": "Convention hall",},
        {"icon": "ti-shine", "name": "Playground space"},
      ]
    },
    "card": {
      "name": "Flat J",
      "bedrooms": 3,
      "img": "../assets/img/flats/J/Unit-J-2.png",
      "area": "<strong>1100ft<sup>2</sup><strong>",
      "floor": floor,
      "price": "BDT 52,80,000",
      "price_per_m2": "BDT " + price_per_sq
    }
  },
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
                  <!-- <span class="text-muted">Total area: </span>${room.area}</strong> -->
              </div>
          </div>
      </div>
    `
  } ) 
} 

const populate_features = ( features ) => {
  const container = document.querySelector('#features-container');
  features.map( (feature, i) => {
    container.innerHTML += `
      <div class="feature feature-${i+1}">
        <i class="icon icon-primary ti ${feature.icon}"></i>
        <div class="feature-content">
            <h5 class="mb-0">${feature.name}</h5>
        </div>
      </div>
    `
  } )
}

const populate_slideshow = slideshow => {
  slideshow.map( slide => {
    gallerySliderItems.push({
      src: slide,
      w: 1920,
      h: 1080
    })
  })
}

document.querySelectorAll('.brochure').forEach( e => {
  e.addEventListener('click', () => document.querySelector('#download_iframe').src = "assets/brochure/Lily Complex Brochure Final.pdf")
} )

const pop_map = {
  "features-feature_list": populate_features,
  "layout-rooms": populate_layout,
  "slideshow": populate_slideshow,
}

const populate_general = (leading, container, d) => {
  console.log(leading, container, d);
  // console.log(typeof d)
  if(container === null) return;

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

newData = {}
Object.keys(data).map( key => {
  newData[key] = data[key];
  price_string = String(price_per_sq * parseInt(data[key]["area"].split('>')[1].split('f')[0]));
  price_string = price_string.split('')
  if(price_string.length > 3 ) price_string.splice(price_string.length - 3,0,',')
  if(price_string.length > 6 ) price_string.splice(price_string.length - 6,0,',')
  newData[key]["price"] = "BDT " + price_string.join('');
  newData[key]["card"]["price"] = "BDT " + price_string.join('');
})

data = newData;

const populate = (flat_name) => {
  
  console.log("called");
  document.querySelector('#address-short').innerHTML = navbar_data.address_short;
  populate_general("", document, data[flat_name]);
  populate_navbar();
}

const populate_navbar = () => {
  Object.keys(social_links).map( key => {
    document.querySelectorAll(`.${key}_link`).forEach( elem => {
      elem.href = social_links[key];
    } )
  } )
};

var galleryCarouselItems = []

const populate_home = () => {

  document.querySelector('#address-short').innerHTML = navbar_data.address_short;

  const grid_container  = document.querySelector('#flats-grid_view');
  const list_container = document.querySelector('#flats-list_view');
  
  Object.keys(data).map( key => {
    // if(key == "flat-j") return;
    grid_container.innerHTML += `
      <div class="col-lg-3 col-6">
        <!-- Object - Vertical -->
        <div class="object object-vertical">
            <div class="object-image" style="min-height:250px; display:flex; align-items:center">
                <a class="link-inherit" href="flats/${key}.php"><img src="${data[key].landing_img.split('/').splice(1).join('/').split('.')[0] + "-c.jpg"}" alt=""></a>
            </div>
            <div class="object-content">
                <h5 class="object-title"><a class="link-inherit" href="flats/${key}.php">${data[key].flat_name}</a></h5>
                <ul class="object-details list-unstyled">
                    <li><span class="text-muted">Total area:</span> ${data[key].area}</li>
                    <li><span class="text-muted">Bedrooms:</span> ${data[key].details.bedrooms}</li>
                </ul>
                <span class="object-price">${data[key].price}</span>
                <a href="flats/${key}.php" class="object-btn btn btn-secondary"><span class="hidden-xs-down">View</span> Details</a>
            </div> 
        </div>
      </div>
    `
    list_container.innerHTML += `
      <div class="object object-horizontal">
        <div class="object-image">
            <a class="link-inherit" href="flalts/${key}.php"><img src="${data[key].landing_img.split('/').splice(1).join('/').split(".")[0] + "-c.jpg"}" alt=""></a>
        </div>
        <div class="object-content">
            <h5 class="object-title"><a class="link-inherit" href="flats/${key}.php">${data[key].flat_name}</a></h5>
                <ul class="object-details list-unstyled">
                    <li><span class="text-muted">Total area:</span> ${data[key].area}</li>
                    <li><span class="text-muted">Bedrooms:</span> ${data[key].details.bedrooms}</li>
                </ul>
                <span class="object-price">${data[key].price}</span>
        </div> 
        <a href="flats/${key}.php" class="object-btn btn btn-secondary"><span class="hidden-xs-down">View</span> Details</a>
      </div>
    `
  } )

  const slideshow_container = document.querySelector('#slideshow');
  const slideshow_nav_container = document.querySelector('#slideshow-nav');

  home_data["slideshow"].map( (slide, i) => {
    slideshow_container.innerHTML += `
      <div class="slide">
        <div class="slide-bg bg-image-holder bg-image-fixed">
            <img src="${slide.img}" alt="">
        </div>
        <div class="slide-content container text-center">
            <h1>${slide.name}</h1>
        </div>
      </div>
    `;
    slideshow_nav_container.innerHTML += `
      <div class="slide"><img src="${slide.img}" alt=""></div>
    `;

  } )


  const carousel_container = document.querySelector('#gallery-carousel');
  home_data["gallery"].map( (slide, i) => {
    carousel_container.innerHTML += `
      <img src="${slide.img}" alt=""/>
    `;

    galleryCarouselItems.push(
      {
        src: slide.img,
        width: 1100,
        height: 750
      }
    )
  } )

  const about_video = document.querySelector("#about-video");
  about_video.dataset.video = mother_video_link;

  populate_navbar();
}