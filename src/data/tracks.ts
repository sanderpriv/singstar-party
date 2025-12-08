export interface Track {
  id: string;
  artist: string;
  title: string;
  year: number;
  game: string;
}

export interface Game {
  id: string;
  title: string;
  region: string;
  releaseYear: number;
  tracks: Track[];
}

export const tracks: Track[] = [
  {
    "id": "1",
    "artist": "ABBA",
    "title": "Chiquitita",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "2",
    "artist": "ABBA",
    "title": "Dancing Queen",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "3",
    "artist": "ABBA",
    "title": "Does Your Mother Know",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "4",
    "artist": "ABBA",
    "title": "Fernando",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "5",
    "artist": "ABBA",
    "title": "Gimme! Gimme! Gimme! (A Man After Midnight)",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "6",
    "artist": "ABBA",
    "title": "\"I Do, I Do, I Do, I Do, I Do\"",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "7",
    "artist": "ABBA",
    "title": "\"Knowing Me, Knowing You\"",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "8",
    "artist": "ABBA",
    "title": "Mamma Mia",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "9",
    "artist": "ABBA",
    "title": "\"Money, Money, Money\"",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "10",
    "artist": "ABBA",
    "title": "One of Us",
    "year": 1981,
    "game": "SingStar ABBA"
  },
  {
    "id": "11",
    "artist": "ABBA",
    "title": "Ring Ring",
    "year": 1973,
    "game": "SingStar ABBA"
  },
  {
    "id": "12",
    "artist": "ABBA",
    "title": "SOS",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "13",
    "artist": "ABBA",
    "title": "Summer Night City",
    "year": 1978,
    "game": "SingStar ABBA"
  },
  {
    "id": "14",
    "artist": "ABBA",
    "title": "Super Trouper",
    "year": 1980,
    "game": "SingStar ABBA"
  },
  {
    "id": "15",
    "artist": "ABBA",
    "title": "Take a Chance on Me",
    "year": 1978,
    "game": "SingStar ABBA"
  },
  {
    "id": "16",
    "artist": "ABBA",
    "title": "Thank You for the Music",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "17",
    "artist": "ABBA",
    "title": "The Name of the Game",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "18",
    "artist": "ABBA",
    "title": "The Winner Takes It All",
    "year": 1980,
    "game": "SingStar ABBA"
  },
  {
    "id": "19",
    "artist": "ABBA",
    "title": "Voulez-Vous",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "20",
    "artist": "ABBA",
    "title": "Waterloo",
    "year": 1974,
    "game": "SingStar ABBA"
  },
  {
    "id": "21",
    "artist": "Bananarama",
    "title": "Cruel Summer",
    "year": 1983,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "22",
    "artist": "Bananarama",
    "title": "Love in the First Degree",
    "year": 1987,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "23",
    "artist": "The Bangles",
    "title": "Eternal Flame",
    "year": 1989,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "24",
    "artist": "Boyz II Men",
    "title": "I'll Make Love to You",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "25",
    "artist": "Boyzone",
    "title": "Love Me for a Reason",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "26",
    "artist": "Bros",
    "title": "I Owe You Nothing",
    "year": 1988,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "27",
    "artist": "Busted",
    "title": "Air Hostess",
    "year": 2002,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "28",
    "artist": "Busted",
    "title": "What I Go to School For",
    "year": 2002,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "29",
    "artist": "East 17",
    "title": "Let It Rain",
    "year": 1995,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "30",
    "artist": "East 17",
    "title": "Stay Another Day",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "31",
    "artist": "En Vogue",
    "title": "Free Your Mind",
    "year": 1992,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "32",
    "artist": "Five",
    "title": "Everybody Get Up",
    "year": 1998,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "33",
    "artist": "Five",
    "title": "Keep On Movin'",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "34",
    "artist": "Girls Aloud",
    "title": "The Show",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "35",
    "artist": "Hanson",
    "title": "MMMBop",
    "year": 1997,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "36",
    "artist": "Jade",
    "title": "Don't Walk Away",
    "year": 1993,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "37",
    "artist": "McFly",
    "title": "All About You",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "38",
    "artist": "McFly",
    "title": "5 Colours in Her Hair",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "39",
    "artist": "Mel and Kim",
    "title": "Showing Out (Get Fresh at the Weekend)",
    "year": 1986,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "40",
    "artist": "Mis-Teeq",
    "title": "One Night Stand",
    "year": 2001,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "41",
    "artist": "New Edition",
    "title": "Candy Girl",
    "year": 1983,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "42",
    "artist": "The Pussycat Dolls",
    "title": "Stickwitu",
    "year": 2005,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "43",
    "artist": "The Shangri-Las",
    "title": "Leader of the Pack",
    "year": 1964,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "44",
    "artist": "Sister Sledge",
    "title": "He's the Greatest Dancer",
    "year": 1979,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "45",
    "artist": "Spice Girls",
    "title": "Say You'll Be There",
    "year": 1996,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "46",
    "artist": "Sugababes",
    "title": "About You Now",
    "year": 2007,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "47",
    "artist": "The Supremes",
    "title": "Stop! In the Name of Love",
    "year": 1965,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "48",
    "artist": "Westlife",
    "title": "Flying Without Wings",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "49",
    "artist": "Westlife",
    "title": "Swear It Again",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "50",
    "artist": "Wilson Phillips",
    "title": "Hold On",
    "year": 1990,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "51",
    "artist": "3OH!3",
    "title": "Don't Trust Me",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "52",
    "artist": "A. R. Rahman feat. The Pussycat Dolls",
    "title": "Jai Ho",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "53",
    "artist": "Alex Lloyd",
    "title": "Amazing",
    "year": 2001,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "54",
    "artist": "Ben Lee",
    "title": "Catch My Disease",
    "year": 2007,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "55",
    "artist": "Colbie Caillat",
    "title": "Fallin' for You",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "56",
    "artist": "Empire of the Sun",
    "title": "Walking on a Dream",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "57",
    "artist": "George Michael",
    "title": "Outside",
    "year": 1998,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "58",
    "artist": "Guy Sebastian feat. Jordin Sparks",
    "title": "Art of Love",
    "year": 2010,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "59",
    "artist": "Kate Miller-Heidke",
    "title": "The Last Day on Earth",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "60",
    "artist": "La Roux",
    "title": "Bulletproof",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "61",
    "artist": "Lady Gaga",
    "title": "Poker Face",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "62",
    "artist": "The Last Goodnight",
    "title": "Pictures of You",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "63",
    "artist": "The Living End",
    "title": "White Noise",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "64",
    "artist": "Michael Bublé",
    "title": "Haven't Met You Yet",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "65",
    "artist": "Mika",
    "title": "We Are Golden",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "66",
    "artist": "Milli Vanilli",
    "title": "Blame It on the Rain",
    "year": 1989,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "67",
    "artist": "Natalie Bassingthwaighte",
    "title": "Alive",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "68",
    "artist": "Nelly Furtado",
    "title": "Turn Off the Light",
    "year": 2001,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "69",
    "artist": "Pixie Lott",
    "title": "Boys and Girls",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "70",
    "artist": "The Presets",
    "title": "This Boy's in Love",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "71",
    "artist": "The Pussycat Dolls",
    "title": "Hush Hush; Hush Hush",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "72",
    "artist": "Vanessa Amorosi",
    "title": "This Is Who I Am",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "73",
    "artist": "Vitamin C",
    "title": "Graduation (Friends Forever)",
    "year": 2000,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "74",
    "artist": "Wes Carr",
    "title": "Feels Like Woah",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "75",
    "artist": "Wolfmother",
    "title": "New Moon Rising",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "76",
    "artist": "Alan Jackson",
    "title": "Chattahoochee",
    "year": 1993,
    "game": "SingStar Country"
  },
  {
    "id": "77",
    "artist": "Alan Jackson",
    "title": "Good Time",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "78",
    "artist": "Big & Rich",
    "title": "Save a Horse (Ride a Cowboy)",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "79",
    "artist": "Blake Shelton",
    "title": "Home",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "80",
    "artist": "Brad Paisley",
    "title": "Online",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "81",
    "artist": "Brooks & Dunn",
    "title": "Boot Scootin' Boogie",
    "year": 1992,
    "game": "SingStar Country"
  },
  {
    "id": "82",
    "artist": "Brooks & Dunn (with Reba McEntire)",
    "title": "If You See Him/If You See Her",
    "year": 1998,
    "game": "SingStar Country"
  },
  {
    "id": "83",
    "artist": "Bucky Covington",
    "title": "It's Good To Be Us",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "84",
    "artist": "Faith Hill",
    "title": "Red Umbrella",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "85",
    "artist": "Gretchen Wilson",
    "title": "Redneck Woman",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "86",
    "artist": "Jessica Simpson",
    "title": "Come On Over",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "87",
    "artist": "Jewel",
    "title": "Stronger Woman",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "88",
    "artist": "Johnny Cash",
    "title": "A Boy Named Sue",
    "year": 1969,
    "game": "SingStar Country"
  },
  {
    "id": "89",
    "artist": "Johnny Cash",
    "title": "I Walk the Line",
    "year": 1956,
    "game": "SingStar Country"
  },
  {
    "id": "90",
    "artist": "Josh Turner",
    "title": "Another Try",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "91",
    "artist": "Keith Urban",
    "title": "Days Go By",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "92",
    "artist": "Kellie Pickler",
    "title": "Red High Heels",
    "year": 2006,
    "game": "SingStar Country"
  },
  {
    "id": "93",
    "artist": "Kenny Chesney",
    "title": "Big Star",
    "year": 2003,
    "game": "SingStar Country"
  },
  {
    "id": "94",
    "artist": "Lady Antebellum",
    "title": "Love Don't Live Here",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "95",
    "artist": "Martina McBride",
    "title": "A Broken Wing",
    "year": 1997,
    "game": "SingStar Country"
  },
  {
    "id": "96",
    "artist": "Miranda Lambert",
    "title": "Kerosene",
    "year": 2005,
    "game": "SingStar Country"
  },
  {
    "id": "97",
    "artist": "Montgomery Gentry",
    "title": "My Town",
    "year": 2002,
    "game": "SingStar Country"
  },
  {
    "id": "98",
    "artist": "Montgomery Gentry",
    "title": "What Do Ya Think About That",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "99",
    "artist": "Rascal Flatts",
    "title": "Bless the Broken Road",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "100",
    "artist": "Sara Evans",
    "title": "Born to Fly",
    "year": 2000,
    "game": "SingStar Country"
  },
  {
    "id": "101",
    "artist": "Taylor Swift",
    "title": "Our Song",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "102",
    "artist": "Terri Clark",
    "title": "Girls Lie Too",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "103",
    "artist": "Trace Adkins",
    "title": "Honky Tonk Badonkadonk",
    "year": 2005,
    "game": "SingStar Country"
  },
  {
    "id": "104",
    "artist": "Trace Adkins",
    "title": "You're Gonna Miss This",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "105",
    "artist": "Willie Nelson",
    "title": "Pancho and Lefty",
    "year": 1983,
    "game": "SingStar Country"
  },
  {
    "id": "106",
    "artist": "Annie",
    "title": "I Know UR Girlfriend Hates Me",
    "year": 2005,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "107",
    "artist": "Avril Lavigne",
    "title": "When You're Gone",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "108",
    "artist": "Calvin Harris",
    "title": "Acceptable in the 80s",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "109",
    "artist": "Colbie Caillat",
    "title": "Bubbly",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "110",
    "artist": "Delta Goodrem",
    "title": "You Will Only Break My Heart",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "111",
    "artist": "Fall Out Boy",
    "title": "Thnks fr th Mmrs",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "112",
    "artist": "Fergie",
    "title": "Clumsy",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "113",
    "artist": "Finger Eleven",
    "title": "Paralyzer",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "114",
    "artist": "The Fray",
    "title": "How to Save a Life",
    "year": 2005,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "115",
    "artist": "Gabriella Cilmi",
    "title": "Sweet About Me",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "116",
    "artist": "Lily Allen",
    "title": "LDN",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "117",
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "118",
    "artist": "Mika",
    "title": "Grace Kelly",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "119",
    "artist": "Mika",
    "title": "Love Today",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "120",
    "artist": "My Chemical Romance",
    "title": "Teenagers",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "121",
    "artist": "Nelly Furtado",
    "title": "All Good Things (Come to an End)",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "122",
    "artist": "One Night Only",
    "title": "Just for Tonight",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "123",
    "artist": "OneRepublic",
    "title": "Stop and Stare",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "124",
    "artist": "Operator Please",
    "title": "Just a Song About Ping Pong",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "125",
    "artist": "The Potbelleez",
    "title": "Don't Hold Back",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "126",
    "artist": "Powderfinger",
    "title": "Lost and Running",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "127",
    "artist": "Ricki-Lee",
    "title": "Can't Sing a Different Song",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "128",
    "artist": "Sam Sparro",
    "title": "Black and Gold",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "129",
    "artist": "Sean Kingston",
    "title": "Beautiful Girls",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "130",
    "artist": "Sneaky Sound System",
    "title": "Pictures",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "131",
    "artist": "Snow Patrol",
    "title": "Chasing Cars",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "132",
    "artist": "The Ting Tings",
    "title": "Great DJ",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "133",
    "artist": "The Ting Tings",
    "title": "That's Not My Name",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "134",
    "artist": "Vanessa Amorosi",
    "title": "Perfect",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "135",
    "artist": "will.i.am",
    "title": "I Got It From My Mama",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "136",
    "artist": "CC Cowboys",
    "title": "Tigergutt",
    "year": 1990,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "137",
    "artist": "CC Cowboys",
    "title": "Vill, vakker og våt",
    "year": 1993,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "138",
    "artist": "CC Cowboys",
    "title": "Harry",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "139",
    "artist": "D.D.E.",
    "title": "Rompa mi",
    "year": 1992,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "140",
    "artist": "D.D.E.",
    "title": "Det går likar no",
    "year": 1996,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "141",
    "artist": "D.D.E.",
    "title": "E6",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "142",
    "artist": "deLillos",
    "title": "Neste sommer",
    "year": 1986,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "143",
    "artist": "deLillos",
    "title": "Smak av honning",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "144",
    "artist": "deLillos",
    "title": "Min beibi dro av sted",
    "year": 1984,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "145",
    "artist": "deLillos",
    "title": "Ut",
    "year": 1988,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "146",
    "artist": "Jahn Teigen",
    "title": "Min første kjærlighet",
    "year": 1972,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "147",
    "artist": "Jahn Teigen",
    "title": "Det vakreste som fins",
    "year": 1982,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "148",
    "artist": "Jahn Teigen",
    "title": "Optimist",
    "year": 1980,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "149",
    "artist": "Postgirobygget",
    "title": "Sløv uten dop",
    "year": 1999,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "150",
    "artist": "Postgirobygget",
    "title": "En solskinnsdag",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "151",
    "artist": "Postgirobygget",
    "title": "23 tommer",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "152",
    "artist": "Postgirobygget",
    "title": "Idyll",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "153",
    "artist": "Trang Fødsel",
    "title": "Kursiv",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "154",
    "artist": "Trang Fødsel",
    "title": "Livet det er helt ålreit",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "155",
    "artist": "Trang Fødsel",
    "title": "Drømmedame",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "156",
    "artist": "a-ha",
    "title": "The Sun Always Shines on TV",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "157",
    "artist": "Annie",
    "title": "Heartbeat",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "158",
    "artist": "Arne Schau Knudsen",
    "title": "Gal av lengsel",
    "year": 1988,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "159",
    "artist": "Avril Lavigne",
    "title": "Sk8er Boi",
    "year": 2002,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "160",
    "artist": "Beyoncé",
    "title": "Crazy in Love",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "161",
    "artist": "Bigbang",
    "title": "Girl in Oslo",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "162",
    "artist": "The Clash",
    "title": "Should I Stay or Should I Go?",
    "year": 1982,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "163",
    "artist": "David",
    "title": "Wild At Heart",
    "year": 1984,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "164",
    "artist": "Dollie",
    "title": "Lenge Leve Livet",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "165",
    "artist": "DumDum Boys",
    "title": "Splitter Pine",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "166",
    "artist": "Hoobastank",
    "title": "The Reason",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "167",
    "artist": "Jan Eggum",
    "title": "På an igjen",
    "year": 1977,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "168",
    "artist": "Joss Stone",
    "title": "Super Duper Love (Are You Digging On Me?)",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "169",
    "artist": "Kaptein Sabeltann",
    "title": "Vi seiler vår egen sjø",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "170",
    "artist": "The Kids",
    "title": "Forelska i lærer'n",
    "year": 1980,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "171",
    "artist": "Kine",
    "title": "In the air tonight",
    "year": 2001,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "172",
    "artist": "Kylie Minogue",
    "title": "In Your Eyes",
    "year": 2002,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "173",
    "artist": "Manfred Mann",
    "title": "Do Wah Diddy",
    "year": 1964,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "174",
    "artist": "Maria Mena",
    "title": "My Lullaby",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "175",
    "artist": "The Monroes",
    "title": "Sunday people",
    "year": 1982,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "176",
    "artist": "Opus X",
    "title": "Loving you girl",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "177",
    "artist": "Philip & Sandra",
    "title": "Sommerflørt",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "178",
    "artist": "Robbie Williams",
    "title": "Let Me Entertain You",
    "year": 1998,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "179",
    "artist": "Rune Rudberg",
    "title": "Ut mot havet",
    "year": 1980,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "180",
    "artist": "The September When",
    "title": "Cries like a baby",
    "year": 1990,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "181",
    "artist": "Sister Sledge",
    "title": "We are family",
    "year": 1979,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "182",
    "artist": "Sputnik",
    "title": "Lukk opp din hjertedør",
    "year": 1995,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "183",
    "artist": "Steppenwolf",
    "title": "Born to be Wild",
    "year": 1968,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "184",
    "artist": "Tine",
    "title": "Vil Ha Deg",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "185",
    "artist": "Tom Jones",
    "title": "It's not unusual",
    "year": 1965,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "186",
    "artist": "3 Doors Down",
    "title": "When I'm Gone",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "187",
    "artist": "Ashlee Simpson",
    "title": "Boyfriend",
    "year": 2005,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "188",
    "artist": "Avril Lavigne",
    "title": "My Happy Ending",
    "year": 2004,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "189",
    "artist": "Boys Like Girls",
    "title": "The Great Escape",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "190",
    "artist": "Cartel",
    "title": "Lose It",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "191",
    "artist": "Colbie Caillat",
    "title": "Bubbly",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "192",
    "artist": "Dixie Chicks",
    "title": "Not Ready to Make Nice",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "193",
    "artist": "Duran Duran",
    "title": "Ordinary World",
    "year": 1992,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "194",
    "artist": "Evanescence",
    "title": "Bring Me To Life",
    "year": 2003,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "195",
    "artist": "Fall Out Boy",
    "title": "Thnks fr th Mmrs",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "196",
    "artist": "Fergie",
    "title": "Big Girls Don't Cry",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "197",
    "artist": "Gwen Stefani feat. Akon",
    "title": "The Sweet Escape",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "198",
    "artist": "The Hives",
    "title": "Tick Tick Boom",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "199",
    "artist": "Jennifer Lopez",
    "title": "Jenny From the Block",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "200",
    "artist": "Lifehouse",
    "title": "First Time",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "201",
    "artist": "Lily Allen",
    "title": "Littlest Things",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "202",
    "artist": "Lloyd",
    "title": "Get it Shawty",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "203",
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "204",
    "artist": "Matchbox Twenty",
    "title": "How Far We've Come",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "205",
    "artist": "Michelle Branch",
    "title": "Breathe",
    "year": 2003,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "206",
    "artist": "Nelly Furtado",
    "title": "Promiscuous",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "207",
    "artist": "Norah Jones",
    "title": "Don't Know Why",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "208",
    "artist": "The Outfield",
    "title": "Your Love",
    "year": 1985,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "209",
    "artist": "Peter Bjorn and John",
    "title": "Young Folks",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "210",
    "artist": "P!nk",
    "title": "Who Knew",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "211",
    "artist": "Plain White T's",
    "title": "Hey There Delilah",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "212",
    "artist": "Rihanna",
    "title": "Umbrella",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "213",
    "artist": "Santana feat. Chad Kroeger",
    "title": "Into The Night",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "214",
    "artist": "Steriogram",
    "title": "Walkie Talkie Man",
    "year": 2004,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "215",
    "artist": "Sum 41",
    "title": "Fat Lip",
    "year": 2001,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "216",
    "artist": "Queen",
    "title": "Another One Bites The Dust",
    "year": 1980,
    "game": "SingStar Queen"
  },
  {
    "id": "217",
    "artist": "Queen",
    "title": "Bicycle Race",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "218",
    "artist": "Queen",
    "title": "Bohemian Rhapsody",
    "year": 1975,
    "game": "SingStar Queen"
  },
  {
    "id": "219",
    "artist": "Queen",
    "title": "Breakthru",
    "year": 1989,
    "game": "SingStar Queen"
  },
  {
    "id": "220",
    "artist": "Queen",
    "title": "Crazy Little Thing Called Love",
    "year": 1979,
    "game": "SingStar Queen"
  },
  {
    "id": "221",
    "artist": "Queen",
    "title": "Don't Stop Me Now",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "222",
    "artist": "Queen",
    "title": "Fat Bottomed Girls",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "223",
    "artist": "Queen",
    "title": "I Want It All",
    "year": 1989,
    "game": "SingStar Queen"
  },
  {
    "id": "224",
    "artist": "Queen",
    "title": "I Want To Break Free",
    "year": 1984,
    "game": "SingStar Queen"
  },
  {
    "id": "225",
    "artist": "Queen",
    "title": "Innuendo",
    "year": 1991,
    "game": "SingStar Queen"
  },
  {
    "id": "226",
    "artist": "Queen",
    "title": "One Vision",
    "year": 1985,
    "game": "SingStar Queen"
  },
  {
    "id": "227",
    "artist": "Queen",
    "title": "Play The Game",
    "year": 1980,
    "game": "SingStar Queen"
  },
  {
    "id": "228",
    "artist": "Queen",
    "title": "Somebody To Love",
    "year": 1976,
    "game": "SingStar Queen"
  },
  {
    "id": "229",
    "artist": "Queen",
    "title": "These Are The Days Of Our Lives",
    "year": 1991,
    "game": "SingStar Queen"
  },
  {
    "id": "230",
    "artist": "Queen",
    "title": "Tie Your Mother Down",
    "year": 1976,
    "game": "SingStar Queen"
  },
  {
    "id": "231",
    "artist": "Queen & David Bowie",
    "title": "Under Pressure",
    "year": 1981,
    "game": "SingStar Queen"
  },
  {
    "id": "232",
    "artist": "Queen",
    "title": "We Are The Champions",
    "year": 1977,
    "game": "SingStar Queen"
  },
  {
    "id": "233",
    "artist": "Queen",
    "title": "We Will Rock You",
    "year": 1977,
    "game": "SingStar Queen"
  },
  {
    "id": "234",
    "artist": "Queen",
    "title": "Who Wants To Live Forever",
    "year": 1986,
    "game": "SingStar Queen"
  },
  {
    "id": "235",
    "artist": "Queen",
    "title": "You're My Best Friend",
    "year": 1975,
    "game": "SingStar Queen"
  },
  {
    "id": "236",
    "artist": "The 411",
    "title": "Dumb",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "237",
    "artist": "Amerie",
    "title": "1 Thing",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "238",
    "artist": "Amy Winehouse",
    "title": "Back To Black",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "239",
    "artist": "Anastacia",
    "title": "I'm Outta Love",
    "year": 2000,
    "game": "SingStar R&B"
  },
  {
    "id": "240",
    "artist": "Beverley Knight",
    "title": "Come As You Are",
    "year": 1998,
    "game": "SingStar R&B"
  },
  {
    "id": "241",
    "artist": "Black Eyed Peas",
    "title": "Pump It",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "242",
    "artist": "Chris Brown",
    "title": "Yo! (Excuse Me Miss)",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "243",
    "artist": "Christina Milian",
    "title": "AM To PM",
    "year": 2001,
    "game": "SingStar R&B"
  },
  {
    "id": "244",
    "artist": "Corinne Bailey Rae",
    "title": "I'd Like To",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "245",
    "artist": "Destiny's Child",
    "title": "Bootylicious",
    "year": 2001,
    "game": "SingStar R&B"
  },
  {
    "id": "246",
    "artist": "Diana Ross & The Supremes",
    "title": "Baby Love",
    "year": 1964,
    "game": "SingStar R&B"
  },
  {
    "id": "247",
    "artist": "DJ Jazzy Jeff & The Fresh Prince",
    "title": "Summertime",
    "year": 1991,
    "game": "SingStar R&B"
  },
  {
    "id": "248",
    "artist": "Edwin Starr",
    "title": "War",
    "year": 1970,
    "game": "SingStar R&B"
  },
  {
    "id": "249",
    "artist": "En Vogue",
    "title": "My Lovin' (You're Never Gonna Get It)",
    "year": 1992,
    "game": "SingStar R&B"
  },
  {
    "id": "250",
    "artist": "The Four Tops",
    "title": "I Can't Help Myself",
    "year": 1965,
    "game": "SingStar R&B"
  },
  {
    "id": "251",
    "artist": "Gwen Stefani",
    "title": "Hollaback Girl",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "252",
    "artist": "Inner City",
    "title": "Good Life",
    "year": 1988,
    "game": "SingStar R&B"
  },
  {
    "id": "253",
    "artist": "Jamelia",
    "title": "Thank You",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "254",
    "artist": "Jamiroquai",
    "title": "Alright",
    "year": 1997,
    "game": "SingStar R&B"
  },
  {
    "id": "255",
    "artist": "Luther Vandross",
    "title": "Never Too Much",
    "year": 1981,
    "game": "SingStar R&B"
  },
  {
    "id": "256",
    "artist": "Mark Ronson feat. Daniel Merriweather",
    "title": "Stop Me",
    "year": 2007,
    "game": "SingStar R&B"
  },
  {
    "id": "257",
    "artist": "Martha Reeves & The Vandellas",
    "title": "Dancing In The Street",
    "year": 1964,
    "game": "SingStar R&B"
  },
  {
    "id": "258",
    "artist": "Marvin Gaye & Tammi Tarrell",
    "title": "Ain't No Mountain High Enough",
    "year": 1967,
    "game": "SingStar R&B"
  },
  {
    "id": "259",
    "artist": "OutKast",
    "title": "Idlewild Blue (Don'tchu Worry 'Bout Me)",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "260",
    "artist": "The Pussycat Dolls",
    "title": "Buttons",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "261",
    "artist": "Rihanna",
    "title": "We Ride",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "262",
    "artist": "Salt'N'Pepa",
    "title": "Push It",
    "year": 1987,
    "game": "SingStar R&B"
  },
  {
    "id": "263",
    "artist": "Sugababes",
    "title": "Ugly",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "264",
    "artist": "Whitney Houston",
    "title": "My Love Is Your Love",
    "year": 1998,
    "game": "SingStar R&B"
  },
  {
    "id": "265",
    "artist": "Womack & Womack",
    "title": "Teardrops",
    "year": 1988,
    "game": "SingStar R&B"
  },
  {
    "id": "266",
    "artist": "Air Supply",
    "title": "All Out Of Love",
    "year": 1980,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "267",
    "artist": "Alannah Myles",
    "title": "Black Velvet",
    "year": 1989,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "268",
    "artist": "Anastacia",
    "title": "Left Outside Alone",
    "year": 2004,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "269",
    "artist": "Avril Lavigne",
    "title": "I'm With You",
    "year": 2002,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "270",
    "artist": "Boston",
    "title": "More Than A Feeling",
    "year": 1976,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "271",
    "artist": "Boy Meets Girl",
    "title": "Waiting For A Star To Fall",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "272",
    "artist": "The Calling",
    "title": "Wherever You Will Go",
    "year": 2001,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "273",
    "artist": "Cutting Crew",
    "title": "(I Just) Died In Your Arms",
    "year": 1986,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "274",
    "artist": "Cyndi Lauper",
    "title": "Time After Time",
    "year": 1983,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "275",
    "artist": "Duran Duran",
    "title": "Ordinary World",
    "year": 1992,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "276",
    "artist": "Europe",
    "title": "Carrie",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "277",
    "artist": "Heart",
    "title": "Alone",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "278",
    "artist": "Jon Secada",
    "title": "Just Another Day (Without You)",
    "year": 1992,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "279",
    "artist": "Lone Star",
    "title": "Amazed",
    "year": 1999,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "280",
    "artist": "Marc Cohn",
    "title": "Walking In Memphis",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "281",
    "artist": "Meat Loaf",
    "title": "I'd Do Anything For Love (But I Won't Do That)",
    "year": 1993,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "282",
    "artist": "Mr Big",
    "title": "To Be With You",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "283",
    "artist": "Mr Mister",
    "title": "Broken Wings",
    "year": 1985,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "284",
    "artist": "Mr Mister",
    "title": "Kyrie",
    "year": 1985,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "285",
    "artist": "Nickelback",
    "title": "How You Remind Me",
    "year": 2001,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "286",
    "artist": "Nilsson",
    "title": "Without You",
    "year": 1971,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "287",
    "artist": "Poison",
    "title": "Every Rose Has Its Thorn",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "288",
    "artist": "Queen",
    "title": "The Show Must Go On",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "289",
    "artist": "Roxette",
    "title": "It Must Have Been Love",
    "year": 1990,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "290",
    "artist": "Roxette",
    "title": "Listen To Your Heart",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "291",
    "artist": "Starship",
    "title": "Nothing's Gonna Stop Us Now",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "292",
    "artist": "Sugababes",
    "title": "Too Lost In You",
    "year": 2003,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "293",
    "artist": "Tina Arena",
    "title": "Chains",
    "year": 1994,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "294",
    "artist": "Toto",
    "title": "Africa",
    "year": 1982,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "295",
    "artist": "T'Pau",
    "title": "China In Your Hand",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "296",
    "artist": "101 Dalmatians",
    "title": "Cruella De Vil",
    "year": 1961,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "297",
    "artist": "Aladdin",
    "title": "A Whole New World",
    "year": 1992,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "298",
    "artist": "The Aristocats",
    "title": "Ev'rybody Wants To Be A Cat",
    "year": 1970,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "299",
    "artist": "Beauty And The Beast",
    "title": "Beauty And The Beast",
    "year": 1991,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "300",
    "artist": "Cinderella",
    "title": "Bibbidi-Bobbidi-Boo",
    "year": 1950,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "301",
    "artist": "Cinderella",
    "title": "The Work Song",
    "year": 1950,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "302",
    "artist": "The Jungle Book",
    "title": "Bare Necessities",
    "year": 1967,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "303",
    "artist": "The Jungle Book",
    "title": "I Wanna Be Like You",
    "year": 1967,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "304",
    "artist": "Lady and the Tramp",
    "title": "He's A Tramp",
    "year": 1955,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "305",
    "artist": "The Lion King",
    "title": "I Just Can't Wait To Be King",
    "year": 1994,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "306",
    "artist": "The Lion King",
    "title": "The Circle Of Life",
    "year": 1994,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "307",
    "artist": "The Little Mermaid",
    "title": "Kiss The Girl",
    "year": 1989,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "308",
    "artist": "The Little Mermaid",
    "title": "Under The Sea",
    "year": 1989,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "309",
    "artist": "Peter Pan",
    "title": "Following The Leader",
    "year": 1953,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "310",
    "artist": "Peter Pan",
    "title": "You Can Fly! You Can Fly! You Can Fly!",
    "year": 1953,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "311",
    "artist": "Sleeping Beauty",
    "title": "I Wonder",
    "year": 1959,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "312",
    "artist": "Sleeping Beauty",
    "title": "Once Upon A Dream",
    "year": 1959,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "313",
    "artist": "Tarzan",
    "title": "Son Of Man",
    "year": 1999,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "314",
    "artist": "Toy Story",
    "title": "You've Got A Friend In Me",
    "year": 1995,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "315",
    "artist": "Winnie The Pooh",
    "title": "Winnie The Pooh",
    "year": 1966,
    "game": "SingStar Singalong with Disney"
  }
];

export const games: Game[] = [];
