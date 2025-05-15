import type { Restaurant } from "@/features/restaurants/types/restaurant.types";

export const restaurants: Restaurant[] = [
  {
    "id": "1",
    "name": "Sushi House",
    "cuisine": "Japonesa",
    "price": "$$",
    "rating": 4.5,
    "distance": "1.2 km",
    "imageUrl": "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isOpen": true,
    "openingTime": "12:00 PM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.4252,
      "lng": -70.61
    },
    "address": "Av. Providencia 1234, Santiago",
    "phone": "+56 2 2345 6789",
    "website": "https://sushihouse.cl",
    "description": "Delicioso sushi fresco en el corazón de Santiago.",
    "features": [
      "Delivery",
      "Takeaway",
      "Wi-Fi"
    ],
    "photos": []
  },
  {
    "id": "2",
    "name": "La Fuente Alemana",
    "cuisine": "Sandwiches",
    "price": "$$",
    "rating": 3.9,
    "distance": "0.9 km",
    "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "9:30 PM",
    "position": {
      "lat": -33.4375,
      "lng": -70.6483
    },
    "address": "Av. Libertador Bernardo O'Higgins 58, Santiago",
    "phone": "+56 2 2983 0123",
    "website": "https://fuentealemana.cl",
    "description": "Clásicos lomitos y churrascos desde 1957.",
    "features": [
      "Comida rápida",
      "Tradicional",
      "Takeaway"
    ],
    "photos": []
  },
  {
    "id": "3",
    "name": "Taj Café",
    "cuisine": "Hindú",
    "price": "$$$",
    "rating": 2.5,
    "distance": "2.3 km",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isOpen": true,
    "openingTime": "1:00 PM",
    "closingTime": "11:00 PM",
    "position": {
      "lat": -33.4199,
      "lng": -70.606
    },
    "address": "Av. Vitacura 6789, Vitacura",
    "phone": "+56 9 8765 4321",
    "website": "https://tajcafe.cl",
    "description": "Auténtica cocina hindú con especias tradicionales.",
    "features": [
      "Vegetariano",
      "Delivery",
      "Reservas"
    ],
    "photos": []
  },
  {
    "id": "4",
    "name": "Pizza Napoli",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 4.4,
    "distance": "1.7 km",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isOpen": true,
    "openingTime": "12:00 PM",
    "closingTime": "11:30 PM",
    "position": {
      "lat": -33.4412,
      "lng": -70.6534
    },
    "address": "Calle Loreto 456, Recoleta",
    "phone": "+56 2 2555 6677",
    "website": "https://pizzanapoli.cl",
    "description": "Pizzas artesanales con ingredientes italianos.",
    "features": [
      "Delivery",
      "Takeaway",
      "Mozzarella casera"
    ],
    "photos": []
  },
  {
    "id": "5",
    "name": "Burger City",
    "cuisine": "Hamburguesas",
    "price": "$",
    "rating": 4.0,
    "distance": "0.5 km",
    "imageUrl": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isOpen": false,
    "openingTime": "12:00 PM",
    "closingTime": "8:00 PM",
    "position": {
      "lat": -33.4372,
      "lng": -70.6501
    },
    "address": "Av. Manuel Montt 789, Providencia",
    "phone": "+56 2 2222 3333",
    "website": "https://burgercity.cl",
    "description": "Hamburguesas clásicas con ingredientes frescos.",
    "features": [
      "Comida rápida",
      "Takeaway"
    ],
    "photos": []
  },
  {
    "id": "11",
    "name": "Casa Italia 11",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 2.7,
    "distance": "3.6 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=11",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.447995,
      "lng": -70.66873
    },
    "address": "Calle Ficticia 11, Santiago",
    "phone": "+56 2 2346 5698",
    "website": "https://restaurant11.cl",
    "description": "Descripción del restaurante 11",
    "features": [
      "Wi-Fi",
      "Reservas"
    ],
    "photos": []
  },
  {
    "id": "12",
    "name": "Taco Feliz 12",
    "cuisine": "Mexicana",
    "price": "$$",
    "rating": 4.2,
    "distance": "2.8 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=12",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.432572,
      "lng": -70.664778
    },
    "address": "Calle Ficticia 12, Santiago",
    "phone": "+56 2 3907 8334",
    "website": "https://restaurant12.cl",
    "description": "Descripción del restaurante 12",
    "features": [
      "Comida rápida"
    ],
    "photos": []
  },
  {
    "id": "13",
    "name": "Sabor Peruano 13",
    "cuisine": "Peruana",
    "price": "$$$",
    "rating": 1.4,
    "distance": "2.4 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=13",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.460635,
      "lng": -70.666484
    },
    "address": "Calle Ficticia 13, Santiago",
    "phone": "+56 2 9035 8568",
    "website": "https://restaurant13.cl",
    "description": "Descripción del restaurante 13",
    "features": [
      "Familiar",
      "Económico"
    ],
    "photos": []
  },
  {
    "id": "14",
    "name": "La Parrilla 14",
    "cuisine": "Carnes",
    "price": "$",
    "rating": 3.0,
    "distance": "3.8 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=14",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.457802,
      "lng": -70.652039
    },
    "address": "Calle Ficticia 14, Santiago",
    "phone": "+56 2 9215 5374",
    "website": "https://restaurant14.cl",
    "description": "Descripción del restaurante 14",
    "features": [
      "Gourmet"
    ],
    "photos": []
  },
  {
    "id": "15",
    "name": "Delicias del Mar 15",
    "cuisine": "Mariscos",
    "price": "$$",
    "rating": 2.5,
    "distance": "3.2 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=15",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.468666,
      "lng": -70.660785
    },
    "address": "Calle Ficticia 15, Santiago",
    "phone": "+56 2 4329 9777",
    "website": "https://restaurant15.cl",
    "description": "Descripción del restaurante 15",
    "features": [
      "Postres"
    ],
    "photos": []
  },
  {
    "id": "16",
    "name": "Pasta & Basta 16",
    "cuisine": "Italiana",
    "price": "$",
    "rating": 1.6,
    "distance": "3.2 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=16",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.462121,
      "lng": -70.640953
    },
    "address": "Calle Ficticia 16, Santiago",
    "phone": "+56 2 7092 1554",
    "website": "https://restaurant16.cl",
    "description": "Descripción del restaurante 16",
    "features": [
      "Vegetariano",
      "Sustentable"
    ],
    "photos": []
  },
  {
    "id": "17",
    "name": "El Veggie 17",
    "cuisine": "Vegetariana",
    "price": "$$$",
    "rating": 2.8,
    "distance": "3.2 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=17",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.456364,
      "lng": -70.640907
    },
    "address": "Calle Ficticia 17, Santiago",
    "phone": "+56 2 8323 5312",
    "website": "https://restaurant17.cl",
    "description": "Descripción del restaurante 17",
    "features": [
      "Dog Friendly"
    ],
    "photos": []
  },
  {
    "id": "18",
    "name": "Kebab House 18",
    "cuisine": "Árabe",
    "price": "$",
    "rating": 4.2,
    "distance": "1.9 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=18",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.447815,
      "lng": -70.647968
    },
    "address": "Calle Ficticia 18, Santiago",
    "phone": "+56 2 4759 3818",
    "website": "https://restaurant18.cl",
    "description": "Descripción del restaurante 18",
    "features": [
      "Con terraza"
    ],
    "photos": []
  },
  {
    "id": "19",
    "name": "Pan y Vino 19",
    "cuisine": "Panadería",
    "price": "$",
    "rating": 1.3,
    "distance": "2.3 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=19",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.452386,
      "lng": -70.662551
    },
    "address": "Calle Ficticia 19, Santiago",
    "phone": "+56 2 4704 1927",
    "website": "https://restaurant19.cl",
    "description": "Descripción del restaurante 19",
    "features": [
      "Accesible"
    ],
    "photos": []
  },
  {
    "id": "20",
    "name": "Donde Juan 20",
    "cuisine": "Chilena",
    "price": "$$$",
    "rating": 3.3,
    "distance": "0.7 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=20",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.456198,
      "lng": -70.646659
    },
    "address": "Calle Ficticia 20, Santiago",
    "phone": "+56 2 6309 3961",
    "website": "https://restaurant20.cl",
    "description": "Descripción del restaurante 20",
    "features": [
      "Delivery",
      "Takeaway"
    ],
    "photos": []
  },
  {
    "id": "21",
    "name": "Casa Italia 21",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 1.6,
    "distance": "2.5 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=21",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.4544,
      "lng": -70.642903
    },
    "address": "Calle Ficticia 21, Santiago",
    "phone": "+56 2 9188 3218",
    "website": "https://restaurant21.cl",
    "description": "Descripción del restaurante 21",
    "features": [
      "Wi-Fi",
      "Reservas"
    ],
    "photos": []
  },
  {
    "id": "22",
    "name": "Taco Feliz 22",
    "cuisine": "Mexicana",
    "price": "$$",
    "rating": 3.7,
    "distance": "2.6 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=22",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.461543,
      "lng": -70.668388
    },
    "address": "Calle Ficticia 22, Santiago",
    "phone": "+56 2 3822 4530",
    "website": "https://restaurant22.cl",
    "description": "Descripción del restaurante 22",
    "features": [
      "Comida rápida"
    ],
    "photos": []
  },
  {
    "id": "23",
    "name": "Sabor Peruano 23",
    "cuisine": "Peruana",
    "price": "$$$",
    "rating": 2.3,
    "distance": "1.5 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=23",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.443809,
      "lng": -70.660853
    },
    "address": "Calle Ficticia 23, Santiago",
    "phone": "+56 2 5279 4616",
    "website": "https://restaurant23.cl",
    "description": "Descripción del restaurante 23",
    "features": [
      "Familiar",
      "Económico"
    ],
    "photos": []
  },
  {
    "id": "24",
    "name": "La Parrilla 24",
    "cuisine": "Carnes",
    "price": "$",
    "rating": 4.0,
    "distance": "0.9 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=24",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.452831,
      "lng": -70.653731
    },
    "address": "Calle Ficticia 24, Santiago",
    "phone": "+56 2 5710 4549",
    "website": "https://restaurant24.cl",
    "description": "Descripción del restaurante 24",
    "features": [
      "Gourmet"
    ],
    "photos": []
  },
  {
    "id": "25",
    "name": "Delicias del Mar 25",
    "cuisine": "Mariscos",
    "price": "$",
    "rating": 4.5,
    "distance": "0.6 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=25",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.459166,
      "lng": -70.63325
    },
    "address": "Calle Ficticia 25, Santiago",
    "phone": "+56 2 5878 9763",
    "website": "https://restaurant25.cl",
    "description": "Descripción del restaurante 25",
    "features": [
      "Postres"
    ],
    "photos": []
  },
  {
    "id": "26",
    "name": "Pasta & Basta 26",
    "cuisine": "Italiana",
    "price": "$",
    "rating": 2.7,
    "distance": "1.4 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=26",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.43591,
      "lng": -70.649431
    },
    "address": "Calle Ficticia 26, Santiago",
    "phone": "+56 2 7475 7516",
    "website": "https://restaurant26.cl",
    "description": "Descripción del restaurante 26",
    "features": [
      "Vegetariano",
      "Sustentable"
    ],
    "photos": []
  },
  {
    "id": "27",
    "name": "El Veggie 27",
    "cuisine": "Vegetariana",
    "price": "$$",
    "rating": 3.5,
    "distance": "0.4 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=27",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.431881,
      "lng": -70.649877
    },
    "address": "Calle Ficticia 27, Santiago",
    "phone": "+56 2 2275 2964",
    "website": "https://restaurant27.cl",
    "description": "Descripción del restaurante 27",
    "features": [
      "Dog Friendly"
    ],
    "photos": []
  },
  {
    "id": "28",
    "name": "Kebab House 28",
    "cuisine": "Árabe",
    "price": "$$$",
    "rating": 3.3,
    "distance": "0.7 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=28",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.434982,
      "lng": -70.654457
    },
    "address": "Calle Ficticia 28, Santiago",
    "phone": "+56 2 9927 6221",
    "website": "https://restaurant28.cl",
    "description": "Descripción del restaurante 28",
    "features": [
      "Con terraza"
    ],
    "photos": []
  },
  {
    "id": "29",
    "name": "Pan y Vino 29",
    "cuisine": "Panadería",
    "price": "$",
    "rating": 4.3,
    "distance": "2.3 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=29",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.449819,
      "lng": -70.646783
    },
    "address": "Calle Ficticia 29, Santiago",
    "phone": "+56 2 8941 6060",
    "website": "https://restaurant29.cl",
    "description": "Descripción del restaurante 29",
    "features": [
      "Accesible"
    ],
    "photos": []
  },
  {
    "id": "30",
    "name": "Donde Juan 30",
    "cuisine": "Chilena",
    "price": "$$$",
    "rating": 2.8,
    "distance": "0.7 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=30",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.442919,
      "lng": -70.643914
    },
    "address": "Calle Ficticia 30, Santiago",
    "phone": "+56 2 2872 2269",
    "website": "https://restaurant30.cl",
    "description": "Descripción del restaurante 30",
    "features": [
      "Delivery",
      "Takeaway"
    ],
    "photos": []
  },
  {
    "id": "31",
    "name": "Casa Italia 31",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 3.9,
    "distance": "1.0 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=31",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.448608,
      "lng": -70.658774
    },
    "address": "Calle Ficticia 31, Santiago",
    "phone": "+56 2 3781 5194",
    "website": "https://restaurant31.cl",
    "description": "Descripción del restaurante 31",
    "features": [
      "Wi-Fi",
      "Reservas"
    ],
    "photos": []
  },
  {
    "id": "32",
    "name": "Taco Feliz 32",
    "cuisine": "Mexicana",
    "price": "$$",
    "rating": 1.4,
    "distance": "4.4 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=32",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.462384,
      "lng": -70.668115
    },
    "address": "Calle Ficticia 32, Santiago",
    "phone": "+56 2 3523 7766",
    "website": "https://restaurant32.cl",
    "description": "Descripción del restaurante 32",
    "features": [
      "Comida rápida"
    ],
    "photos": []
  },
  {
    "id": "33",
    "name": "Sabor Peruano 33",
    "cuisine": "Peruana",
    "price": "$$$",
    "rating": 1.2,
    "distance": "3.1 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=33",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.448204,
      "lng": -70.638196
    },
    "address": "Calle Ficticia 33, Santiago",
    "phone": "+56 2 8007 9916",
    "website": "https://restaurant33.cl",
    "description": "Descripción del restaurante 33",
    "features": [
      "Familiar",
      "Económico"
    ],
    "photos": []
  },
  {
    "id": "34",
    "name": "La Parrilla 34",
    "cuisine": "Carnes",
    "price": "$$",
    "rating": 3.2,
    "distance": "3.6 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=34",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.453738,
      "lng": -70.644846
    },
    "address": "Calle Ficticia 34, Santiago",
    "phone": "+56 2 4486 2370",
    "website": "https://restaurant34.cl",
    "description": "Descripción del restaurante 34",
    "features": [
      "Gourmet"
    ],
    "photos": []
  },
  {
    "id": "35",
    "name": "Delicias del Mar 35",
    "cuisine": "Mariscos",
    "price": "$",
    "rating": 4.3,
    "distance": "1.9 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=35",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.453073,
      "lng": -70.636948
    },
    "address": "Calle Ficticia 35, Santiago",
    "phone": "+56 2 7498 4652",
    "website": "https://restaurant35.cl",
    "description": "Descripción del restaurante 35",
    "features": [
      "Postres"
    ],
    "photos": []
  },
  {
    "id": "36",
    "name": "Pasta & Basta 36",
    "cuisine": "Italiana",
    "price": "$",
    "rating": 2.1,
    "distance": "3.0 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=36",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.449341,
      "lng": -70.638468
    },
    "address": "Calle Ficticia 36, Santiago",
    "phone": "+56 2 4107 6141",
    "website": "https://restaurant36.cl",
    "description": "Descripción del restaurante 36",
    "features": [
      "Vegetariano",
      "Sustentable"
    ],
    "photos": []
  },
  {
    "id": "37",
    "name": "El Veggie 37",
    "cuisine": "Vegetariana",
    "price": "$",
    "rating": 2.0,
    "distance": "3.3 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=37",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.437423,
      "lng": -70.650132
    },
    "address": "Calle Ficticia 37, Santiago",
    "phone": "+56 2 5151 2371",
    "website": "https://restaurant37.cl",
    "description": "Descripción del restaurante 37",
    "features": [
      "Dog Friendly"
    ],
    "photos": []
  },
  {
    "id": "38",
    "name": "Kebab House 38",
    "cuisine": "Árabe",
    "price": "$$$",
    "rating": 4.7,
    "distance": "1.5 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=38",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.432423,
      "lng": -70.661053
    },
    "address": "Calle Ficticia 38, Santiago",
    "phone": "+56 2 8673 2824",
    "website": "https://restaurant38.cl",
    "description": "Descripción del restaurante 38",
    "features": [
      "Con terraza"
    ],
    "photos": []
  },
  {
    "id": "39",
    "name": "Pan y Vino 39",
    "cuisine": "Panadería",
    "price": "$$$",
    "rating": 4.4,
    "distance": "0.5 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=39",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.469459,
      "lng": -70.659237
    },
    "address": "Calle Ficticia 39, Santiago",
    "phone": "+56 2 5195 9666",
    "website": "https://restaurant39.cl",
    "description": "Descripción del restaurante 39",
    "features": [
      "Accesible"
    ],
    "photos": []
  },
  {
    "id": "40",
    "name": "Donde Juan 40",
    "cuisine": "Chilena",
    "price": "$$",
    "rating": 2.1,
    "distance": "3.9 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=40",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.445958,
      "lng": -70.635885
    },
    "address": "Calle Ficticia 40, Santiago",
    "phone": "+56 2 8875 3808",
    "website": "https://restaurant40.cl",
    "description": "Descripción del restaurante 40",
    "features": [
      "Delivery",
      "Takeaway"
    ],
    "photos": []
  },
  {
    "id": "41",
    "name": "Casa Italia 41",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 1.5,
    "distance": "0.8 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=41",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.467851,
      "lng": -70.639054
    },
    "address": "Calle Ficticia 41, Santiago",
    "phone": "+56 2 9108 8977",
    "website": "https://restaurant41.cl",
    "description": "Descripción del restaurante 41",
    "features": [
      "Wi-Fi",
      "Reservas"
    ],
    "photos": []
  },
  {
    "id": "42",
    "name": "Taco Feliz 42",
    "cuisine": "Mexicana",
    "price": "$",
    "rating": 1.7,
    "distance": "1.9 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=42",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.46753,
      "lng": -70.644053
    },
    "address": "Calle Ficticia 42, Santiago",
    "phone": "+56 2 3851 9858",
    "website": "https://restaurant42.cl",
    "description": "Descripción del restaurante 42",
    "features": [
      "Comida rápida"
    ],
    "photos": []
  },
  {
    "id": "43",
    "name": "Sabor Peruano 43",
    "cuisine": "Peruana",
    "price": "$$",
    "rating": 4.4,
    "distance": "4.0 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=43",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.431142,
      "lng": -70.667097
    },
    "address": "Calle Ficticia 43, Santiago",
    "phone": "+56 2 8828 1575",
    "website": "https://restaurant43.cl",
    "description": "Descripción del restaurante 43",
    "features": [
      "Familiar",
      "Económico"
    ],
    "photos": []
  },
  {
    "id": "44",
    "name": "La Parrilla 44",
    "cuisine": "Carnes",
    "price": "$",
    "rating": 2.5,
    "distance": "4.9 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=44",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.457559,
      "lng": -70.63679
    },
    "address": "Calle Ficticia 44, Santiago",
    "phone": "+56 2 2948 2909",
    "website": "https://restaurant44.cl",
    "description": "Descripción del restaurante 44",
    "features": [
      "Gourmet"
    ],
    "photos": []
  },
  {
    "id": "45",
    "name": "Delicias del Mar 45",
    "cuisine": "Mariscos",
    "price": "$$",
    "rating": 3.0,
    "distance": "4.5 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=45",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.446175,
      "lng": -70.639103
    },
    "address": "Calle Ficticia 45, Santiago",
    "phone": "+56 2 3786 3350",
    "website": "https://restaurant45.cl",
    "description": "Descripción del restaurante 45",
    "features": [
      "Postres"
    ],
    "photos": []
  },
  {
    "id": "46",
    "name": "Pasta & Basta 46",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 1.7,
    "distance": "0.5 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=46",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.4342,
      "lng": -70.667568
    },
    "address": "Calle Ficticia 46, Santiago",
    "phone": "+56 2 3120 9991",
    "website": "https://restaurant46.cl",
    "description": "Descripción del restaurante 46",
    "features": [
      "Vegetariano",
      "Sustentable"
    ],
    "photos": []
  },
  {
    "id": "47",
    "name": "El Veggie 47",
    "cuisine": "Vegetariana",
    "price": "$$$",
    "rating": 1.7,
    "distance": "4.4 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=47",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.430082,
      "lng": -70.654347
    },
    "address": "Calle Ficticia 47, Santiago",
    "phone": "+56 2 5633 6926",
    "website": "https://restaurant47.cl",
    "description": "Descripción del restaurante 47",
    "features": [
      "Dog Friendly"
    ],
    "photos": []
  },
  {
    "id": "48",
    "name": "Kebab House 48",
    "cuisine": "Árabe",
    "price": "$$$",
    "rating": 1.5,
    "distance": "3.2 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=48",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.451478,
      "lng": -70.630016
    },
    "address": "Calle Ficticia 48, Santiago",
    "phone": "+56 2 7459 8583",
    "website": "https://restaurant48.cl",
    "description": "Descripción del restaurante 48",
    "features": [
      "Con terraza"
    ],
    "photos": []
  },
  {
    "id": "49",
    "name": "Pan y Vino 49",
    "cuisine": "Panadería",
    "price": "$",
    "rating": 2.0,
    "distance": "3.3 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=49",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.436591,
      "lng": -70.639774
    },
    "address": "Calle Ficticia 49, Santiago",
    "phone": "+56 2 6775 3805",
    "website": "https://restaurant49.cl",
    "description": "Descripción del restaurante 49",
    "features": [
      "Accesible"
    ],
    "photos": []
  },
  {
    "id": "50",
    "name": "Donde Juan 50",
    "cuisine": "Chilena",
    "price": "$",
    "rating": 4.5,
    "distance": "5.0 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=50",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.445578,
      "lng": -70.66533
    },
    "address": "Calle Ficticia 50, Santiago",
    "phone": "+56 2 3133 4446",
    "website": "https://restaurant50.cl",
    "description": "Descripción del restaurante 50",
    "features": [
      "Delivery",
      "Takeaway"
    ],
    "photos": []
  },
  {
    "id": "51",
    "name": "Casa Italia 51",
    "cuisine": "Italiana",
    "price": "$",
    "rating": 3.0,
    "distance": "4.8 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=51",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.450844,
      "lng": -70.669323
    },
    "address": "Calle Ficticia 51, Santiago",
    "phone": "+56 2 8847 3900",
    "website": "https://restaurant51.cl",
    "description": "Descripción del restaurante 51",
    "features": [
      "Wi-Fi",
      "Reservas"
    ],
    "photos": []
  },
  {
    "id": "52",
    "name": "Taco Feliz 52",
    "cuisine": "Mexicana",
    "price": "$$",
    "rating": 4.0,
    "distance": "1.0 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=52",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.430536,
      "lng": -70.657137
    },
    "address": "Calle Ficticia 52, Santiago",
    "phone": "+56 2 9115 2366",
    "website": "https://restaurant52.cl",
    "description": "Descripción del restaurante 52",
    "features": [
      "Comida rápida"
    ],
    "photos": []
  },
  {
    "id": "53",
    "name": "Sabor Peruano 53",
    "cuisine": "Peruana",
    "price": "$$",
    "rating": 4.8,
    "distance": "0.7 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=53",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.452948,
      "lng": -70.630003
    },
    "address": "Calle Ficticia 53, Santiago",
    "phone": "+56 2 3138 4566",
    "website": "https://restaurant53.cl",
    "description": "Descripción del restaurante 53",
    "features": [
      "Familiar",
      "Económico"
    ],
    "photos": []
  },
  {
    "id": "54",
    "name": "La Parrilla 54",
    "cuisine": "Carnes",
    "price": "$$",
    "rating": 4.8,
    "distance": "1.8 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=54",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.432852,
      "lng": -70.660466
    },
    "address": "Calle Ficticia 54, Santiago",
    "phone": "+56 2 8445 3227",
    "website": "https://restaurant54.cl",
    "description": "Descripción del restaurante 54",
    "features": [
      "Gourmet"
    ],
    "photos": []
  },
  {
    "id": "55",
    "name": "Delicias del Mar 55",
    "cuisine": "Mariscos",
    "price": "$$$",
    "rating": 3.8,
    "distance": "2.1 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=55",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.459868,
      "lng": -70.630064
    },
    "address": "Calle Ficticia 55, Santiago",
    "phone": "+56 2 2770 7603",
    "website": "https://restaurant55.cl",
    "description": "Descripción del restaurante 55",
    "features": [
      "Postres"
    ],
    "photos": []
  },
  {
    "id": "56",
    "name": "Pasta & Basta 56",
    "cuisine": "Italiana",
    "price": "$$",
    "rating": 2.4,
    "distance": "4.0 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=56",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.447733,
      "lng": -70.641188
    },
    "address": "Calle Ficticia 56, Santiago",
    "phone": "+56 2 9605 2579",
    "website": "https://restaurant56.cl",
    "description": "Descripción del restaurante 56",
    "features": [
      "Vegetariano",
      "Sustentable"
    ],
    "photos": []
  },
  {
    "id": "57",
    "name": "El Veggie 57",
    "cuisine": "Vegetariana",
    "price": "$",
    "rating": 4.4,
    "distance": "3.7 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=57",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.435784,
      "lng": -70.645128
    },
    "address": "Calle Ficticia 57, Santiago",
    "phone": "+56 2 4635 1308",
    "website": "https://restaurant57.cl",
    "description": "Descripción del restaurante 57",
    "features": [
      "Dog Friendly"
    ],
    "photos": []
  },
  {
    "id": "58",
    "name": "Kebab House 58",
    "cuisine": "Árabe",
    "price": "$$",
    "rating": 1.1,
    "distance": "4.7 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=58",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.459389,
      "lng": -70.635029
    },
    "address": "Calle Ficticia 58, Santiago",
    "phone": "+56 2 6810 2175",
    "website": "https://restaurant58.cl",
    "description": "Descripción del restaurante 58",
    "features": [
      "Con terraza"
    ],
    "photos": []
  },
  {
    "id": "59",
    "name": "Pan y Vino 59",
    "cuisine": "Panadería",
    "price": "$$",
    "rating": 3.0,
    "distance": "2.6 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=59",
    "isOpen": true,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.446458,
      "lng": -70.664333
    },
    "address": "Calle Ficticia 59, Santiago",
    "phone": "+56 2 8553 7224",
    "website": "https://restaurant59.cl",
    "description": "Descripción del restaurante 59",
    "features": [
      "Accesible"
    ],
    "photos": []
  },
  {
    "id": "60",
    "name": "Donde Juan 60",
    "cuisine": "Chilena",
    "price": "$$",
    "rating": 1.8,
    "distance": "1.4 km",
    "imageUrl": "https://source.unsplash.com/random/400x300?sig=60",
    "isOpen": false,
    "openingTime": "11:00 AM",
    "closingTime": "10:00 PM",
    "position": {
      "lat": -33.445259,
      "lng": -70.649701
    },
    "address": "Calle Ficticia 60, Santiago",
    "phone": "+56 2 3954 5790",
    "website": "https://restaurant60.cl",
    "description": "Descripción del restaurante 60",
    "features": [
      "Delivery",
      "Takeaway"
    ],
    "photos": []
  }
];