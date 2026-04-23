const movies = [
  {
    id: 1,
    title: 'Casablanca',
    description:
      'A cynical nightclub owner in wartime Morocco faces a moral dilemma when his former lover and her fugitive husband beg for his help to escape the Nazis.',
    year: 1942,
    genres: ['Drama', 'Romance', 'War'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Casablanca',
    video: 'https://dummyvideo.com/casablanca_trailer.mp4',
  },
  {
    id: 2,
    title: 'Citizen Kane',
    description:
      "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance: 'Rosebud.'",
    year: 1941,
    genres: ['Drama', 'Mystery'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Citizen+Kane',
    video: 'https://dummyvideo.com/citizen_kane_trailer.mp4',
  },
  {
    id: 3,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.',
    year: 1972,
    genres: ['Crime', 'Drama'],
    image: 'https://dummyimage.com/300x450/000/fff&text=The+Godfather',
    video: 'https://dummyvideo.com/godfather_trailer.mp4',
  },
  {
    id: 4,
    title: 'Gone with the Wind',
    description:
      'A manipulative Southern belle struggles to survive the American Civil War and Reconstruction era while clinging to her love for a married man.',
    year: 1939,
    genres: ['Drama', 'Romance', 'War'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Gone+with+the+Wind',
    video: 'https://dummyvideo.com/gone_with_wind_trailer.mp4',
  },
  {
    id: 5,
    title: 'Lawrence of Arabia',
    description:
      'The story of T.E. Lawrence, the British officer who united Arab tribes against the Ottoman Empire during World War I.',
    year: 1962,
    genres: ['Adventure', 'Biography', 'Drama', 'War'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Lawrence+of+Arabia',
    video: 'https://dummyvideo.com/lawrence_arabia_trailer.mp4',
  },
  {
    id: 6,
    title: 'The Wizard of Oz',
    description:
      'A young farm girl and her dog are whisked away by a tornado to a magical land, where she befriends a Scarecrow, a Tin Man, and a Cowardly Lion while trying to find her way home.',
    year: 1939,
    genres: ['Adventure', 'Family', 'Fantasy', 'Musical'],
    image: 'https://dummyimage.com/300x450/000/fff&text=The+Wizard+of+Oz',
    video: 'https://dummyvideo.com/wizard_oz_trailer.mp4',
  },
  {
    id: 7,
    title: 'Psycho',
    description:
      'A secretary on the run embezzles money and checks into a remote motel run by a troubled young man under the control of his possessive mother.',
    year: 1960,
    genres: ['Horror', 'Mystery', 'Thriller'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Psycho',
    video: 'https://dummyvideo.com/psycho_trailer.mp4',
  },
  {
    id: 8,
    title: '2001: A Space Odyssey',
    description:
      'A mysterious monolith appears at the dawn of man, then reappears on the Moon, leading a crew of astronauts and a sentient computer on a mind-bending voyage to Jupiter.',
    year: 1968,
    genres: ['Adventure', 'Sci-Fi'],
    image: 'https://dummyimage.com/300x450/000/fff&text=2001+Space+Odyssey',
    video: 'https://dummyvideo.com/2001_trailer.mp4',
  },
  {
    id: 9,
    title: "Singin' in the Rain",
    description:
      'A silent film star falls for a chorus girl just as the industry is making the painful transition to talking pictures.',
    year: 1952,
    genres: ['Comedy', 'Musical', 'Romance'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Singin+in+the+Rain',
    video: 'https://dummyvideo.com/singin_rain_trailer.mp4',
  },
  {
    id: 10,
    title: "It's a Wonderful Life",
    description:
      'An angel shows a desperate businessman what the world would have been like if he had never existed.',
    year: 1946,
    genres: ['Drama', 'Family', 'Fantasy'],
    image:
      'https://dummyimage.com/300x450/000/fff&text=It%27s+a+Wonderful+Life',
    video: 'https://dummyvideo.com/wonderful_life_trailer.mp4',
  },
  {
    id: 11,
    title: 'Sunset Boulevard',
    description:
      'A struggling screenwriter becomes entangled with a faded silent-film star living in delusion in her crumbling Hollywood mansion.',
    year: 1950,
    genres: ['Drama', 'Film-Noir'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Sunset+Boulevard',
    video: 'https://dummyvideo.com/sunset_boulevard_trailer.mp4',
  },
  {
    id: 12,
    title: 'On the Waterfront',
    description:
      'A longshoreman battles his conscience and the mob when he decides to testify against his corrupt union boss.',
    year: 1954,
    genres: ['Crime', 'Drama', 'Thriller'],
    image: 'https://dummyimage.com/300x450/000/fff&text=On+the+Waterfront',
    video: 'https://dummyvideo.com/waterfront_trailer.mp4',
  },
  {
    id: 13,
    title: 'Some Like It Hot',
    description:
      'Two musicians on the run from gangsters disguise themselves as women and join an all-female jazz band.',
    year: 1959,
    genres: ['Comedy', 'Music', 'Romance'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Some+Like+It+Hot',
    video: 'https://dummyvideo.com/some_like_hot_trailer.mp4',
  },
  {
    id: 14,
    title: 'The Graduate',
    description:
      'A disillusioned recent college graduate has an affair with an older woman, then falls for her daughter.',
    year: 1967,
    genres: ['Comedy', 'Drama', 'Romance'],
    image: 'https://dummyimage.com/300x450/000/fff&text=The+Graduate',
    video: 'https://dummyvideo.com/graduate_trailer.mp4',
  },
  {
    id: 15,
    title: "One Flew Over the Cuckoo's Nest",
    description:
      'A rebellious patient in a mental institution inspires his fellow inmates to challenge the oppressive rule of the head nurse.',
    year: 1975,
    genres: ['Drama'],
    image:
      'https://dummyimage.com/300x450/000/fff&text=One+Flew+Over+Cuckoo%27s+Nest',
    video: 'https://dummyvideo.com/cuckoo_nest_trailer.mp4',
  },
  {
    id: 16,
    title: 'The Apartment',
    description:
      'An office worker lends his apartment to his superiors for their extramarital affairs, hoping to advance his career, but complications arise when he falls for the elevator girl.',
    year: 1960,
    genres: ['Comedy', 'Drama', 'Romance'],
    image: 'https://dummyimage.com/300x450/000/fff&text=The+Apartment',
    video: 'https://dummyvideo.com/apartment_trailer.mp4',
  },
  {
    id: 17,
    title: 'Vertigo',
    description:
      "A retired San Francisco detective suffering from acrophobia investigates the strange behavior of a friend's wife, whom he has been hired to follow.",
    year: 1958,
    genres: ['Mystery', 'Romance', 'Thriller'],
    image: 'https://dummyimage.com/300x450/000/fff&text=Vertigo',
    video: 'https://dummyvideo.com/vertigo_trailer.mp4',
  },
  {
    id: 18,
    title: 'The Third Man',
    description:
      'An American pulp writer arrives in post-WWII Vienna to work for his friend, only to discover that the friend is dead – and maybe not so dead after all.',
    year: 1949,
    genres: ['Film-Noir', 'Mystery', 'Thriller'],
    image: 'https://dummyimage.com/300x450/000/fff&text=The+Third+Man',
    video: 'https://dummyvideo.com/third_man_trailer.mp4',
  },
  {
    id: 19,
    title: 'North by Northwest',
    description:
      'A New York City advertising executive is mistaken for a government agent by a mysterious organization and chased across the country.',
    year: 1959,
    genres: ['Action', 'Adventure', 'Mystery', 'Thriller'],
    image: 'https://dummyimage.com/300x450/000/fff&text=North+by+Northwest',
    video: 'https://dummyvideo.com/north_northwest_trailer.mp4',
  },
  {
    id: 20,
    title: 'The Maltese Falcon',
    description:
      'A San Francisco private detective gets caught in a web of lies and murder as he hunts for a priceless, jewel-encrusted falcon statue.',
    year: 1941,
    genres: ['Film-Noir', 'Mystery'],
    image: 'https://dummyimage.com/300x450/000/fff&text=The+Maltese+Falcon',
    video: 'https://dummyvideo.com/maltese_falcon_trailer.mp4',
  },
];

module.exports = movies;
