const { v4: uuidv4 } = require('uuid');

module.exports = () => {
  return [
    {
      id: 1,
      city_id: 1,
      name: 'Contemporary Home, Marais, Central Paris',
      description:
        'Fusing vintage elegance with modern design, this apartment is a true expression of Parisian style. The chevron wood floors and sleek minimalist furniture are accented by pops of color and decor items providing an elevated and authentic ambiance',
      rooms: 2,
      bathrooms: 1,
      max_guests: 3,
      price_by_night: 129,
      image: 'https://a0.muscache.com/im/pictures/71f104d3-a992-4e3e-85e5-c97ad224b3c0.jpg',
    },
    {
      id: 2,
      city_id: 2,
      name: 'Villa La Palmeraie, calme & confort à 5mn du métro',
      description:
        'Villa La Palmeraie est un joli T2 de 38m2 situé au rez-de-chaussée d’une ancienne imprimerie entièrement réhabilitée en 2019. Il vous accueille jusqu’à 4 personnes pour vos séjours professionnels ou personnels. Un boîtier à clés vous permet d’arriver à l’heure que vous désirez',
      rooms: 2,
      bathrooms: 1,
      max_guests: 4,
      price_by_night: 75,
      image: 'https://a0.muscache.com/im/pictures/4cfd6bfc-8cb8-4cbb-a892-266e9dadad3c.jpg',
    },
    {
      id: 3,
      city_id: 1,
      name: 'Sweet & Cosy room Canal Saint Martin',
      description:
        'La chambre est située en plein cœur du quartier de la République, dans le 10e arrondissement de Paris. Toute proche du beau quartier du Marais, des transports et des commerces, c’est une chambre calme, lumineuse et confortable où vous pourrez vous reposer après vos longues journées de découverte et de balade dans les rues de Paris.',
      rooms: 1,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 74,
      image: 'https://a0.muscache.com/im/pictures/e3faa513-acc3-4784-86ac-136b0d208381.jpg',
    },
    {
      id: 4,
      city_id: 4,
      name: 'Mon bel appart',
      description: 'Un bel appart confortable au coeur de Bordeaux',
      rooms: 2,
      bathrooms: 1,
      max_guests: 3,
      price_by_night: 59,
      image: 'https://a0.muscache.com/im/pictures/e3faa513-acc3-4784-86ac-136b0d208381.jpg',
    },
    {
      id: 5,
      city_id: 5,
      name: 'Séjour inoubliable chez Happy Family',
      description: 'Un grand appartement, composé de trois chambres et un séjour de plus de 30 m2.',
      rooms: 2,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 25,
      image: 'https://a0.muscache.com/im/pictures/2758f1f9-6025-4a1b-a5f1-a1b947420f87.jpg',
    },
    {
      id: 6,
      city_id: 6,
      name: 'Suite parentale entre Montpellier et la Mer',
      description:
        'Grande chambre "suite parentale" de 26m2 comprenant une chambre, une salle de bain privée et un dressing plus un balcon.',
      rooms: 2,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 22,
      image: 'https://a0.muscache.com/im/pictures/18932e12-5e42-4dd9-ab8a-c6085a507dc6.jpg',
    },
    {
      id: 7,
      city_id: 1,
      name: 'Champs-Élysées Golden triangle flat with mezzanine',
      description:
        'Newly renovated tiny apartment with mezzanine, compact and design,well-equipped, direct elevator.',
      rooms: 1,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 74,
      image: 'https://a0.muscache.com/im/pictures/63119ccc-6c2d-443b-b63b-206ee276eca8.jpg',
    },
    {
      id: 8,
      city_id: 1,
      name: 'Chambre Double Standard',
      description:
        'Profitez d’une expérience Parisienne dans une ambiance contemporaine et relaxante tout en restant connecté.',
      rooms: 1,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 58,
      image: 'https://a0.muscache.com/im/pictures/1b4f37fe-101c-472e-a861-afd03c6bdf15.jpg',
    },
    {
      id: 9,
      city_id: 1,
      name: 'Charmant studio avec vue sur le jardin',
      description:
        'Charmant studio de 25 m2 donnant sur le jardin. Salle d eau douche à l italienne spacieuse. Chambre et cuisine équipée. Il se situe au rez-de-chaussée de ma maison. La terrasse du studio est mitoyenne à la mienne mais sans vis à vis.',
      rooms: 1,
      bathrooms: 1,
      max_guests: 3,
      price_by_night: 58,
      image: 'https://a0.muscache.com/im/pictures/f995a605-d799-4e71-9297-c1ff4167b748.jpg',
    },
    {
      id: 10,
      city_id: 1,
      name: 'Joli studio atypique tout confort dans jardin',
      description:
        'Studio indépendant et lumineux dans une ambiance familiale sans être envahissante ! Proche commerces, bus, RER B/T4 à 15mm à pied, Parc Expos Villepinte concours et salons, Aéroport et Stade de France',
      rooms: 1,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 46,
      image: 'https://a0.muscache.com/im/pictures/1a595d0c-4341-4bd3-8b71-41f82db8d30b.jpg',
    },
    {
      id: 11,
      city_id: 1,
      name: 'Bel appartement confortable - 18ème',
      description:
        'Ce bel appartement se situe dans le 18ème arrondissement, proche de la gare du Nord. Il est spacieux et très agréable.',
      rooms: 1,
      bathrooms: 1,
      max_guests: 2,
      price_by_night: 78,
      image: 'https://a0.muscache.com/im/pictures/94da9770-065d-465a-9e88-b772c1db0920.jpg',
    },
    {
      id: 12,
      city_id: 1,
      name: 'Appartement Cosy',
      description:
        'Bienvenue dans cet appartement cosy au cœur de Saint-Gratien, avec une place de parking privée à votre disposition.',
      rooms: 1,
      bathrooms: 1,
      max_guests: 4,
      price_by_night: 71,
      image: 'https://a0.muscache.com/im/pictures/06460dc3-f6ee-405d-bd5a-536820bf9522.jpg',
    },
  ];
};
