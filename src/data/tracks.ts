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
    "artist": "All Saints",
    "title": "Never Ever",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "2",
    "artist": "Aqua",
    "title": "Barbie Girl",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "3",
    "artist": "The B-52's",
    "title": "Love Shack",
    "year": 1989,
    "game": "SingStar 90s"
  },
  {
    "id": "4",
    "artist": "Barenaked Ladies",
    "title": "One Week",
    "year": 1998,
    "game": "SingStar 90s"
  },
  {
    "id": "5",
    "artist": "Billy Ray Cyrus",
    "title": "Achy Breaky Heart",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "6",
    "artist": "The Cardigans",
    "title": "Lovefool",
    "year": 1996,
    "game": "SingStar 90s"
  },
  {
    "id": "7",
    "artist": "The Cranberries",
    "title": "Zombie",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "8",
    "artist": "Crash Test Dummies",
    "title": "Mmm Mmm Mmm Mmm",
    "year": 1993,
    "game": "SingStar 90s"
  },
  {
    "id": "9",
    "artist": "The Cure",
    "title": "Friday I'm in Love",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "10",
    "artist": "Divinyls",
    "title": "I Touch Myself",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "11",
    "artist": "EMF",
    "title": "Unbelievable",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "12",
    "artist": "Gin Blossoms",
    "title": "Hey Jealousy",
    "year": 1993,
    "game": "SingStar 90s"
  },
  {
    "id": "13",
    "artist": "Lisa Loeb",
    "title": "Stay (I Missed You)",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "14",
    "artist": "M People",
    "title": "Moving On Up",
    "year": 1993,
    "game": "SingStar 90s"
  },
  {
    "id": "15",
    "artist": "MC Hammer",
    "title": "U Can't Touch This",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "16",
    "artist": "Meredith Brooks",
    "title": "Bitch",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "17",
    "artist": "Natalie Imbruglia",
    "title": "Torn",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "18",
    "artist": "New Kids on the Block",
    "title": "Step by Step",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "19",
    "artist": "Nick Cave & Kylie Minogue",
    "title": "Where the Wild Roses Grow",
    "year": 1995,
    "game": "SingStar 90s"
  },
  {
    "id": "20",
    "artist": "Poison",
    "title": "Unskinny Bop",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "21",
    "artist": "R.E.M.",
    "title": "Everybody Hurts",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "22",
    "artist": "Radiohead",
    "title": "Creep",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "23",
    "artist": "Roachford",
    "title": "Only to Be with You",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "24",
    "artist": "Savage Garden",
    "title": "I Want You",
    "year": 1996,
    "game": "SingStar 90s"
  },
  {
    "id": "25",
    "artist": "Seal",
    "title": "Kiss from a Rose",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "26",
    "artist": "Sir Mix-a-Lot",
    "title": "Baby Got Back",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "27",
    "artist": "Spice Girls",
    "title": "Wannabe",
    "year": 1996,
    "game": "SingStar 90s"
  },
  {
    "id": "28",
    "artist": "Spin Doctors",
    "title": "Two Princes",
    "year": 1991,
    "game": "SingStar 90s"
  },
  {
    "id": "29",
    "artist": "Technotronic feat. Felly",
    "title": "Pump Up the Jam",
    "year": 1989,
    "game": "SingStar 90s"
  },
  {
    "id": "30",
    "artist": "Wet Wet Wet",
    "title": "Love Is All Around",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "31",
    "artist": "ABBA",
    "title": "Chiquitita",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "32",
    "artist": "ABBA",
    "title": "Dancing Queen",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "33",
    "artist": "ABBA",
    "title": "Does Your Mother Know",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "34",
    "artist": "ABBA",
    "title": "Fernando",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "35",
    "artist": "ABBA",
    "title": "Gimme! Gimme! Gimme! (A Man After Midnight)",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "36",
    "artist": "ABBA",
    "title": "\"I Do, I Do, I Do, I Do, I Do\"",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "37",
    "artist": "ABBA",
    "title": "\"Knowing Me, Knowing You\"",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "38",
    "artist": "ABBA",
    "title": "Mamma Mia",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "39",
    "artist": "ABBA",
    "title": "\"Money, Money, Money\"",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "40",
    "artist": "ABBA",
    "title": "One of Us",
    "year": 1981,
    "game": "SingStar ABBA"
  },
  {
    "id": "41",
    "artist": "ABBA",
    "title": "Ring Ring",
    "year": 1973,
    "game": "SingStar ABBA"
  },
  {
    "id": "42",
    "artist": "ABBA",
    "title": "SOS",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "43",
    "artist": "ABBA",
    "title": "Summer Night City",
    "year": 1978,
    "game": "SingStar ABBA"
  },
  {
    "id": "44",
    "artist": "ABBA",
    "title": "Super Trouper",
    "year": 1980,
    "game": "SingStar ABBA"
  },
  {
    "id": "45",
    "artist": "ABBA",
    "title": "Take a Chance on Me",
    "year": 1978,
    "game": "SingStar ABBA"
  },
  {
    "id": "46",
    "artist": "ABBA",
    "title": "Thank You for the Music",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "47",
    "artist": "ABBA",
    "title": "The Name of the Game",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "48",
    "artist": "ABBA",
    "title": "The Winner Takes It All",
    "year": 1980,
    "game": "SingStar ABBA"
  },
  {
    "id": "49",
    "artist": "ABBA",
    "title": "Voulez-Vous",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "50",
    "artist": "ABBA",
    "title": "Waterloo",
    "year": 1974,
    "game": "SingStar ABBA"
  },
  {
    "id": "51",
    "artist": "Alice in Chains",
    "title": "Would?",
    "year": 1992,
    "game": "SingStar Amped"
  },
  {
    "id": "52",
    "artist": "Audioslave",
    "title": "Cochise",
    "year": 2002,
    "game": "SingStar Amped"
  },
  {
    "id": "53",
    "artist": "Blink-182",
    "title": "I Miss You",
    "year": 2003,
    "game": "SingStar Amped"
  },
  {
    "id": "54",
    "artist": "Blue Öyster Cult",
    "title": "(Don't Fear) The Reaper",
    "year": 1976,
    "game": "SingStar Amped"
  },
  {
    "id": "55",
    "artist": "Boston",
    "title": "More Than a Feeling",
    "year": 1976,
    "game": "SingStar Amped"
  },
  {
    "id": "56",
    "artist": "Cheap Trick",
    "title": "I Want You to Want Me",
    "year": 1977,
    "game": "SingStar Amped"
  },
  {
    "id": "57",
    "artist": "David Bowie",
    "title": "Changes",
    "year": 1971,
    "game": "SingStar Amped"
  },
  {
    "id": "58",
    "artist": "Fall Out Boy",
    "title": "This Ain't a Scene It's an Arms Race",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "59",
    "artist": "Foo Fighters",
    "title": "Best of You",
    "year": 2005,
    "game": "SingStar Amped"
  },
  {
    "id": "60",
    "artist": "Free",
    "title": "All Right Now",
    "year": 1970,
    "game": "SingStar Amped"
  },
  {
    "id": "61",
    "artist": "Iggy Pop",
    "title": "Real Wild Child (Wild One)",
    "year": 1986,
    "game": "SingStar Amped"
  },
  {
    "id": "62",
    "artist": "Judas Priest",
    "title": "You've Got Another Thing Comin'",
    "year": 1982,
    "game": "SingStar Amped"
  },
  {
    "id": "63",
    "artist": "The Killers",
    "title": "When You Were Young",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "64",
    "artist": "Motörhead",
    "title": "Ace of Spades",
    "year": 1980,
    "game": "SingStar Amped"
  },
  {
    "id": "65",
    "artist": "Nickelback",
    "title": "Savin' Me",
    "year": 2005,
    "game": "SingStar Amped"
  },
  {
    "id": "66",
    "artist": "Nirvana",
    "title": "Come as You Are",
    "year": 1991,
    "game": "SingStar Amped"
  },
  {
    "id": "67",
    "artist": "O.A.R.",
    "title": "Love and Memories",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "68",
    "artist": "Pearl Jam",
    "title": "Alive",
    "year": 1991,
    "game": "SingStar Amped"
  },
  {
    "id": "69",
    "artist": "Poison",
    "title": "Every Rose Has Its Thorn",
    "year": 1988,
    "game": "SingStar Amped"
  },
  {
    "id": "70",
    "artist": "Queens of the Stone Age",
    "title": "Go with the Flow",
    "year": 2002,
    "game": "SingStar Amped"
  },
  {
    "id": "71",
    "artist": "Quiet Riot",
    "title": "Cum On Feel the Noize",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "72",
    "artist": "Radiohead",
    "title": "Creep",
    "year": 1992,
    "game": "SingStar Amped"
  },
  {
    "id": "73",
    "artist": "Ramones",
    "title": "Blitzkrieg Bop",
    "year": 1976,
    "game": "SingStar Amped"
  },
  {
    "id": "74",
    "artist": "Steppenwolf",
    "title": "Born to Be Wild",
    "year": 1968,
    "game": "SingStar Amped"
  },
  {
    "id": "75",
    "artist": "Stone Temple Pilots",
    "title": "Vasoline",
    "year": 1994,
    "game": "SingStar Amped"
  },
  {
    "id": "76",
    "artist": "Talking Heads",
    "title": "Burning Down the House",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "77",
    "artist": "Yeah Yeah Yeahs",
    "title": "Gold Lion",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "78",
    "artist": "Yes",
    "title": "Owner of a Lonely Heart",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "79",
    "artist": "ZZ Top",
    "title": "Gimme All Your Lovin'",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "80",
    "artist": "Bananarama",
    "title": "I Heard a Rumour",
    "year": 1987,
    "game": "SingStar Anthems"
  },
  {
    "id": "81",
    "artist": "Bonnie Tyler",
    "title": "Total Eclipse of the Heart",
    "year": 1983,
    "game": "SingStar Anthems"
  },
  {
    "id": "82",
    "artist": "Bucks Fizz",
    "title": "Making Your Mind Up",
    "year": 1981,
    "game": "SingStar Anthems"
  },
  {
    "id": "83",
    "artist": "Candi Staton",
    "title": "Young Hearts Run Free",
    "year": 1976,
    "game": "SingStar Anthems"
  },
  {
    "id": "84",
    "artist": "Charlene",
    "title": "I've Never Been to Me",
    "year": 1982,
    "game": "SingStar Anthems"
  },
  {
    "id": "85",
    "artist": "Charlotte Church",
    "title": "Crazy Chick",
    "year": 2005,
    "game": "SingStar Anthems"
  },
  {
    "id": "86",
    "artist": "Cher",
    "title": "If I Could Turn Back Time",
    "year": 1989,
    "game": "SingStar Anthems"
  },
  {
    "id": "87",
    "artist": "Dead or Alive",
    "title": "You Spin Me Round (Like a Record)",
    "year": 1985,
    "game": "SingStar Anthems"
  },
  {
    "id": "88",
    "artist": "Girls Aloud",
    "title": "Biology",
    "year": 2005,
    "game": "SingStar Anthems"
  },
  {
    "id": "89",
    "artist": "Gloria Gaynor",
    "title": "I Will Survive",
    "year": 1978,
    "game": "SingStar Anthems"
  },
  {
    "id": "90",
    "artist": "Kim Wilde",
    "title": "Kids in America",
    "year": 1981,
    "game": "SingStar Anthems"
  },
  {
    "id": "91",
    "artist": "LeAnn Rimes",
    "title": "Can't Fight the Moonlight",
    "year": 2000,
    "game": "SingStar Anthems"
  },
  {
    "id": "92",
    "artist": "The Pussycat Dolls",
    "title": "Don't Cha",
    "year": 2005,
    "game": "SingStar Anthems"
  },
  {
    "id": "93",
    "artist": "Queen",
    "title": "Radio Ga Ga",
    "year": 1984,
    "game": "SingStar Anthems"
  },
  {
    "id": "94",
    "artist": "Scissor Sisters",
    "title": "Laura",
    "year": 2004,
    "game": "SingStar Anthems"
  },
  {
    "id": "95",
    "artist": "Steps",
    "title": "Deeper Shade of Blue",
    "year": 2000,
    "game": "SingStar Anthems"
  },
  {
    "id": "96",
    "artist": "Take That (featuring Lulu)",
    "title": "Relight My Fire",
    "year": 1993,
    "game": "SingStar Anthems"
  },
  {
    "id": "97",
    "artist": "Ultra Naté",
    "title": "Free",
    "year": 1997,
    "game": "SingStar Anthems"
  },
  {
    "id": "98",
    "artist": "The Weather Girls",
    "title": "It's Raining Men",
    "year": 1982,
    "game": "SingStar Anthems"
  },
  {
    "id": "99",
    "artist": "Whitney Houston",
    "title": "I Wanna Dance with Somebody (Who Loves Me)",
    "year": 1987,
    "game": "SingStar Anthems"
  },
  {
    "id": "100",
    "artist": "Bananarama",
    "title": "Cruel Summer",
    "year": 1983,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "101",
    "artist": "Bananarama",
    "title": "Love in the First Degree",
    "year": 1987,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "102",
    "artist": "The Bangles",
    "title": "Eternal Flame",
    "year": 1989,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "103",
    "artist": "Boyz II Men",
    "title": "I'll Make Love to You",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "104",
    "artist": "Boyzone",
    "title": "Love Me for a Reason",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "105",
    "artist": "Bros",
    "title": "I Owe You Nothing",
    "year": 1988,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "106",
    "artist": "Busted",
    "title": "Air Hostess",
    "year": 2002,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "107",
    "artist": "Busted",
    "title": "What I Go to School For",
    "year": 2002,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "108",
    "artist": "East 17",
    "title": "Let It Rain",
    "year": 1995,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "109",
    "artist": "East 17",
    "title": "Stay Another Day",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "110",
    "artist": "En Vogue",
    "title": "Free Your Mind",
    "year": 1992,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "111",
    "artist": "Five",
    "title": "Everybody Get Up",
    "year": 1998,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "112",
    "artist": "Five",
    "title": "Keep On Movin'",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "113",
    "artist": "Girls Aloud",
    "title": "The Show",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "114",
    "artist": "Hanson",
    "title": "MMMBop",
    "year": 1997,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "115",
    "artist": "Jade",
    "title": "Don't Walk Away",
    "year": 1993,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "116",
    "artist": "McFly",
    "title": "All About You",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "117",
    "artist": "McFly",
    "title": "5 Colours in Her Hair",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "118",
    "artist": "Mel and Kim",
    "title": "Showing Out (Get Fresh at the Weekend)",
    "year": 1986,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "119",
    "artist": "Mis-Teeq",
    "title": "One Night Stand",
    "year": 2001,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "120",
    "artist": "New Edition",
    "title": "Candy Girl",
    "year": 1983,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "121",
    "artist": "The Pussycat Dolls",
    "title": "Stickwitu",
    "year": 2005,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "122",
    "artist": "The Shangri-Las",
    "title": "Leader of the Pack",
    "year": 1964,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "123",
    "artist": "Sister Sledge",
    "title": "He's the Greatest Dancer",
    "year": 1979,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "124",
    "artist": "Spice Girls",
    "title": "Say You'll Be There",
    "year": 1996,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "125",
    "artist": "Sugababes",
    "title": "About You Now",
    "year": 2007,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "126",
    "artist": "The Supremes",
    "title": "Stop! In the Name of Love",
    "year": 1965,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "127",
    "artist": "Westlife",
    "title": "Flying Without Wings",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "128",
    "artist": "Westlife",
    "title": "Swear It Again",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "129",
    "artist": "Wilson Phillips",
    "title": "Hold On",
    "year": 1990,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "130",
    "artist": "3OH!3",
    "title": "Don't Trust Me",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "131",
    "artist": "A. R. Rahman feat. The Pussycat Dolls",
    "title": "Jai Ho",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "132",
    "artist": "Alex Lloyd",
    "title": "Amazing",
    "year": 2001,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "133",
    "artist": "Ben Lee",
    "title": "Catch My Disease",
    "year": 2007,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "134",
    "artist": "Colbie Caillat",
    "title": "Fallin' for You",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "135",
    "artist": "Empire of the Sun",
    "title": "Walking on a Dream",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "136",
    "artist": "George Michael",
    "title": "Outside",
    "year": 1998,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "137",
    "artist": "Guy Sebastian feat. Jordin Sparks",
    "title": "Art of Love",
    "year": 2010,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "138",
    "artist": "Kate Miller-Heidke",
    "title": "The Last Day on Earth",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "139",
    "artist": "La Roux",
    "title": "Bulletproof",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "140",
    "artist": "Lady Gaga",
    "title": "Poker Face",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "141",
    "artist": "The Last Goodnight",
    "title": "Pictures of You",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "142",
    "artist": "The Living End",
    "title": "White Noise",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "143",
    "artist": "Michael Bublé",
    "title": "Haven't Met You Yet",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "144",
    "artist": "Mika",
    "title": "We Are Golden",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "145",
    "artist": "Milli Vanilli",
    "title": "Blame It on the Rain",
    "year": 1989,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "146",
    "artist": "Natalie Bassingthwaighte",
    "title": "Alive",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "147",
    "artist": "Nelly Furtado",
    "title": "Turn Off the Light",
    "year": 2001,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "148",
    "artist": "Pixie Lott",
    "title": "Boys and Girls",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "149",
    "artist": "The Presets",
    "title": "This Boy's in Love",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "150",
    "artist": "The Pussycat Dolls",
    "title": "Hush Hush; Hush Hush",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "151",
    "artist": "Vanessa Amorosi",
    "title": "This Is Who I Am",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "152",
    "artist": "Vitamin C",
    "title": "Graduation (Friends Forever)",
    "year": 2000,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "153",
    "artist": "Wes Carr",
    "title": "Feels Like Woah",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "154",
    "artist": "Wolfmother",
    "title": "New Moon Rising",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "155",
    "artist": "Alan Jackson",
    "title": "Chattahoochee",
    "year": 1993,
    "game": "SingStar Country"
  },
  {
    "id": "156",
    "artist": "Alan Jackson",
    "title": "Good Time",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "157",
    "artist": "Big & Rich",
    "title": "Save a Horse (Ride a Cowboy)",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "158",
    "artist": "Blake Shelton",
    "title": "Home",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "159",
    "artist": "Brad Paisley",
    "title": "Online",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "160",
    "artist": "Brooks & Dunn",
    "title": "Boot Scootin' Boogie",
    "year": 1992,
    "game": "SingStar Country"
  },
  {
    "id": "161",
    "artist": "Brooks & Dunn (with Reba McEntire)",
    "title": "If You See Him/If You See Her",
    "year": 1998,
    "game": "SingStar Country"
  },
  {
    "id": "162",
    "artist": "Bucky Covington",
    "title": "It's Good To Be Us",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "163",
    "artist": "Faith Hill",
    "title": "Red Umbrella",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "164",
    "artist": "Gretchen Wilson",
    "title": "Redneck Woman",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "165",
    "artist": "Jessica Simpson",
    "title": "Come On Over",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "166",
    "artist": "Jewel",
    "title": "Stronger Woman",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "167",
    "artist": "Johnny Cash",
    "title": "A Boy Named Sue",
    "year": 1969,
    "game": "SingStar Country"
  },
  {
    "id": "168",
    "artist": "Johnny Cash",
    "title": "I Walk the Line",
    "year": 1956,
    "game": "SingStar Country"
  },
  {
    "id": "169",
    "artist": "Josh Turner",
    "title": "Another Try",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "170",
    "artist": "Keith Urban",
    "title": "Days Go By",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "171",
    "artist": "Kellie Pickler",
    "title": "Red High Heels",
    "year": 2006,
    "game": "SingStar Country"
  },
  {
    "id": "172",
    "artist": "Kenny Chesney",
    "title": "Big Star",
    "year": 2003,
    "game": "SingStar Country"
  },
  {
    "id": "173",
    "artist": "Lady Antebellum",
    "title": "Love Don't Live Here",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "174",
    "artist": "Martina McBride",
    "title": "A Broken Wing",
    "year": 1997,
    "game": "SingStar Country"
  },
  {
    "id": "175",
    "artist": "Miranda Lambert",
    "title": "Kerosene",
    "year": 2005,
    "game": "SingStar Country"
  },
  {
    "id": "176",
    "artist": "Montgomery Gentry",
    "title": "My Town",
    "year": 2002,
    "game": "SingStar Country"
  },
  {
    "id": "177",
    "artist": "Montgomery Gentry",
    "title": "What Do Ya Think About That",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "178",
    "artist": "Rascal Flatts",
    "title": "Bless the Broken Road",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "179",
    "artist": "Sara Evans",
    "title": "Born to Fly",
    "year": 2000,
    "game": "SingStar Country"
  },
  {
    "id": "180",
    "artist": "Taylor Swift",
    "title": "Our Song",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "181",
    "artist": "Terri Clark",
    "title": "Girls Lie Too",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "182",
    "artist": "Trace Adkins",
    "title": "Honky Tonk Badonkadonk",
    "year": 2005,
    "game": "SingStar Country"
  },
  {
    "id": "183",
    "artist": "Trace Adkins",
    "title": "You're Gonna Miss This",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "184",
    "artist": "Willie Nelson",
    "title": "Pancho and Lefty",
    "year": 1983,
    "game": "SingStar Country"
  },
  {
    "id": "185",
    "artist": "Annie",
    "title": "I Know UR Girlfriend Hates Me",
    "year": 2005,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "186",
    "artist": "Avril Lavigne",
    "title": "When You're Gone",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "187",
    "artist": "Calvin Harris",
    "title": "Acceptable in the 80s",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "188",
    "artist": "Colbie Caillat",
    "title": "Bubbly",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "189",
    "artist": "Delta Goodrem",
    "title": "You Will Only Break My Heart",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "190",
    "artist": "Fall Out Boy",
    "title": "Thnks fr th Mmrs",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "191",
    "artist": "Fergie",
    "title": "Clumsy",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "192",
    "artist": "Finger Eleven",
    "title": "Paralyzer",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "193",
    "artist": "The Fray",
    "title": "How to Save a Life",
    "year": 2005,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "194",
    "artist": "Gabriella Cilmi",
    "title": "Sweet About Me",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "195",
    "artist": "Lily Allen",
    "title": "LDN",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "196",
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "197",
    "artist": "Mika",
    "title": "Grace Kelly",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "198",
    "artist": "Mika",
    "title": "Love Today",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "199",
    "artist": "My Chemical Romance",
    "title": "Teenagers",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "200",
    "artist": "Nelly Furtado",
    "title": "All Good Things (Come to an End)",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "201",
    "artist": "One Night Only",
    "title": "Just for Tonight",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "202",
    "artist": "OneRepublic",
    "title": "Stop and Stare",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "203",
    "artist": "Operator Please",
    "title": "Just a Song About Ping Pong",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "204",
    "artist": "The Potbelleez",
    "title": "Don't Hold Back",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "205",
    "artist": "Powderfinger",
    "title": "Lost and Running",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "206",
    "artist": "Ricki-Lee",
    "title": "Can't Sing a Different Song",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "207",
    "artist": "Sam Sparro",
    "title": "Black and Gold",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "208",
    "artist": "Sean Kingston",
    "title": "Beautiful Girls",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "209",
    "artist": "Sneaky Sound System",
    "title": "Pictures",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "210",
    "artist": "Snow Patrol",
    "title": "Chasing Cars",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "211",
    "artist": "The Ting Tings",
    "title": "Great DJ",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "212",
    "artist": "The Ting Tings",
    "title": "That's Not My Name",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "213",
    "artist": "Vanessa Amorosi",
    "title": "Perfect",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "214",
    "artist": "will.i.am",
    "title": "I Got It From My Mama",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "215",
    "artist": "Aretha Franklin",
    "title": "Respect",
    "year": 1967,
    "game": "SingStar Legends"
  },
  {
    "id": "216",
    "artist": "Barry White",
    "title": "You're the First the Last My Everything",
    "year": 1974,
    "game": "SingStar Legends"
  },
  {
    "id": "217",
    "artist": "Black Sabbath",
    "title": "Paranoid",
    "year": 1970,
    "game": "SingStar Legends"
  },
  {
    "id": "218",
    "artist": "Blur",
    "title": "Parklife",
    "year": 1994,
    "game": "SingStar Legends"
  },
  {
    "id": "219",
    "artist": "David Bowie",
    "title": "Life on Mars?",
    "year": 1971,
    "game": "SingStar Legends"
  },
  {
    "id": "220",
    "artist": "Depeche Mode",
    "title": "Enjoy the Silence",
    "year": 1990,
    "game": "SingStar Legends"
  },
  {
    "id": "221",
    "artist": "Dusty Springfield",
    "title": "Son of a Preacher Man",
    "year": 1968,
    "game": "SingStar Legends"
  },
  {
    "id": "222",
    "artist": "Ella Fitzgerald and Louis Armstrong",
    "title": "Let's Call the Whole Thing Off",
    "year": 1937,
    "game": "SingStar Legends"
  },
  {
    "id": "223",
    "artist": "Elton John",
    "title": "Rocket Man",
    "year": 1972,
    "game": "SingStar Legends"
  },
  {
    "id": "224",
    "artist": "Elvis Presley",
    "title": "Blue Suede Shoes",
    "year": 1956,
    "game": "SingStar Legends"
  },
  {
    "id": "225",
    "artist": "Jackie Wilson",
    "title": "Reet Petite",
    "year": 1957,
    "game": "SingStar Legends"
  },
  {
    "id": "226",
    "artist": "The Jackson 5",
    "title": "I Want You Back",
    "year": 1969,
    "game": "SingStar Legends"
  },
  {
    "id": "227",
    "artist": "John Lennon",
    "title": "Imagine",
    "year": 1971,
    "game": "SingStar Legends"
  },
  {
    "id": "228",
    "artist": "Johnny Cash",
    "title": "Ring of Fire",
    "year": 1963,
    "game": "SingStar Legends"
  },
  {
    "id": "229",
    "artist": "Lynyrd Skynyrd",
    "title": "Sweet Home Alabama",
    "year": 1974,
    "game": "SingStar Legends"
  },
  {
    "id": "230",
    "artist": "Madonna",
    "title": "Papa Don't Preach",
    "year": 1986,
    "game": "SingStar Legends"
  },
  {
    "id": "231",
    "artist": "Marvin Gaye",
    "title": "I Heard It Through the Grapevine",
    "year": 1968,
    "game": "SingStar Legends"
  },
  {
    "id": "232",
    "artist": "The Monkees",
    "title": "Daydream Believer",
    "year": 1967,
    "game": "SingStar Legends"
  },
  {
    "id": "233",
    "artist": "Nirvana",
    "title": "Smells Like Teen Spirit",
    "year": 1991,
    "game": "SingStar Legends"
  },
  {
    "id": "234",
    "artist": "Patsy Cline",
    "title": "Crazy",
    "year": 1961,
    "game": "SingStar Legends"
  },
  {
    "id": "235",
    "artist": "Pet Shop Boys",
    "title": "Always on My Mind",
    "year": 1987,
    "game": "SingStar Legends"
  },
  {
    "id": "236",
    "artist": "The Police",
    "title": "Roxanne",
    "year": 1978,
    "game": "SingStar Legends"
  },
  {
    "id": "237",
    "artist": "The Righteous Brothers",
    "title": "Unchained Melody",
    "year": 1965,
    "game": "SingStar Legends"
  },
  {
    "id": "238",
    "artist": "The Rolling Stones",
    "title": "Sympathy for the Devil",
    "year": 1968,
    "game": "SingStar Legends"
  },
  {
    "id": "239",
    "artist": "Roxy Music",
    "title": "Love Is the Drug",
    "year": 1975,
    "game": "SingStar Legends"
  },
  {
    "id": "240",
    "artist": "Sam Cooke",
    "title": "Wonderful World",
    "year": 1960,
    "game": "SingStar Legends"
  },
  {
    "id": "241",
    "artist": "The Smiths",
    "title": "This Charming Man",
    "year": 1983,
    "game": "SingStar Legends"
  },
  {
    "id": "242",
    "artist": "Tina Turner",
    "title": "What's Love Got to Do with It?",
    "year": 1984,
    "game": "SingStar Legends"
  },
  {
    "id": "243",
    "artist": "U2",
    "title": "Vertigo",
    "year": 2004,
    "game": "SingStar Legends"
  },
  {
    "id": "244",
    "artist": "Whitney Houston",
    "title": "The Greatest Love of All",
    "year": 1985,
    "game": "SingStar Legends"
  },
  {
    "id": "245",
    "artist": "CC Cowboys",
    "title": "Tigergutt",
    "year": 1990,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "246",
    "artist": "CC Cowboys",
    "title": "Vill, vakker og våt",
    "year": 1993,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "247",
    "artist": "CC Cowboys",
    "title": "Harry",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "248",
    "artist": "D.D.E.",
    "title": "Rompa mi",
    "year": 1992,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "249",
    "artist": "D.D.E.",
    "title": "Det går likar no",
    "year": 1996,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "250",
    "artist": "D.D.E.",
    "title": "E6",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "251",
    "artist": "deLillos",
    "title": "Neste sommer",
    "year": 1986,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "252",
    "artist": "deLillos",
    "title": "Smak av honning",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "253",
    "artist": "deLillos",
    "title": "Min beibi dro av sted",
    "year": 1984,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "254",
    "artist": "deLillos",
    "title": "Ut",
    "year": 1988,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "255",
    "artist": "Jahn Teigen",
    "title": "Min første kjærlighet",
    "year": 1972,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "256",
    "artist": "Jahn Teigen",
    "title": "Det vakreste som fins",
    "year": 1982,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "257",
    "artist": "Jahn Teigen",
    "title": "Optimist",
    "year": 1980,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "258",
    "artist": "Postgirobygget",
    "title": "Sløv uten dop",
    "year": 1999,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "259",
    "artist": "Postgirobygget",
    "title": "En solskinnsdag",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "260",
    "artist": "Postgirobygget",
    "title": "23 tommer",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "261",
    "artist": "Postgirobygget",
    "title": "Idyll",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "262",
    "artist": "Trang Fødsel",
    "title": "Kursiv",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "263",
    "artist": "Trang Fødsel",
    "title": "Livet det er helt ålreit",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "264",
    "artist": "Trang Fødsel",
    "title": "Drømmedame",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "265",
    "artist": "a-ha",
    "title": "The Sun Always Shines on TV",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "266",
    "artist": "Annie",
    "title": "Heartbeat",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "267",
    "artist": "Arne Schau Knudsen",
    "title": "Gal av lengsel",
    "year": 1988,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "268",
    "artist": "Avril Lavigne",
    "title": "Sk8er Boi",
    "year": 2002,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "269",
    "artist": "Beyoncé",
    "title": "Crazy in Love",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "270",
    "artist": "Bigbang",
    "title": "Girl in Oslo",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "271",
    "artist": "The Clash",
    "title": "Should I Stay or Should I Go?",
    "year": 1982,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "272",
    "artist": "David",
    "title": "Wild At Heart",
    "year": 1984,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "273",
    "artist": "Dollie",
    "title": "Lenge Leve Livet",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "274",
    "artist": "DumDum Boys",
    "title": "Splitter Pine",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "275",
    "artist": "Hoobastank",
    "title": "The Reason",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "276",
    "artist": "Jan Eggum",
    "title": "På an igjen",
    "year": 1977,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "277",
    "artist": "Joss Stone",
    "title": "Super Duper Love (Are You Digging On Me?)",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "278",
    "artist": "Kaptein Sabeltann",
    "title": "Vi seiler vår egen sjø",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "279",
    "artist": "The Kids",
    "title": "Forelska i lærer'n",
    "year": 1980,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "280",
    "artist": "Kine",
    "title": "In the air tonight",
    "year": 2001,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "281",
    "artist": "Kylie Minogue",
    "title": "In Your Eyes",
    "year": 2002,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "282",
    "artist": "Manfred Mann",
    "title": "Do Wah Diddy",
    "year": 1964,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "283",
    "artist": "Maria Mena",
    "title": "My Lullaby",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "284",
    "artist": "The Monroes",
    "title": "Sunday people",
    "year": 1982,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "285",
    "artist": "Opus X",
    "title": "Loving you girl",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "286",
    "artist": "Philip & Sandra",
    "title": "Sommerflørt",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "287",
    "artist": "Robbie Williams",
    "title": "Let Me Entertain You",
    "year": 1998,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "288",
    "artist": "Rune Rudberg",
    "title": "Ut mot havet",
    "year": 1980,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "289",
    "artist": "The September When",
    "title": "Cries like a baby",
    "year": 1990,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "290",
    "artist": "Sister Sledge",
    "title": "We are family",
    "year": 1979,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "291",
    "artist": "Sputnik",
    "title": "Lukk opp din hjertedør",
    "year": 1995,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "292",
    "artist": "Steppenwolf",
    "title": "Born to be Wild",
    "year": 1968,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "293",
    "artist": "Tine",
    "title": "Vil Ha Deg",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "294",
    "artist": "Tom Jones",
    "title": "It's not unusual",
    "year": 1965,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "295",
    "artist": "3 Doors Down",
    "title": "When I'm Gone",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "296",
    "artist": "Ashlee Simpson",
    "title": "Boyfriend",
    "year": 2005,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "297",
    "artist": "Avril Lavigne",
    "title": "My Happy Ending",
    "year": 2004,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "298",
    "artist": "Boys Like Girls",
    "title": "The Great Escape",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "299",
    "artist": "Cartel",
    "title": "Lose It",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "300",
    "artist": "Colbie Caillat",
    "title": "Bubbly",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "301",
    "artist": "Dixie Chicks",
    "title": "Not Ready to Make Nice",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "302",
    "artist": "Duran Duran",
    "title": "Ordinary World",
    "year": 1992,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "303",
    "artist": "Evanescence",
    "title": "Bring Me To Life",
    "year": 2003,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "304",
    "artist": "Fall Out Boy",
    "title": "Thnks fr th Mmrs",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "305",
    "artist": "Fergie",
    "title": "Big Girls Don't Cry",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "306",
    "artist": "Gwen Stefani feat. Akon",
    "title": "The Sweet Escape",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "307",
    "artist": "The Hives",
    "title": "Tick Tick Boom",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "308",
    "artist": "Jennifer Lopez",
    "title": "Jenny From the Block",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "309",
    "artist": "Lifehouse",
    "title": "First Time",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "310",
    "artist": "Lily Allen",
    "title": "Littlest Things",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "311",
    "artist": "Lloyd",
    "title": "Get it Shawty",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "312",
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "313",
    "artist": "Matchbox Twenty",
    "title": "How Far We've Come",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "314",
    "artist": "Michelle Branch",
    "title": "Breathe",
    "year": 2003,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "315",
    "artist": "Nelly Furtado",
    "title": "Promiscuous",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "316",
    "artist": "Norah Jones",
    "title": "Don't Know Why",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "317",
    "artist": "The Outfield",
    "title": "Your Love",
    "year": 1985,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "318",
    "artist": "Peter Bjorn and John",
    "title": "Young Folks",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "319",
    "artist": "P!nk",
    "title": "Who Knew",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "320",
    "artist": "Plain White T's",
    "title": "Hey There Delilah",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "321",
    "artist": "Rihanna",
    "title": "Umbrella",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "322",
    "artist": "Santana feat. Chad Kroeger",
    "title": "Into The Night",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "323",
    "artist": "Steriogram",
    "title": "Walkie Talkie Man",
    "year": 2004,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "324",
    "artist": "Sum 41",
    "title": "Fat Lip",
    "year": 2001,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "325",
    "artist": "Queen",
    "title": "Another One Bites The Dust",
    "year": 1980,
    "game": "SingStar Queen"
  },
  {
    "id": "326",
    "artist": "Queen",
    "title": "Bicycle Race",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "327",
    "artist": "Queen",
    "title": "Bohemian Rhapsody",
    "year": 1975,
    "game": "SingStar Queen"
  },
  {
    "id": "328",
    "artist": "Queen",
    "title": "Breakthru",
    "year": 1989,
    "game": "SingStar Queen"
  },
  {
    "id": "329",
    "artist": "Queen",
    "title": "Crazy Little Thing Called Love",
    "year": 1979,
    "game": "SingStar Queen"
  },
  {
    "id": "330",
    "artist": "Queen",
    "title": "Don't Stop Me Now",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "331",
    "artist": "Queen",
    "title": "Fat Bottomed Girls",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "332",
    "artist": "Queen",
    "title": "I Want It All",
    "year": 1989,
    "game": "SingStar Queen"
  },
  {
    "id": "333",
    "artist": "Queen",
    "title": "I Want To Break Free",
    "year": 1984,
    "game": "SingStar Queen"
  },
  {
    "id": "334",
    "artist": "Queen",
    "title": "Innuendo",
    "year": 1991,
    "game": "SingStar Queen"
  },
  {
    "id": "335",
    "artist": "Queen",
    "title": "One Vision",
    "year": 1985,
    "game": "SingStar Queen"
  },
  {
    "id": "336",
    "artist": "Queen",
    "title": "Play The Game",
    "year": 1980,
    "game": "SingStar Queen"
  },
  {
    "id": "337",
    "artist": "Queen",
    "title": "Somebody To Love",
    "year": 1976,
    "game": "SingStar Queen"
  },
  {
    "id": "338",
    "artist": "Queen",
    "title": "These Are The Days Of Our Lives",
    "year": 1991,
    "game": "SingStar Queen"
  },
  {
    "id": "339",
    "artist": "Queen",
    "title": "Tie Your Mother Down",
    "year": 1976,
    "game": "SingStar Queen"
  },
  {
    "id": "340",
    "artist": "Queen & David Bowie",
    "title": "Under Pressure",
    "year": 1981,
    "game": "SingStar Queen"
  },
  {
    "id": "341",
    "artist": "Queen",
    "title": "We Are The Champions",
    "year": 1977,
    "game": "SingStar Queen"
  },
  {
    "id": "342",
    "artist": "Queen",
    "title": "We Will Rock You",
    "year": 1977,
    "game": "SingStar Queen"
  },
  {
    "id": "343",
    "artist": "Queen",
    "title": "Who Wants To Live Forever",
    "year": 1986,
    "game": "SingStar Queen"
  },
  {
    "id": "344",
    "artist": "Queen",
    "title": "You're My Best Friend",
    "year": 1975,
    "game": "SingStar Queen"
  },
  {
    "id": "345",
    "artist": "The 411",
    "title": "Dumb",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "346",
    "artist": "Amerie",
    "title": "1 Thing",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "347",
    "artist": "Amy Winehouse",
    "title": "Back To Black",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "348",
    "artist": "Anastacia",
    "title": "I'm Outta Love",
    "year": 2000,
    "game": "SingStar R&B"
  },
  {
    "id": "349",
    "artist": "Beverley Knight",
    "title": "Come As You Are",
    "year": 1998,
    "game": "SingStar R&B"
  },
  {
    "id": "350",
    "artist": "Black Eyed Peas",
    "title": "Pump It",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "351",
    "artist": "Chris Brown",
    "title": "Yo! (Excuse Me Miss)",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "352",
    "artist": "Christina Milian",
    "title": "AM To PM",
    "year": 2001,
    "game": "SingStar R&B"
  },
  {
    "id": "353",
    "artist": "Corinne Bailey Rae",
    "title": "I'd Like To",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "354",
    "artist": "Destiny's Child",
    "title": "Bootylicious",
    "year": 2001,
    "game": "SingStar R&B"
  },
  {
    "id": "355",
    "artist": "Diana Ross & The Supremes",
    "title": "Baby Love",
    "year": 1964,
    "game": "SingStar R&B"
  },
  {
    "id": "356",
    "artist": "DJ Jazzy Jeff & The Fresh Prince",
    "title": "Summertime",
    "year": 1991,
    "game": "SingStar R&B"
  },
  {
    "id": "357",
    "artist": "Edwin Starr",
    "title": "War",
    "year": 1970,
    "game": "SingStar R&B"
  },
  {
    "id": "358",
    "artist": "En Vogue",
    "title": "My Lovin' (You're Never Gonna Get It)",
    "year": 1992,
    "game": "SingStar R&B"
  },
  {
    "id": "359",
    "artist": "The Four Tops",
    "title": "I Can't Help Myself",
    "year": 1965,
    "game": "SingStar R&B"
  },
  {
    "id": "360",
    "artist": "Gwen Stefani",
    "title": "Hollaback Girl",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "361",
    "artist": "Inner City",
    "title": "Good Life",
    "year": 1988,
    "game": "SingStar R&B"
  },
  {
    "id": "362",
    "artist": "Jamelia",
    "title": "Thank You",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "363",
    "artist": "Jamiroquai",
    "title": "Alright",
    "year": 1997,
    "game": "SingStar R&B"
  },
  {
    "id": "364",
    "artist": "Luther Vandross",
    "title": "Never Too Much",
    "year": 1981,
    "game": "SingStar R&B"
  },
  {
    "id": "365",
    "artist": "Mark Ronson feat. Daniel Merriweather",
    "title": "Stop Me",
    "year": 2007,
    "game": "SingStar R&B"
  },
  {
    "id": "366",
    "artist": "Martha Reeves & The Vandellas",
    "title": "Dancing In The Street",
    "year": 1964,
    "game": "SingStar R&B"
  },
  {
    "id": "367",
    "artist": "Marvin Gaye & Tammi Tarrell",
    "title": "Ain't No Mountain High Enough",
    "year": 1967,
    "game": "SingStar R&B"
  },
  {
    "id": "368",
    "artist": "OutKast",
    "title": "Idlewild Blue (Don'tchu Worry 'Bout Me)",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "369",
    "artist": "The Pussycat Dolls",
    "title": "Buttons",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "370",
    "artist": "Rihanna",
    "title": "We Ride",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "371",
    "artist": "Salt'N'Pepa",
    "title": "Push It",
    "year": 1987,
    "game": "SingStar R&B"
  },
  {
    "id": "372",
    "artist": "Sugababes",
    "title": "Ugly",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "373",
    "artist": "Whitney Houston",
    "title": "My Love Is Your Love",
    "year": 1998,
    "game": "SingStar R&B"
  },
  {
    "id": "374",
    "artist": "Womack & Womack",
    "title": "Teardrops",
    "year": 1988,
    "game": "SingStar R&B"
  },
  {
    "id": "375",
    "artist": "Air Supply",
    "title": "All Out Of Love",
    "year": 1980,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "376",
    "artist": "Alannah Myles",
    "title": "Black Velvet",
    "year": 1989,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "377",
    "artist": "Anastacia",
    "title": "Left Outside Alone",
    "year": 2004,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "378",
    "artist": "Avril Lavigne",
    "title": "I'm With You",
    "year": 2002,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "379",
    "artist": "Boston",
    "title": "More Than A Feeling",
    "year": 1976,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "380",
    "artist": "Boy Meets Girl",
    "title": "Waiting For A Star To Fall",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "381",
    "artist": "The Calling",
    "title": "Wherever You Will Go",
    "year": 2001,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "382",
    "artist": "Cutting Crew",
    "title": "(I Just) Died In Your Arms",
    "year": 1986,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "383",
    "artist": "Cyndi Lauper",
    "title": "Time After Time",
    "year": 1983,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "384",
    "artist": "Duran Duran",
    "title": "Ordinary World",
    "year": 1992,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "385",
    "artist": "Europe",
    "title": "Carrie",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "386",
    "artist": "Heart",
    "title": "Alone",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "387",
    "artist": "Jon Secada",
    "title": "Just Another Day (Without You)",
    "year": 1992,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "388",
    "artist": "Lone Star",
    "title": "Amazed",
    "year": 1999,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "389",
    "artist": "Marc Cohn",
    "title": "Walking In Memphis",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "390",
    "artist": "Meat Loaf",
    "title": "I'd Do Anything For Love (But I Won't Do That)",
    "year": 1993,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "391",
    "artist": "Mr Big",
    "title": "To Be With You",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "392",
    "artist": "Mr Mister",
    "title": "Broken Wings",
    "year": 1985,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "393",
    "artist": "Mr Mister",
    "title": "Kyrie",
    "year": 1985,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "394",
    "artist": "Nickelback",
    "title": "How You Remind Me",
    "year": 2001,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "395",
    "artist": "Nilsson",
    "title": "Without You",
    "year": 1971,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "396",
    "artist": "Poison",
    "title": "Every Rose Has Its Thorn",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "397",
    "artist": "Queen",
    "title": "The Show Must Go On",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "398",
    "artist": "Roxette",
    "title": "It Must Have Been Love",
    "year": 1990,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "399",
    "artist": "Roxette",
    "title": "Listen To Your Heart",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "400",
    "artist": "Starship",
    "title": "Nothing's Gonna Stop Us Now",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "401",
    "artist": "Sugababes",
    "title": "Too Lost In You",
    "year": 2003,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "402",
    "artist": "Tina Arena",
    "title": "Chains",
    "year": 1994,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "403",
    "artist": "Toto",
    "title": "Africa",
    "year": 1982,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "404",
    "artist": "T'Pau",
    "title": "China In Your Hand",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "405",
    "artist": "101 Dalmatians",
    "title": "Cruella De Vil",
    "year": 1961,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "406",
    "artist": "Aladdin",
    "title": "A Whole New World",
    "year": 1992,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "407",
    "artist": "The Aristocats",
    "title": "Ev'rybody Wants To Be A Cat",
    "year": 1970,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "408",
    "artist": "Beauty And The Beast",
    "title": "Beauty And The Beast",
    "year": 1991,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "409",
    "artist": "Cinderella",
    "title": "Bibbidi-Bobbidi-Boo",
    "year": 1950,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "410",
    "artist": "Cinderella",
    "title": "The Work Song",
    "year": 1950,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "411",
    "artist": "The Jungle Book",
    "title": "Bare Necessities",
    "year": 1967,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "412",
    "artist": "The Jungle Book",
    "title": "I Wanna Be Like You",
    "year": 1967,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "413",
    "artist": "Lady and the Tramp",
    "title": "He's A Tramp",
    "year": 1955,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "414",
    "artist": "The Lion King",
    "title": "I Just Can't Wait To Be King",
    "year": 1994,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "415",
    "artist": "The Lion King",
    "title": "The Circle Of Life",
    "year": 1994,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "416",
    "artist": "The Little Mermaid",
    "title": "Kiss The Girl",
    "year": 1989,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "417",
    "artist": "The Little Mermaid",
    "title": "Under The Sea",
    "year": 1989,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "418",
    "artist": "Peter Pan",
    "title": "Following The Leader",
    "year": 1953,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "419",
    "artist": "Peter Pan",
    "title": "You Can Fly! You Can Fly! You Can Fly!",
    "year": 1953,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "420",
    "artist": "Sleeping Beauty",
    "title": "I Wonder",
    "year": 1959,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "421",
    "artist": "Sleeping Beauty",
    "title": "Once Upon A Dream",
    "year": 1959,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "422",
    "artist": "Tarzan",
    "title": "Son Of Man",
    "year": 1999,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "423",
    "artist": "Toy Story",
    "title": "You've Got A Friend In Me",
    "year": 1995,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "424",
    "artist": "Winnie The Pooh",
    "title": "Winnie The Pooh",
    "year": 1966,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "425",
    "artist": "Afro-dite",
    "title": "Never Let It Go",
    "year": 2003,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "426",
    "artist": "Anna Book",
    "title": "ABC",
    "year": 1986,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "427",
    "artist": "Arvingarna",
    "title": "Eloise",
    "year": 1993,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "428",
    "artist": "Attack",
    "title": "Ooa hela natten",
    "year": 2005,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "429",
    "artist": "Barbados",
    "title": "Kom hem",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "430",
    "artist": "Beyoncé",
    "title": "Crazy in Love",
    "year": 2003,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "431",
    "artist": "Blink-182",
    "title": "What's My Age Again?",
    "year": 1999,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "432",
    "artist": "Carola",
    "title": "Fångad av en stormvind",
    "year": 1991,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "433",
    "artist": "Christian Walz",
    "title": "Never Be Afraid Again",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "434",
    "artist": "The Clash",
    "title": "Should I Stay or Should I Go",
    "year": 1982,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "435",
    "artist": "Daniel Lindström",
    "title": "Coming True",
    "year": 2005,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "436",
    "artist": "Darin",
    "title": "Money for Nothing",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "437",
    "artist": "Friends",
    "title": "Lyssna Till Ditt Hjärta",
    "year": 2001,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "438",
    "artist": "Good Charlotte",
    "title": "I Just Wanna Live",
    "year": 2004,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "439",
    "artist": "The Hives",
    "title": "Main Offender",
    "year": 2000,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "440",
    "artist": "Jimmy Jansson",
    "title": "Vi kan gunga",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "441",
    "artist": "Kylie Minogue",
    "title": "In Your Eyes",
    "year": 2002,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "442",
    "artist": "Lena Philipsson",
    "title": "Det gör ont",
    "year": 2004,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "443",
    "artist": "Lisa Nilsson",
    "title": "Himlen runt hörnet",
    "year": 1995,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "444",
    "artist": "Magnus Uggla",
    "title": "Värsta grymma tjejen",
    "year": 1982,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "445",
    "artist": "Manfred Mann",
    "title": "Do Wah Diddy Diddy",
    "year": 1964,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "446",
    "artist": "Mauro Scocco",
    "title": "Sarah",
    "year": 1999,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "447",
    "artist": "OutKast",
    "title": "Roses",
    "year": 2004,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "448",
    "artist": "Patrik Isaksson",
    "title": "Hos dig är jag underbar",
    "year": 2000,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "449",
    "artist": "Robbie Williams",
    "title": "Let Me Entertain You",
    "year": 1998,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "450",
    "artist": "Robbie Williams and Kylie Minogue",
    "title": "Kids",
    "year": 2000,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "451",
    "artist": "Robyn",
    "title": "Show Me Love",
    "year": 1997,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "452",
    "artist": "Steppenwolf",
    "title": "Born To Be Wild",
    "year": 1968,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "453",
    "artist": "Tom Jones",
    "title": "It's Not Unusual",
    "year": 1965,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "454",
    "artist": "Uno Svenningsson",
    "title": "Under ytan",
    "year": 1994,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "455",
    "artist": "A-ha",
    "title": "Take On Me",
    "year": 1985,
    "game": "SingStar"
  },
  {
    "id": "456",
    "artist": "Atomic Kitten",
    "title": "Eternal Flame",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "457",
    "artist": "Avril Lavigne",
    "title": "Complicated",
    "year": 2002,
    "game": "SingStar"
  },
  {
    "id": "458",
    "artist": "Blondie",
    "title": "Heart of Glass",
    "year": 1978,
    "game": "SingStar"
  },
  {
    "id": "459",
    "artist": "Blue",
    "title": "One Love",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "460",
    "artist": "Busted",
    "title": "Crashed the Wedding",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "461",
    "artist": "Carl Douglas",
    "title": "Kung Fu Fighting",
    "year": 1974,
    "game": "SingStar"
  },
  {
    "id": "462",
    "artist": "Daniel Bedingfield",
    "title": "If You're Not the One",
    "year": 2002,
    "game": "SingStar"
  },
  {
    "id": "463",
    "artist": "The Darkness",
    "title": "I Believe in a Thing Called Love",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "464",
    "artist": "Deee-Lite",
    "title": "Groove Is in the Heart",
    "year": 1990,
    "game": "SingStar"
  },
  {
    "id": "465",
    "artist": "Dido",
    "title": "Thank You",
    "year": 1998,
    "game": "SingStar"
  },
  {
    "id": "466",
    "artist": "Elvis Presley",
    "title": "Suspicious Minds",
    "year": 1969,
    "game": "SingStar"
  },
  {
    "id": "467",
    "artist": "George Michael",
    "title": "Careless Whisper",
    "year": 1984,
    "game": "SingStar"
  },
  {
    "id": "468",
    "artist": "Good Charlotte",
    "title": "Girls & Boys",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "469",
    "artist": "Jamelia",
    "title": "Superstar",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "470",
    "artist": "Lemar",
    "title": "50/50",
    "year": 2004,
    "game": "SingStar"
  },
  {
    "id": "471",
    "artist": "Liberty X",
    "title": "Just a Little",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "472",
    "artist": "Madonna",
    "title": "Like a Virgin",
    "year": 1984,
    "game": "SingStar"
  },
  {
    "id": "473",
    "artist": "Mis-Teeq",
    "title": "Scandalous",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "474",
    "artist": "Motörhead",
    "title": "Ace of Spades",
    "year": 1980,
    "game": "SingStar"
  },
  {
    "id": "475",
    "artist": "Petula Clark",
    "title": "Downtown",
    "year": 1964,
    "game": "SingStar"
  },
  {
    "id": "476",
    "artist": "P!nk",
    "title": "Get the Party Started",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "477",
    "artist": "Rick Astley",
    "title": "Never Gonna Give You Up",
    "year": 1987,
    "game": "SingStar"
  },
  {
    "id": "478",
    "artist": "Ricky Martin",
    "title": "Livin' la Vida Loca",
    "year": 1999,
    "game": "SingStar"
  },
  {
    "id": "479",
    "artist": "Roy Orbison",
    "title": "Oh Pretty Woman",
    "year": 1964,
    "game": "SingStar"
  },
  {
    "id": "480",
    "artist": "S Club",
    "title": "Don't Stop Movin'",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "481",
    "artist": "Sophie Ellis-Bextor",
    "title": "Murder on the Dancefloor",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "482",
    "artist": "Sugababes",
    "title": "Round Round",
    "year": 2002,
    "game": "SingStar"
  },
  {
    "id": "483",
    "artist": "Village People",
    "title": "Y.M.C.A.",
    "year": 1978,
    "game": "SingStar"
  },
  {
    "id": "484",
    "artist": "Westlife",
    "title": "World of Our Own",
    "year": 2002,
    "game": "SingStar"
  }
];

export const games: Game[] = [];
