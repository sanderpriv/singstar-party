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
    "artist": "Alice Cooper",
    "title": "Poison",
    "year": 1989,
    "game": "SingStar 80s"
  },
  {
    "id": "2",
    "artist": "Belinda Carlisle",
    "title": "Heaven Is a Place on Earth",
    "year": 1987,
    "game": "SingStar 80s"
  },
  {
    "id": "3",
    "artist": "Billy Joel",
    "title": "Uptown Girl",
    "year": 1983,
    "game": "SingStar 80s"
  },
  {
    "id": "4",
    "artist": "Blondie",
    "title": "Atomic",
    "year": 1980,
    "game": "SingStar 80s"
  },
  {
    "id": "5",
    "artist": "The Cure",
    "title": "Just Like Heaven",
    "year": 1987,
    "game": "SingStar 80s"
  },
  {
    "id": "6",
    "artist": "Culture Club",
    "title": "Karma Chameleon",
    "year": 1983,
    "game": "SingStar 80s"
  },
  {
    "id": "7",
    "artist": "Dexys Midnight Runners",
    "title": "Come On Eileen",
    "year": 1982,
    "game": "SingStar 80s"
  },
  {
    "id": "8",
    "artist": "Dolly Parton",
    "title": "9 to 5",
    "year": 1980,
    "game": "SingStar 80s"
  },
  {
    "id": "9",
    "artist": "Duran Duran",
    "title": "Rio",
    "year": 1982,
    "game": "SingStar 80s"
  },
  {
    "id": "10",
    "artist": "Erasure",
    "title": "A Little Respect",
    "year": 1988,
    "game": "SingStar 80s"
  },
  {
    "id": "11",
    "artist": "Europe",
    "title": "The Final Countdown",
    "year": 1986,
    "game": "SingStar 80s"
  },
  {
    "id": "12",
    "artist": "Fairground Attraction",
    "title": "Perfect",
    "year": 1988,
    "game": "SingStar 80s"
  },
  {
    "id": "13",
    "artist": "Foreigner",
    "title": "I Want to Know What Love Is",
    "year": 1984,
    "game": "SingStar 80s"
  },
  {
    "id": "14",
    "artist": "Frankie Goes to Hollywood",
    "title": "The Power of Love",
    "year": 1984,
    "game": "SingStar 80s"
  },
  {
    "id": "15",
    "artist": "Katrina and the Waves",
    "title": "Walking on Sunshine",
    "year": 1985,
    "game": "SingStar 80s"
  },
  {
    "id": "16",
    "artist": "Madonna",
    "title": "Material Girl",
    "year": 1985,
    "game": "SingStar 80s"
  },
  {
    "id": "17",
    "artist": "Marillion",
    "title": "Kayleigh",
    "year": 1985,
    "game": "SingStar 80s"
  },
  {
    "id": "18",
    "artist": "Nena",
    "title": "99 Red Balloons",
    "year": 1984,
    "game": "SingStar 80s"
  },
  {
    "id": "19",
    "artist": "The Pretenders",
    "title": "Brass in Pocket",
    "year": 1980,
    "game": "SingStar 80s"
  },
  {
    "id": "20",
    "artist": "Run–D.M.C.",
    "title": "It's Tricky",
    "year": 1987,
    "game": "SingStar 80s"
  },
  {
    "id": "21",
    "artist": "Simple Minds",
    "title": "Don't You (Forget About Me)",
    "year": 1985,
    "game": "SingStar 80s"
  },
  {
    "id": "22",
    "artist": "Soft Cell",
    "title": "Tainted Love",
    "year": 1981,
    "game": "SingStar 80s"
  },
  {
    "id": "23",
    "artist": "Starship",
    "title": "We Built This City",
    "year": 1985,
    "game": "SingStar 80s"
  },
  {
    "id": "24",
    "artist": "Survivor",
    "title": "Eye of the Tiger",
    "year": 1982,
    "game": "SingStar 80s"
  },
  {
    "id": "25",
    "artist": "Tears for Fears",
    "title": "Everybody Wants to Rule the World",
    "year": 1985,
    "game": "SingStar 80s"
  },
  {
    "id": "26",
    "artist": "Tina Turner",
    "title": "The Best",
    "year": 1989,
    "game": "SingStar 80s"
  },
  {
    "id": "27",
    "artist": "Vanilla Ice",
    "title": "Ice Ice Baby",
    "year": 1990,
    "game": "SingStar 80s"
  },
  {
    "id": "28",
    "artist": "Wham!",
    "title": "Wake Me Up Before You Go-Go",
    "year": 1984,
    "game": "SingStar 80s"
  },
  {
    "id": "29",
    "artist": "All Saints",
    "title": "Never Ever",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "30",
    "artist": "Aqua",
    "title": "Barbie Girl",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "31",
    "artist": "The B-52's",
    "title": "Love Shack",
    "year": 1989,
    "game": "SingStar 90s"
  },
  {
    "id": "32",
    "artist": "Barenaked Ladies",
    "title": "One Week",
    "year": 1998,
    "game": "SingStar 90s"
  },
  {
    "id": "33",
    "artist": "Billy Ray Cyrus",
    "title": "Achy Breaky Heart",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "34",
    "artist": "The Cardigans",
    "title": "Lovefool",
    "year": 1996,
    "game": "SingStar 90s"
  },
  {
    "id": "35",
    "artist": "The Cranberries",
    "title": "Zombie",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "36",
    "artist": "Crash Test Dummies",
    "title": "Mmm Mmm Mmm Mmm",
    "year": 1993,
    "game": "SingStar 90s"
  },
  {
    "id": "37",
    "artist": "The Cure",
    "title": "Friday I'm in Love",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "38",
    "artist": "Divinyls",
    "title": "I Touch Myself",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "39",
    "artist": "EMF",
    "title": "Unbelievable",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "40",
    "artist": "Gin Blossoms",
    "title": "Hey Jealousy",
    "year": 1993,
    "game": "SingStar 90s"
  },
  {
    "id": "41",
    "artist": "Lisa Loeb",
    "title": "Stay (I Missed You)",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "42",
    "artist": "M People",
    "title": "Moving On Up",
    "year": 1993,
    "game": "SingStar 90s"
  },
  {
    "id": "43",
    "artist": "MC Hammer",
    "title": "U Can't Touch This",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "44",
    "artist": "Meredith Brooks",
    "title": "Bitch",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "45",
    "artist": "Natalie Imbruglia",
    "title": "Torn",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "46",
    "artist": "New Kids on the Block",
    "title": "Step by Step",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "47",
    "artist": "Nick Cave & Kylie Minogue",
    "title": "Where the Wild Roses Grow",
    "year": 1995,
    "game": "SingStar 90s"
  },
  {
    "id": "48",
    "artist": "Poison",
    "title": "Unskinny Bop",
    "year": 1990,
    "game": "SingStar 90s"
  },
  {
    "id": "49",
    "artist": "R.E.M.",
    "title": "Everybody Hurts",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "50",
    "artist": "Radiohead",
    "title": "Creep",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "51",
    "artist": "Roachford",
    "title": "Only to Be with You",
    "year": 1997,
    "game": "SingStar 90s"
  },
  {
    "id": "52",
    "artist": "Savage Garden",
    "title": "I Want You",
    "year": 1996,
    "game": "SingStar 90s"
  },
  {
    "id": "53",
    "artist": "Seal",
    "title": "Kiss from a Rose",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "54",
    "artist": "Sir Mix-a-Lot",
    "title": "Baby Got Back",
    "year": 1992,
    "game": "SingStar 90s"
  },
  {
    "id": "55",
    "artist": "Spice Girls",
    "title": "Wannabe",
    "year": 1996,
    "game": "SingStar 90s"
  },
  {
    "id": "56",
    "artist": "Spin Doctors",
    "title": "Two Princes",
    "year": 1991,
    "game": "SingStar 90s"
  },
  {
    "id": "57",
    "artist": "Technotronic feat. Felly",
    "title": "Pump Up the Jam",
    "year": 1989,
    "game": "SingStar 90s"
  },
  {
    "id": "58",
    "artist": "Wet Wet Wet",
    "title": "Love Is All Around",
    "year": 1994,
    "game": "SingStar 90s"
  },
  {
    "id": "59",
    "artist": "ABBA",
    "title": "Chiquitita",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "60",
    "artist": "ABBA",
    "title": "Dancing Queen",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "61",
    "artist": "ABBA",
    "title": "Does Your Mother Know",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "62",
    "artist": "ABBA",
    "title": "Fernando",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "63",
    "artist": "ABBA",
    "title": "Gimme! Gimme! Gimme! (A Man After Midnight)",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "64",
    "artist": "ABBA",
    "title": "\"I Do, I Do, I Do, I Do, I Do\"",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "65",
    "artist": "ABBA",
    "title": "\"Knowing Me, Knowing You\"",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "66",
    "artist": "ABBA",
    "title": "Mamma Mia",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "67",
    "artist": "ABBA",
    "title": "\"Money, Money, Money\"",
    "year": 1976,
    "game": "SingStar ABBA"
  },
  {
    "id": "68",
    "artist": "ABBA",
    "title": "One of Us",
    "year": 1981,
    "game": "SingStar ABBA"
  },
  {
    "id": "69",
    "artist": "ABBA",
    "title": "Ring Ring",
    "year": 1973,
    "game": "SingStar ABBA"
  },
  {
    "id": "70",
    "artist": "ABBA",
    "title": "SOS",
    "year": 1975,
    "game": "SingStar ABBA"
  },
  {
    "id": "71",
    "artist": "ABBA",
    "title": "Summer Night City",
    "year": 1978,
    "game": "SingStar ABBA"
  },
  {
    "id": "72",
    "artist": "ABBA",
    "title": "Super Trouper",
    "year": 1980,
    "game": "SingStar ABBA"
  },
  {
    "id": "73",
    "artist": "ABBA",
    "title": "Take a Chance on Me",
    "year": 1978,
    "game": "SingStar ABBA"
  },
  {
    "id": "74",
    "artist": "ABBA",
    "title": "Thank You for the Music",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "75",
    "artist": "ABBA",
    "title": "The Name of the Game",
    "year": 1977,
    "game": "SingStar ABBA"
  },
  {
    "id": "76",
    "artist": "ABBA",
    "title": "The Winner Takes It All",
    "year": 1980,
    "game": "SingStar ABBA"
  },
  {
    "id": "77",
    "artist": "ABBA",
    "title": "Voulez-Vous",
    "year": 1979,
    "game": "SingStar ABBA"
  },
  {
    "id": "78",
    "artist": "ABBA",
    "title": "Waterloo",
    "year": 1974,
    "game": "SingStar ABBA"
  },
  {
    "id": "79",
    "artist": "Alice in Chains",
    "title": "Would?",
    "year": 1992,
    "game": "SingStar Amped"
  },
  {
    "id": "80",
    "artist": "Audioslave",
    "title": "Cochise",
    "year": 2002,
    "game": "SingStar Amped"
  },
  {
    "id": "81",
    "artist": "Blink-182",
    "title": "I Miss You",
    "year": 2003,
    "game": "SingStar Amped"
  },
  {
    "id": "82",
    "artist": "Blue Öyster Cult",
    "title": "(Don't Fear) The Reaper",
    "year": 1976,
    "game": "SingStar Amped"
  },
  {
    "id": "83",
    "artist": "Boston",
    "title": "More Than a Feeling",
    "year": 1976,
    "game": "SingStar Amped"
  },
  {
    "id": "84",
    "artist": "Cheap Trick",
    "title": "I Want You to Want Me",
    "year": 1977,
    "game": "SingStar Amped"
  },
  {
    "id": "85",
    "artist": "David Bowie",
    "title": "Changes",
    "year": 1971,
    "game": "SingStar Amped"
  },
  {
    "id": "86",
    "artist": "Fall Out Boy",
    "title": "This Ain't a Scene It's an Arms Race",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "87",
    "artist": "Foo Fighters",
    "title": "Best of You",
    "year": 2005,
    "game": "SingStar Amped"
  },
  {
    "id": "88",
    "artist": "Free",
    "title": "All Right Now",
    "year": 1970,
    "game": "SingStar Amped"
  },
  {
    "id": "89",
    "artist": "Iggy Pop",
    "title": "Real Wild Child (Wild One)",
    "year": 1986,
    "game": "SingStar Amped"
  },
  {
    "id": "90",
    "artist": "Judas Priest",
    "title": "You've Got Another Thing Comin'",
    "year": 1982,
    "game": "SingStar Amped"
  },
  {
    "id": "91",
    "artist": "The Killers",
    "title": "When You Were Young",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "92",
    "artist": "Motörhead",
    "title": "Ace of Spades",
    "year": 1980,
    "game": "SingStar Amped"
  },
  {
    "id": "93",
    "artist": "Nickelback",
    "title": "Savin' Me",
    "year": 2005,
    "game": "SingStar Amped"
  },
  {
    "id": "94",
    "artist": "Nirvana",
    "title": "Come as You Are",
    "year": 1991,
    "game": "SingStar Amped"
  },
  {
    "id": "95",
    "artist": "O.A.R.",
    "title": "Love and Memories",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "96",
    "artist": "Pearl Jam",
    "title": "Alive",
    "year": 1991,
    "game": "SingStar Amped"
  },
  {
    "id": "97",
    "artist": "Poison",
    "title": "Every Rose Has Its Thorn",
    "year": 1988,
    "game": "SingStar Amped"
  },
  {
    "id": "98",
    "artist": "Queens of the Stone Age",
    "title": "Go with the Flow",
    "year": 2002,
    "game": "SingStar Amped"
  },
  {
    "id": "99",
    "artist": "Quiet Riot",
    "title": "Cum On Feel the Noize",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "100",
    "artist": "Radiohead",
    "title": "Creep",
    "year": 1992,
    "game": "SingStar Amped"
  },
  {
    "id": "101",
    "artist": "Ramones",
    "title": "Blitzkrieg Bop",
    "year": 1976,
    "game": "SingStar Amped"
  },
  {
    "id": "102",
    "artist": "Steppenwolf",
    "title": "Born to Be Wild",
    "year": 1968,
    "game": "SingStar Amped"
  },
  {
    "id": "103",
    "artist": "Stone Temple Pilots",
    "title": "Vasoline",
    "year": 1994,
    "game": "SingStar Amped"
  },
  {
    "id": "104",
    "artist": "Talking Heads",
    "title": "Burning Down the House",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "105",
    "artist": "Yeah Yeah Yeahs",
    "title": "Gold Lion",
    "year": 2006,
    "game": "SingStar Amped"
  },
  {
    "id": "106",
    "artist": "Yes",
    "title": "Owner of a Lonely Heart",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "107",
    "artist": "ZZ Top",
    "title": "Gimme All Your Lovin'",
    "year": 1983,
    "game": "SingStar Amped"
  },
  {
    "id": "108",
    "artist": "Bananarama",
    "title": "I Heard a Rumour",
    "year": 1987,
    "game": "SingStar Anthems"
  },
  {
    "id": "109",
    "artist": "Bonnie Tyler",
    "title": "Total Eclipse of the Heart",
    "year": 1983,
    "game": "SingStar Anthems"
  },
  {
    "id": "110",
    "artist": "Bucks Fizz",
    "title": "Making Your Mind Up",
    "year": 1981,
    "game": "SingStar Anthems"
  },
  {
    "id": "111",
    "artist": "Candi Staton",
    "title": "Young Hearts Run Free",
    "year": 1976,
    "game": "SingStar Anthems"
  },
  {
    "id": "112",
    "artist": "Charlene",
    "title": "I've Never Been to Me",
    "year": 1982,
    "game": "SingStar Anthems"
  },
  {
    "id": "113",
    "artist": "Charlotte Church",
    "title": "Crazy Chick",
    "year": 2005,
    "game": "SingStar Anthems"
  },
  {
    "id": "114",
    "artist": "Cher",
    "title": "If I Could Turn Back Time",
    "year": 1989,
    "game": "SingStar Anthems"
  },
  {
    "id": "115",
    "artist": "Dead or Alive",
    "title": "You Spin Me Round (Like a Record)",
    "year": 1985,
    "game": "SingStar Anthems"
  },
  {
    "id": "116",
    "artist": "Girls Aloud",
    "title": "Biology",
    "year": 2005,
    "game": "SingStar Anthems"
  },
  {
    "id": "117",
    "artist": "Gloria Gaynor",
    "title": "I Will Survive",
    "year": 1978,
    "game": "SingStar Anthems"
  },
  {
    "id": "118",
    "artist": "Kim Wilde",
    "title": "Kids in America",
    "year": 1981,
    "game": "SingStar Anthems"
  },
  {
    "id": "119",
    "artist": "LeAnn Rimes",
    "title": "Can't Fight the Moonlight",
    "year": 2000,
    "game": "SingStar Anthems"
  },
  {
    "id": "120",
    "artist": "The Pussycat Dolls",
    "title": "Don't Cha",
    "year": 2005,
    "game": "SingStar Anthems"
  },
  {
    "id": "121",
    "artist": "Queen",
    "title": "Radio Ga Ga",
    "year": 1984,
    "game": "SingStar Anthems"
  },
  {
    "id": "122",
    "artist": "Scissor Sisters",
    "title": "Laura",
    "year": 2004,
    "game": "SingStar Anthems"
  },
  {
    "id": "123",
    "artist": "Steps",
    "title": "Deeper Shade of Blue",
    "year": 2000,
    "game": "SingStar Anthems"
  },
  {
    "id": "124",
    "artist": "Take That (featuring Lulu)",
    "title": "Relight My Fire",
    "year": 1993,
    "game": "SingStar Anthems"
  },
  {
    "id": "125",
    "artist": "Ultra Naté",
    "title": "Free",
    "year": 1997,
    "game": "SingStar Anthems"
  },
  {
    "id": "126",
    "artist": "The Weather Girls",
    "title": "It's Raining Men",
    "year": 1982,
    "game": "SingStar Anthems"
  },
  {
    "id": "127",
    "artist": "Whitney Houston",
    "title": "I Wanna Dance with Somebody (Who Loves Me)",
    "year": 1987,
    "game": "SingStar Anthems"
  },
  {
    "id": "128",
    "artist": "Bananarama",
    "title": "Cruel Summer",
    "year": 1983,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "129",
    "artist": "Bananarama",
    "title": "Love in the First Degree",
    "year": 1987,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "130",
    "artist": "The Bangles",
    "title": "Eternal Flame",
    "year": 1989,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "131",
    "artist": "Boyz II Men",
    "title": "I'll Make Love to You",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "132",
    "artist": "Boyzone",
    "title": "Love Me for a Reason",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "133",
    "artist": "Bros",
    "title": "I Owe You Nothing",
    "year": 1988,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "134",
    "artist": "Busted",
    "title": "Air Hostess",
    "year": 2002,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "135",
    "artist": "Busted",
    "title": "What I Go to School For",
    "year": 2002,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "136",
    "artist": "East 17",
    "title": "Let It Rain",
    "year": 1995,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "137",
    "artist": "East 17",
    "title": "Stay Another Day",
    "year": 1994,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "138",
    "artist": "En Vogue",
    "title": "Free Your Mind",
    "year": 1992,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "139",
    "artist": "Five",
    "title": "Everybody Get Up",
    "year": 1998,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "140",
    "artist": "Five",
    "title": "Keep On Movin'",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "141",
    "artist": "Girls Aloud",
    "title": "The Show",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "142",
    "artist": "Hanson",
    "title": "MMMBop",
    "year": 1997,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "143",
    "artist": "Jade",
    "title": "Don't Walk Away",
    "year": 1993,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "144",
    "artist": "McFly",
    "title": "All About You",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "145",
    "artist": "McFly",
    "title": "5 Colours in Her Hair",
    "year": 2004,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "146",
    "artist": "Mel and Kim",
    "title": "Showing Out (Get Fresh at the Weekend)",
    "year": 1986,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "147",
    "artist": "Mis-Teeq",
    "title": "One Night Stand",
    "year": 2001,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "148",
    "artist": "New Edition",
    "title": "Candy Girl",
    "year": 1983,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "149",
    "artist": "The Pussycat Dolls",
    "title": "Stickwitu",
    "year": 2005,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "150",
    "artist": "The Shangri-Las",
    "title": "Leader of the Pack",
    "year": 1964,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "151",
    "artist": "Sister Sledge",
    "title": "He's the Greatest Dancer",
    "year": 1979,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "152",
    "artist": "Spice Girls",
    "title": "Say You'll Be There",
    "year": 1996,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "153",
    "artist": "Sugababes",
    "title": "About You Now",
    "year": 2007,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "154",
    "artist": "The Supremes",
    "title": "Stop! In the Name of Love",
    "year": 1965,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "155",
    "artist": "Westlife",
    "title": "Flying Without Wings",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "156",
    "artist": "Westlife",
    "title": "Swear It Again",
    "year": 1999,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "157",
    "artist": "Wilson Phillips",
    "title": "Hold On",
    "year": 1990,
    "game": "SingStar Boy Bands vs Girl Bands"
  },
  {
    "id": "158",
    "artist": "3OH!3",
    "title": "Don't Trust Me",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "159",
    "artist": "A. R. Rahman feat. The Pussycat Dolls",
    "title": "Jai Ho",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "160",
    "artist": "Alex Lloyd",
    "title": "Amazing",
    "year": 2001,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "161",
    "artist": "Ben Lee",
    "title": "Catch My Disease",
    "year": 2007,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "162",
    "artist": "Colbie Caillat",
    "title": "Fallin' for You",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "163",
    "artist": "Empire of the Sun",
    "title": "Walking on a Dream",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "164",
    "artist": "George Michael",
    "title": "Outside",
    "year": 1998,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "165",
    "artist": "Guy Sebastian feat. Jordin Sparks",
    "title": "Art of Love",
    "year": 2010,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "166",
    "artist": "Kate Miller-Heidke",
    "title": "The Last Day on Earth",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "167",
    "artist": "La Roux",
    "title": "Bulletproof",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "168",
    "artist": "Lady Gaga",
    "title": "Poker Face",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "169",
    "artist": "The Last Goodnight",
    "title": "Pictures of You",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "170",
    "artist": "The Living End",
    "title": "White Noise",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "171",
    "artist": "Michael Bublé",
    "title": "Haven't Met You Yet",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "172",
    "artist": "Mika",
    "title": "We Are Golden",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "173",
    "artist": "Milli Vanilli",
    "title": "Blame It on the Rain",
    "year": 1989,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "174",
    "artist": "Natalie Bassingthwaighte",
    "title": "Alive",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "175",
    "artist": "Nelly Furtado",
    "title": "Turn Off the Light",
    "year": 2001,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "176",
    "artist": "Pixie Lott",
    "title": "Boys and Girls",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "177",
    "artist": "The Presets",
    "title": "This Boy's in Love",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "178",
    "artist": "The Pussycat Dolls",
    "title": "Hush Hush; Hush Hush",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "179",
    "artist": "Vanessa Amorosi",
    "title": "This Is Who I Am",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "180",
    "artist": "Vitamin C",
    "title": "Graduation (Friends Forever)",
    "year": 2000,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "181",
    "artist": "Wes Carr",
    "title": "Feels Like Woah",
    "year": 2008,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "182",
    "artist": "Wolfmother",
    "title": "New Moon Rising",
    "year": 2009,
    "game": "SingStar Chart Hits"
  },
  {
    "id": "183",
    "artist": "Alan Jackson",
    "title": "Chattahoochee",
    "year": 1993,
    "game": "SingStar Country"
  },
  {
    "id": "184",
    "artist": "Alan Jackson",
    "title": "Good Time",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "185",
    "artist": "Big & Rich",
    "title": "Save a Horse (Ride a Cowboy)",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "186",
    "artist": "Blake Shelton",
    "title": "Home",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "187",
    "artist": "Brad Paisley",
    "title": "Online",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "188",
    "artist": "Brooks & Dunn",
    "title": "Boot Scootin' Boogie",
    "year": 1992,
    "game": "SingStar Country"
  },
  {
    "id": "189",
    "artist": "Brooks & Dunn (with Reba McEntire)",
    "title": "If You See Him/If You See Her",
    "year": 1998,
    "game": "SingStar Country"
  },
  {
    "id": "190",
    "artist": "Bucky Covington",
    "title": "It's Good To Be Us",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "191",
    "artist": "Faith Hill",
    "title": "Red Umbrella",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "192",
    "artist": "Gretchen Wilson",
    "title": "Redneck Woman",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "193",
    "artist": "Jessica Simpson",
    "title": "Come On Over",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "194",
    "artist": "Jewel",
    "title": "Stronger Woman",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "195",
    "artist": "Johnny Cash",
    "title": "A Boy Named Sue",
    "year": 1969,
    "game": "SingStar Country"
  },
  {
    "id": "196",
    "artist": "Johnny Cash",
    "title": "I Walk the Line",
    "year": 1956,
    "game": "SingStar Country"
  },
  {
    "id": "197",
    "artist": "Josh Turner",
    "title": "Another Try",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "198",
    "artist": "Keith Urban",
    "title": "Days Go By",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "199",
    "artist": "Kellie Pickler",
    "title": "Red High Heels",
    "year": 2006,
    "game": "SingStar Country"
  },
  {
    "id": "200",
    "artist": "Kenny Chesney",
    "title": "Big Star",
    "year": 2003,
    "game": "SingStar Country"
  },
  {
    "id": "201",
    "artist": "Lady Antebellum",
    "title": "Love Don't Live Here",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "202",
    "artist": "Martina McBride",
    "title": "A Broken Wing",
    "year": 1997,
    "game": "SingStar Country"
  },
  {
    "id": "203",
    "artist": "Miranda Lambert",
    "title": "Kerosene",
    "year": 2005,
    "game": "SingStar Country"
  },
  {
    "id": "204",
    "artist": "Montgomery Gentry",
    "title": "My Town",
    "year": 2002,
    "game": "SingStar Country"
  },
  {
    "id": "205",
    "artist": "Montgomery Gentry",
    "title": "What Do Ya Think About That",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "206",
    "artist": "Rascal Flatts",
    "title": "Bless the Broken Road",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "207",
    "artist": "Sara Evans",
    "title": "Born to Fly",
    "year": 2000,
    "game": "SingStar Country"
  },
  {
    "id": "208",
    "artist": "Taylor Swift",
    "title": "Our Song",
    "year": 2007,
    "game": "SingStar Country"
  },
  {
    "id": "209",
    "artist": "Terri Clark",
    "title": "Girls Lie Too",
    "year": 2004,
    "game": "SingStar Country"
  },
  {
    "id": "210",
    "artist": "Trace Adkins",
    "title": "Honky Tonk Badonkadonk",
    "year": 2005,
    "game": "SingStar Country"
  },
  {
    "id": "211",
    "artist": "Trace Adkins",
    "title": "You're Gonna Miss This",
    "year": 2008,
    "game": "SingStar Country"
  },
  {
    "id": "212",
    "artist": "Willie Nelson",
    "title": "Pancho and Lefty",
    "year": 1983,
    "game": "SingStar Country"
  },
  {
    "id": "213",
    "artist": "Annie",
    "title": "I Know UR Girlfriend Hates Me",
    "year": 2005,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "214",
    "artist": "Avril Lavigne",
    "title": "When You're Gone",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "215",
    "artist": "Calvin Harris",
    "title": "Acceptable in the 80s",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "216",
    "artist": "Colbie Caillat",
    "title": "Bubbly",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "217",
    "artist": "Delta Goodrem",
    "title": "You Will Only Break My Heart",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "218",
    "artist": "Fall Out Boy",
    "title": "Thnks fr th Mmrs",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "219",
    "artist": "Fergie",
    "title": "Clumsy",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "220",
    "artist": "Finger Eleven",
    "title": "Paralyzer",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "221",
    "artist": "The Fray",
    "title": "How to Save a Life",
    "year": 2005,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "222",
    "artist": "Gabriella Cilmi",
    "title": "Sweet About Me",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "223",
    "artist": "Lily Allen",
    "title": "LDN",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "224",
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "225",
    "artist": "Mika",
    "title": "Grace Kelly",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "226",
    "artist": "Mika",
    "title": "Love Today",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "227",
    "artist": "My Chemical Romance",
    "title": "Teenagers",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "228",
    "artist": "Nelly Furtado",
    "title": "All Good Things (Come to an End)",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "229",
    "artist": "One Night Only",
    "title": "Just for Tonight",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "230",
    "artist": "OneRepublic",
    "title": "Stop and Stare",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "231",
    "artist": "Operator Please",
    "title": "Just a Song About Ping Pong",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "232",
    "artist": "The Potbelleez",
    "title": "Don't Hold Back",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "233",
    "artist": "Powderfinger",
    "title": "Lost and Running",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "234",
    "artist": "Ricki-Lee",
    "title": "Can't Sing a Different Song",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "235",
    "artist": "Sam Sparro",
    "title": "Black and Gold",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "236",
    "artist": "Sean Kingston",
    "title": "Beautiful Girls",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "237",
    "artist": "Sneaky Sound System",
    "title": "Pictures",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "238",
    "artist": "Snow Patrol",
    "title": "Chasing Cars",
    "year": 2006,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "239",
    "artist": "The Ting Tings",
    "title": "Great DJ",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "240",
    "artist": "The Ting Tings",
    "title": "That's Not My Name",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "241",
    "artist": "Vanessa Amorosi",
    "title": "Perfect",
    "year": 2008,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "242",
    "artist": "will.i.am",
    "title": "I Got It From My Mama",
    "year": 2007,
    "game": "SingStar Hottest Hits"
  },
  {
    "id": "243",
    "artist": "Aretha Franklin",
    "title": "Respect",
    "year": 1967,
    "game": "SingStar Legends"
  },
  {
    "id": "244",
    "artist": "Barry White",
    "title": "You're the First the Last My Everything",
    "year": 1974,
    "game": "SingStar Legends"
  },
  {
    "id": "245",
    "artist": "Black Sabbath",
    "title": "Paranoid",
    "year": 1970,
    "game": "SingStar Legends"
  },
  {
    "id": "246",
    "artist": "Blur",
    "title": "Parklife",
    "year": 1994,
    "game": "SingStar Legends"
  },
  {
    "id": "247",
    "artist": "David Bowie",
    "title": "Life on Mars?",
    "year": 1971,
    "game": "SingStar Legends"
  },
  {
    "id": "248",
    "artist": "Depeche Mode",
    "title": "Enjoy the Silence",
    "year": 1990,
    "game": "SingStar Legends"
  },
  {
    "id": "249",
    "artist": "Dusty Springfield",
    "title": "Son of a Preacher Man",
    "year": 1968,
    "game": "SingStar Legends"
  },
  {
    "id": "250",
    "artist": "Ella Fitzgerald and Louis Armstrong",
    "title": "Let's Call the Whole Thing Off",
    "year": 1937,
    "game": "SingStar Legends"
  },
  {
    "id": "251",
    "artist": "Elton John",
    "title": "Rocket Man",
    "year": 1972,
    "game": "SingStar Legends"
  },
  {
    "id": "252",
    "artist": "Elvis Presley",
    "title": "Blue Suede Shoes",
    "year": 1956,
    "game": "SingStar Legends"
  },
  {
    "id": "253",
    "artist": "Jackie Wilson",
    "title": "Reet Petite",
    "year": 1957,
    "game": "SingStar Legends"
  },
  {
    "id": "254",
    "artist": "The Jackson 5",
    "title": "I Want You Back",
    "year": 1969,
    "game": "SingStar Legends"
  },
  {
    "id": "255",
    "artist": "John Lennon",
    "title": "Imagine",
    "year": 1971,
    "game": "SingStar Legends"
  },
  {
    "id": "256",
    "artist": "Johnny Cash",
    "title": "Ring of Fire",
    "year": 1963,
    "game": "SingStar Legends"
  },
  {
    "id": "257",
    "artist": "Lynyrd Skynyrd",
    "title": "Sweet Home Alabama",
    "year": 1974,
    "game": "SingStar Legends"
  },
  {
    "id": "258",
    "artist": "Madonna",
    "title": "Papa Don't Preach",
    "year": 1986,
    "game": "SingStar Legends"
  },
  {
    "id": "259",
    "artist": "Marvin Gaye",
    "title": "I Heard It Through the Grapevine",
    "year": 1968,
    "game": "SingStar Legends"
  },
  {
    "id": "260",
    "artist": "The Monkees",
    "title": "Daydream Believer",
    "year": 1967,
    "game": "SingStar Legends"
  },
  {
    "id": "261",
    "artist": "Nirvana",
    "title": "Smells Like Teen Spirit",
    "year": 1991,
    "game": "SingStar Legends"
  },
  {
    "id": "262",
    "artist": "Patsy Cline",
    "title": "Crazy",
    "year": 1961,
    "game": "SingStar Legends"
  },
  {
    "id": "263",
    "artist": "Pet Shop Boys",
    "title": "Always on My Mind",
    "year": 1987,
    "game": "SingStar Legends"
  },
  {
    "id": "264",
    "artist": "The Police",
    "title": "Roxanne",
    "year": 1978,
    "game": "SingStar Legends"
  },
  {
    "id": "265",
    "artist": "The Righteous Brothers",
    "title": "Unchained Melody",
    "year": 1965,
    "game": "SingStar Legends"
  },
  {
    "id": "266",
    "artist": "The Rolling Stones",
    "title": "Sympathy for the Devil",
    "year": 1968,
    "game": "SingStar Legends"
  },
  {
    "id": "267",
    "artist": "Roxy Music",
    "title": "Love Is the Drug",
    "year": 1975,
    "game": "SingStar Legends"
  },
  {
    "id": "268",
    "artist": "Sam Cooke",
    "title": "Wonderful World",
    "year": 1960,
    "game": "SingStar Legends"
  },
  {
    "id": "269",
    "artist": "The Smiths",
    "title": "This Charming Man",
    "year": 1983,
    "game": "SingStar Legends"
  },
  {
    "id": "270",
    "artist": "Tina Turner",
    "title": "What's Love Got to Do with It?",
    "year": 1984,
    "game": "SingStar Legends"
  },
  {
    "id": "271",
    "artist": "U2",
    "title": "Vertigo",
    "year": 2004,
    "game": "SingStar Legends"
  },
  {
    "id": "272",
    "artist": "Whitney Houston",
    "title": "The Greatest Love of All",
    "year": 1985,
    "game": "SingStar Legends"
  },
  {
    "id": "273",
    "artist": "CC Cowboys",
    "title": "Tigergutt",
    "year": 1990,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "274",
    "artist": "CC Cowboys",
    "title": "Vill, vakker og våt",
    "year": 1993,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "275",
    "artist": "CC Cowboys",
    "title": "Harry",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "276",
    "artist": "D.D.E.",
    "title": "Rompa mi",
    "year": 1992,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "277",
    "artist": "D.D.E.",
    "title": "Det går likar no",
    "year": 1996,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "278",
    "artist": "D.D.E.",
    "title": "E6",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "279",
    "artist": "deLillos",
    "title": "Neste sommer",
    "year": 1986,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "280",
    "artist": "deLillos",
    "title": "Smak av honning",
    "year": 1991,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "281",
    "artist": "deLillos",
    "title": "Min beibi dro av sted",
    "year": 1984,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "282",
    "artist": "deLillos",
    "title": "Ut",
    "year": 1988,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "283",
    "artist": "Jahn Teigen",
    "title": "Min første kjærlighet",
    "year": 1972,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "284",
    "artist": "Jahn Teigen",
    "title": "Det vakreste som fins",
    "year": 1982,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "285",
    "artist": "Jahn Teigen",
    "title": "Optimist",
    "year": 1980,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "286",
    "artist": "Postgirobygget",
    "title": "Sløv uten dop",
    "year": 1999,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "287",
    "artist": "Postgirobygget",
    "title": "En solskinnsdag",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "288",
    "artist": "Postgirobygget",
    "title": "23 tommer",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "289",
    "artist": "Postgirobygget",
    "title": "Idyll",
    "year": 2002,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "290",
    "artist": "Trang Fødsel",
    "title": "Kursiv",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "291",
    "artist": "Trang Fødsel",
    "title": "Livet det er helt ålreit",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "292",
    "artist": "Trang Fødsel",
    "title": "Drømmedame",
    "year": 1983,
    "game": "SingStar Norsk på Norsk"
  },
  {
    "id": "293",
    "artist": "a-ha",
    "title": "The Sun Always Shines on TV",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "294",
    "artist": "Annie",
    "title": "Heartbeat",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "295",
    "artist": "Arne Schau Knudsen",
    "title": "Gal av lengsel",
    "year": 1988,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "296",
    "artist": "Avril Lavigne",
    "title": "Sk8er Boi",
    "year": 2002,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "297",
    "artist": "Beyoncé",
    "title": "Crazy in Love",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "298",
    "artist": "Bigbang",
    "title": "Girl in Oslo",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "299",
    "artist": "The Clash",
    "title": "Should I Stay or Should I Go?",
    "year": 1982,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "300",
    "artist": "David",
    "title": "Wild At Heart",
    "year": 1984,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "301",
    "artist": "Dollie",
    "title": "Lenge Leve Livet",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "302",
    "artist": "DumDum Boys",
    "title": "Splitter Pine",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "303",
    "artist": "Hoobastank",
    "title": "The Reason",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "304",
    "artist": "Jan Eggum",
    "title": "På an igjen",
    "year": 1977,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "305",
    "artist": "Joss Stone",
    "title": "Super Duper Love (Are You Digging On Me?)",
    "year": 2004,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "306",
    "artist": "Kaptein Sabeltann",
    "title": "Vi seiler vår egen sjø",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "307",
    "artist": "The Kids",
    "title": "Forelska i lærer'n",
    "year": 1980,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "308",
    "artist": "Kine",
    "title": "In the air tonight",
    "year": 2001,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "309",
    "artist": "Kylie Minogue",
    "title": "In Your Eyes",
    "year": 2002,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "310",
    "artist": "Manfred Mann",
    "title": "Do Wah Diddy",
    "year": 1964,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "311",
    "artist": "Maria Mena",
    "title": "My Lullaby",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "312",
    "artist": "The Monroes",
    "title": "Sunday people",
    "year": 1982,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "313",
    "artist": "Opus X",
    "title": "Loving you girl",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "314",
    "artist": "Philip & Sandra",
    "title": "Sommerflørt",
    "year": 1985,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "315",
    "artist": "Robbie Williams",
    "title": "Let Me Entertain You",
    "year": 1998,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "316",
    "artist": "Rune Rudberg",
    "title": "Ut mot havet",
    "year": 1980,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "317",
    "artist": "The September When",
    "title": "Cries like a baby",
    "year": 1990,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "318",
    "artist": "Sister Sledge",
    "title": "We are family",
    "year": 1979,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "319",
    "artist": "Sputnik",
    "title": "Lukk opp din hjertedør",
    "year": 1995,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "320",
    "artist": "Steppenwolf",
    "title": "Born to be Wild",
    "year": 1968,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "321",
    "artist": "Tine",
    "title": "Vil Ha Deg",
    "year": 2003,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "322",
    "artist": "Tom Jones",
    "title": "It's not unusual",
    "year": 1965,
    "game": "SingStar Norske Hits"
  },
  {
    "id": "323",
    "artist": "Alicia Keys",
    "title": "Fallin'",
    "year": 2001,
    "game": "SingStar Party"
  },
  {
    "id": "324",
    "artist": "Ashford & Simpson",
    "title": "Solid",
    "year": 1984,
    "game": "SingStar Party"
  },
  {
    "id": "325",
    "artist": "The Beautiful South",
    "title": "A Little Time",
    "year": 1990,
    "game": "SingStar Party"
  },
  {
    "id": "326",
    "artist": "Bill Withers",
    "title": "Ain't No Sunshine",
    "year": 1971,
    "game": "SingStar Party"
  },
  {
    "id": "327",
    "artist": "Blu Cantrell",
    "title": "Hit 'Em Up Style (Oops!)",
    "year": 2001,
    "game": "SingStar Party"
  },
  {
    "id": "328",
    "artist": "Bob Marley",
    "title": "No Woman No Cry",
    "year": 1974,
    "game": "SingStar Party"
  },
  {
    "id": "329",
    "artist": "Buggles",
    "title": "Video Killed the Radio Star",
    "year": 1979,
    "game": "SingStar Party"
  },
  {
    "id": "330",
    "artist": "Busted",
    "title": "Year 3000",
    "year": 2002,
    "game": "SingStar Party"
  },
  {
    "id": "331",
    "artist": "Cyndi Lauper",
    "title": "Girls Just Wanna Have Fun",
    "year": 1983,
    "game": "SingStar Party"
  },
  {
    "id": "332",
    "artist": "Destiny's Child",
    "title": "Survivor",
    "year": 2001,
    "game": "SingStar Party"
  },
  {
    "id": "333",
    "artist": "Dido",
    "title": "White Flag",
    "year": 2003,
    "game": "SingStar Party"
  },
  {
    "id": "334",
    "artist": "Duran Duran",
    "title": "Hungry Like the Wolf",
    "year": 1982,
    "game": "SingStar Party"
  },
  {
    "id": "335",
    "artist": "Elton John & Kiki Dee",
    "title": "Don't Go Breaking My Heart",
    "year": 1976,
    "game": "SingStar Party"
  },
  {
    "id": "336",
    "artist": "Elvis Presley",
    "title": "Way Down",
    "year": 1977,
    "game": "SingStar Party"
  },
  {
    "id": "337",
    "artist": "The Foundations",
    "title": "Build Me Up Buttercup",
    "year": 1968,
    "game": "SingStar Party"
  },
  {
    "id": "338",
    "artist": "Franz Ferdinand",
    "title": "Take Me Out",
    "year": 2004,
    "game": "SingStar Party"
  },
  {
    "id": "339",
    "artist": "George Michael",
    "title": "Faith",
    "year": 1987,
    "game": "SingStar Party"
  },
  {
    "id": "340",
    "artist": "Jamiroquai",
    "title": "Cosmic Girl",
    "year": 1996,
    "game": "SingStar Party"
  },
  {
    "id": "341",
    "artist": "Javine",
    "title": "Real Things",
    "year": 2004,
    "game": "SingStar Party"
  },
  {
    "id": "342",
    "artist": "Kylie Minogue",
    "title": "I Should Be So Lucky",
    "year": 1988,
    "game": "SingStar Party"
  },
  {
    "id": "343",
    "artist": "Little Richard",
    "title": "Tutti Frutti",
    "year": 1955,
    "game": "SingStar Party"
  },
  {
    "id": "344",
    "artist": "Maroon 5",
    "title": "This Love",
    "year": 2004,
    "game": "SingStar Party"
  },
  {
    "id": "345",
    "artist": "Natasha Bedingfield",
    "title": "Single",
    "year": 2004,
    "game": "SingStar Party"
  },
  {
    "id": "346",
    "artist": "Pink",
    "title": "Just Like a Pill",
    "year": 2001,
    "game": "SingStar Party"
  },
  {
    "id": "347",
    "artist": "The Police",
    "title": "Every Breath You Take",
    "year": 1983,
    "game": "SingStar Party"
  },
  {
    "id": "348",
    "artist": "Scissor Sisters",
    "title": "Take Your Mama",
    "year": 2004,
    "game": "SingStar Party"
  },
  {
    "id": "349",
    "artist": "Sonny & Cher",
    "title": "I Got You Babe",
    "year": 1965,
    "game": "SingStar Party"
  },
  {
    "id": "350",
    "artist": "Spandau Ballet",
    "title": "Gold",
    "year": 1983,
    "game": "SingStar Party"
  },
  {
    "id": "351",
    "artist": "Spice Girls",
    "title": "Who Do You Think You Are",
    "year": 1996,
    "game": "SingStar Party"
  },
  {
    "id": "352",
    "artist": "Tiffany",
    "title": "I Think We're Alone Now",
    "year": 1987,
    "game": "SingStar Party"
  },
  {
    "id": "353",
    "artist": "Ace of Base",
    "title": "Life Is A Flower",
    "year": 1998,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "354",
    "artist": "All Saints",
    "title": "Black Coffee",
    "year": 2000,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "355",
    "artist": "Andreas Johnson",
    "title": "Glorious",
    "year": 1999,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "356",
    "artist": "Aqua",
    "title": "Cartoon Heroes",
    "year": 2000,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "357",
    "artist": "Basshunter",
    "title": "Boten Anna",
    "year": 2006,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "358",
    "artist": "Britney Spears",
    "title": "...Baby One More Time",
    "year": 1998,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "359",
    "artist": "Cardigans",
    "title": "Erase & Rewind",
    "year": 1999,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "360",
    "artist": "Christian Walz",
    "title": "Wonderchild",
    "year": 2001,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "361",
    "artist": "Daniel Powter",
    "title": "Bad Day",
    "year": 2005,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "362",
    "artist": "Drömhus",
    "title": "Vill ha dej",
    "year": 2005,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "363",
    "artist": "Eagle-Eye Cherry",
    "title": "Save Tonight",
    "year": 1997,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "364",
    "artist": "Infernal",
    "title": "I Won't Be Crying",
    "year": 2005,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "365",
    "artist": "Jamelia",
    "title": "Beware Of The Dog",
    "year": 2004,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "366",
    "artist": "Jennifer Lopez",
    "title": "Jenny From The Block",
    "year": 2002,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "367",
    "artist": "Johnny Deluxe",
    "title": "Drenge Som Mig",
    "year": 2005,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "368",
    "artist": "Junior Senior",
    "title": "Take My Time",
    "year": 2003,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "369",
    "artist": "Maria Mena",
    "title": "You're the Only One",
    "year": 2004,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "370",
    "artist": "Nelly Furtado feat. Timbaland",
    "title": "Promiscuous",
    "year": 2006,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "371",
    "artist": "Norah Jones",
    "title": "Don't Know Why",
    "year": 2002,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "372",
    "artist": "Orson",
    "title": "Bright Idea",
    "year": 2006,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "373",
    "artist": "Razorlight",
    "title": "Golden Touch",
    "year": 2005,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "374",
    "artist": "Rihanna",
    "title": "SOS",
    "year": 2006,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "375",
    "artist": "Roxette",
    "title": "I Wish I Could Fly",
    "year": 1999,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "376",
    "artist": "Safri Duo",
    "title": "Sweet Freedom",
    "year": 2001,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "377",
    "artist": "Sanne Salomonsen",
    "title": "You've Never Been Loved Before",
    "year": 2003,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "378",
    "artist": "Scissor Sisters",
    "title": "I Don't Feel Like Dancin'",
    "year": 2006,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "379",
    "artist": "Sugababes",
    "title": "Push The Button",
    "year": 2005,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "380",
    "artist": "Titiyo",
    "title": "Come Along",
    "year": 2001,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "381",
    "artist": "Travis",
    "title": "Sing",
    "year": 2001,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "382",
    "artist": "U2",
    "title": "Beautiful Day",
    "year": 2000,
    "game": "SingStar Pop Hits"
  },
  {
    "id": "383",
    "artist": "3 Doors Down",
    "title": "When I'm Gone",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "384",
    "artist": "Ashlee Simpson",
    "title": "Boyfriend",
    "year": 2005,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "385",
    "artist": "Avril Lavigne",
    "title": "My Happy Ending",
    "year": 2004,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "386",
    "artist": "Boys Like Girls",
    "title": "The Great Escape",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "387",
    "artist": "Cartel",
    "title": "Lose It",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "388",
    "artist": "Colbie Caillat",
    "title": "Bubbly",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "389",
    "artist": "Dixie Chicks",
    "title": "Not Ready to Make Nice",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "390",
    "artist": "Duran Duran",
    "title": "Ordinary World",
    "year": 1992,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "391",
    "artist": "Evanescence",
    "title": "Bring Me To Life",
    "year": 2003,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "392",
    "artist": "Fall Out Boy",
    "title": "Thnks fr th Mmrs",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "393",
    "artist": "Fergie",
    "title": "Big Girls Don't Cry",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "394",
    "artist": "Gwen Stefani feat. Akon",
    "title": "The Sweet Escape",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "395",
    "artist": "The Hives",
    "title": "Tick Tick Boom",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "396",
    "artist": "Jennifer Lopez",
    "title": "Jenny From the Block",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "397",
    "artist": "Lifehouse",
    "title": "First Time",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "398",
    "artist": "Lily Allen",
    "title": "Littlest Things",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "399",
    "artist": "Lloyd",
    "title": "Get it Shawty",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "400",
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "401",
    "artist": "Matchbox Twenty",
    "title": "How Far We've Come",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "402",
    "artist": "Michelle Branch",
    "title": "Breathe",
    "year": 2003,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "403",
    "artist": "Nelly Furtado",
    "title": "Promiscuous",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "404",
    "artist": "Norah Jones",
    "title": "Don't Know Why",
    "year": 2002,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "405",
    "artist": "The Outfield",
    "title": "Your Love",
    "year": 1985,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "406",
    "artist": "Peter Bjorn and John",
    "title": "Young Folks",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "407",
    "artist": "P!nk",
    "title": "Who Knew",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "408",
    "artist": "Plain White T's",
    "title": "Hey There Delilah",
    "year": 2006,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "409",
    "artist": "Rihanna",
    "title": "Umbrella",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "410",
    "artist": "Santana feat. Chad Kroeger",
    "title": "Into The Night",
    "year": 2007,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "411",
    "artist": "Steriogram",
    "title": "Walkie Talkie Man",
    "year": 2004,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "412",
    "artist": "Sum 41",
    "title": "Fat Lip",
    "year": 2001,
    "game": "SingStar Pop Vol 2"
  },
  {
    "id": "413",
    "artist": "Annie",
    "title": "Heartbeat",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "414",
    "artist": "Ashlee Simpson",
    "title": "Pieces of Me",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "415",
    "artist": "Avril Lavigne",
    "title": "Sk8er Boi",
    "year": 2002,
    "game": "SingStar Pop"
  },
  {
    "id": "416",
    "artist": "Beyoncé",
    "title": "Crazy in Love",
    "year": 2003,
    "game": "SingStar Pop"
  },
  {
    "id": "417",
    "artist": "Black Eyed Peas",
    "title": "Shut Up",
    "year": 2003,
    "game": "SingStar Pop"
  },
  {
    "id": "418",
    "artist": "Blink-182",
    "title": "What's My Age Again?",
    "year": 1999,
    "game": "SingStar Pop"
  },
  {
    "id": "419",
    "artist": "The Clash",
    "title": "Should I Stay or Should I Go",
    "year": 1982,
    "game": "SingStar Pop"
  },
  {
    "id": "420",
    "artist": "The Dandy Warhols",
    "title": "Bohemian Like You",
    "year": 2000,
    "game": "SingStar Pop"
  },
  {
    "id": "421",
    "artist": "Eric B. & Rakim",
    "title": "Paid in Full",
    "year": 1987,
    "game": "SingStar Pop"
  },
  {
    "id": "422",
    "artist": "Fountains of Wayne",
    "title": "Stacy's Mom",
    "year": 2003,
    "game": "SingStar Pop"
  },
  {
    "id": "423",
    "artist": "Girls Aloud",
    "title": "Love Machine",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "424",
    "artist": "Good Charlotte",
    "title": "I Just Wanna Live",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "425",
    "artist": "The Hives",
    "title": "Main Offender",
    "year": 2000,
    "game": "SingStar Pop"
  },
  {
    "id": "426",
    "artist": "Hoobastank",
    "title": "The Reason",
    "year": 2003,
    "game": "SingStar Pop"
  },
  {
    "id": "427",
    "artist": "Jamelia",
    "title": "Stop",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "428",
    "artist": "Joss Stone",
    "title": "Super Duper Love (Are You Diggin' on Me)",
    "year": 2003,
    "game": "SingStar Pop"
  },
  {
    "id": "429",
    "artist": "Keane",
    "title": "Somewhere Only We Know",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "430",
    "artist": "Kylie Minogue",
    "title": "In Your Eyes",
    "year": 2002,
    "game": "SingStar Pop"
  },
  {
    "id": "431",
    "artist": "Manfred Mann",
    "title": "Do Wah Diddy Diddy",
    "year": 1964,
    "game": "SingStar Pop"
  },
  {
    "id": "432",
    "artist": "Marilyn Manson",
    "title": "Personal Jesus",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "433",
    "artist": "McFly",
    "title": "Obviously",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "434",
    "artist": "OutKast",
    "title": "Roses",
    "year": 2003,
    "game": "SingStar Pop"
  },
  {
    "id": "435",
    "artist": "Robbie Williams",
    "title": "Let Me Entertain You",
    "year": 1998,
    "game": "SingStar Pop"
  },
  {
    "id": "436",
    "artist": "Robbie Williams and Kylie Minogue",
    "title": "Kids",
    "year": 2000,
    "game": "SingStar Pop"
  },
  {
    "id": "437",
    "artist": "Ronan Keating feat. Yusuf Islam",
    "title": "Father and Son",
    "year": 2004,
    "game": "SingStar Pop"
  },
  {
    "id": "438",
    "artist": "Sister Sledge",
    "title": "We Are Family",
    "year": 1979,
    "game": "SingStar Pop"
  },
  {
    "id": "439",
    "artist": "Steppenwolf",
    "title": "Born To Be Wild",
    "year": 1968,
    "game": "SingStar Pop"
  },
  {
    "id": "440",
    "artist": "Tom Jones",
    "title": "It's Not Unusual",
    "year": 1965,
    "game": "SingStar Pop"
  },
  {
    "id": "441",
    "artist": "Queen",
    "title": "Another One Bites The Dust",
    "year": 1980,
    "game": "SingStar Queen"
  },
  {
    "id": "442",
    "artist": "Queen",
    "title": "Bicycle Race",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "443",
    "artist": "Queen",
    "title": "Bohemian Rhapsody",
    "year": 1975,
    "game": "SingStar Queen"
  },
  {
    "id": "444",
    "artist": "Queen",
    "title": "Breakthru",
    "year": 1989,
    "game": "SingStar Queen"
  },
  {
    "id": "445",
    "artist": "Queen",
    "title": "Crazy Little Thing Called Love",
    "year": 1979,
    "game": "SingStar Queen"
  },
  {
    "id": "446",
    "artist": "Queen",
    "title": "Don't Stop Me Now",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "447",
    "artist": "Queen",
    "title": "Fat Bottomed Girls",
    "year": 1978,
    "game": "SingStar Queen"
  },
  {
    "id": "448",
    "artist": "Queen",
    "title": "I Want It All",
    "year": 1989,
    "game": "SingStar Queen"
  },
  {
    "id": "449",
    "artist": "Queen",
    "title": "I Want To Break Free",
    "year": 1984,
    "game": "SingStar Queen"
  },
  {
    "id": "450",
    "artist": "Queen",
    "title": "Innuendo",
    "year": 1991,
    "game": "SingStar Queen"
  },
  {
    "id": "451",
    "artist": "Queen",
    "title": "One Vision",
    "year": 1985,
    "game": "SingStar Queen"
  },
  {
    "id": "452",
    "artist": "Queen",
    "title": "Play The Game",
    "year": 1980,
    "game": "SingStar Queen"
  },
  {
    "id": "453",
    "artist": "Queen",
    "title": "Somebody To Love",
    "year": 1976,
    "game": "SingStar Queen"
  },
  {
    "id": "454",
    "artist": "Queen",
    "title": "These Are The Days Of Our Lives",
    "year": 1991,
    "game": "SingStar Queen"
  },
  {
    "id": "455",
    "artist": "Queen",
    "title": "Tie Your Mother Down",
    "year": 1976,
    "game": "SingStar Queen"
  },
  {
    "id": "456",
    "artist": "Queen & David Bowie",
    "title": "Under Pressure",
    "year": 1981,
    "game": "SingStar Queen"
  },
  {
    "id": "457",
    "artist": "Queen",
    "title": "We Are The Champions",
    "year": 1977,
    "game": "SingStar Queen"
  },
  {
    "id": "458",
    "artist": "Queen",
    "title": "We Will Rock You",
    "year": 1977,
    "game": "SingStar Queen"
  },
  {
    "id": "459",
    "artist": "Queen",
    "title": "Who Wants To Live Forever",
    "year": 1986,
    "game": "SingStar Queen"
  },
  {
    "id": "460",
    "artist": "Queen",
    "title": "You're My Best Friend",
    "year": 1975,
    "game": "SingStar Queen"
  },
  {
    "id": "461",
    "artist": "The 411",
    "title": "Dumb",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "462",
    "artist": "Amerie",
    "title": "1 Thing",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "463",
    "artist": "Amy Winehouse",
    "title": "Back To Black",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "464",
    "artist": "Anastacia",
    "title": "I'm Outta Love",
    "year": 2000,
    "game": "SingStar R&B"
  },
  {
    "id": "465",
    "artist": "Beverley Knight",
    "title": "Come As You Are",
    "year": 1998,
    "game": "SingStar R&B"
  },
  {
    "id": "466",
    "artist": "Black Eyed Peas",
    "title": "Pump It",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "467",
    "artist": "Chris Brown",
    "title": "Yo! (Excuse Me Miss)",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "468",
    "artist": "Christina Milian",
    "title": "AM To PM",
    "year": 2001,
    "game": "SingStar R&B"
  },
  {
    "id": "469",
    "artist": "Corinne Bailey Rae",
    "title": "I'd Like To",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "470",
    "artist": "Destiny's Child",
    "title": "Bootylicious",
    "year": 2001,
    "game": "SingStar R&B"
  },
  {
    "id": "471",
    "artist": "Diana Ross & The Supremes",
    "title": "Baby Love",
    "year": 1964,
    "game": "SingStar R&B"
  },
  {
    "id": "472",
    "artist": "DJ Jazzy Jeff & The Fresh Prince",
    "title": "Summertime",
    "year": 1991,
    "game": "SingStar R&B"
  },
  {
    "id": "473",
    "artist": "Edwin Starr",
    "title": "War",
    "year": 1970,
    "game": "SingStar R&B"
  },
  {
    "id": "474",
    "artist": "En Vogue",
    "title": "My Lovin' (You're Never Gonna Get It)",
    "year": 1992,
    "game": "SingStar R&B"
  },
  {
    "id": "475",
    "artist": "The Four Tops",
    "title": "I Can't Help Myself",
    "year": 1965,
    "game": "SingStar R&B"
  },
  {
    "id": "476",
    "artist": "Gwen Stefani",
    "title": "Hollaback Girl",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "477",
    "artist": "Inner City",
    "title": "Good Life",
    "year": 1988,
    "game": "SingStar R&B"
  },
  {
    "id": "478",
    "artist": "Jamelia",
    "title": "Thank You",
    "year": 2004,
    "game": "SingStar R&B"
  },
  {
    "id": "479",
    "artist": "Jamiroquai",
    "title": "Alright",
    "year": 1997,
    "game": "SingStar R&B"
  },
  {
    "id": "480",
    "artist": "Luther Vandross",
    "title": "Never Too Much",
    "year": 1981,
    "game": "SingStar R&B"
  },
  {
    "id": "481",
    "artist": "Mark Ronson feat. Daniel Merriweather",
    "title": "Stop Me",
    "year": 2007,
    "game": "SingStar R&B"
  },
  {
    "id": "482",
    "artist": "Martha Reeves & The Vandellas",
    "title": "Dancing In The Street",
    "year": 1964,
    "game": "SingStar R&B"
  },
  {
    "id": "483",
    "artist": "Marvin Gaye & Tammi Tarrell",
    "title": "Ain't No Mountain High Enough",
    "year": 1967,
    "game": "SingStar R&B"
  },
  {
    "id": "484",
    "artist": "OutKast",
    "title": "Idlewild Blue (Don'tchu Worry 'Bout Me)",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "485",
    "artist": "The Pussycat Dolls",
    "title": "Buttons",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "486",
    "artist": "Rihanna",
    "title": "We Ride",
    "year": 2006,
    "game": "SingStar R&B"
  },
  {
    "id": "487",
    "artist": "Salt'N'Pepa",
    "title": "Push It",
    "year": 1987,
    "game": "SingStar R&B"
  },
  {
    "id": "488",
    "artist": "Sugababes",
    "title": "Ugly",
    "year": 2005,
    "game": "SingStar R&B"
  },
  {
    "id": "489",
    "artist": "Whitney Houston",
    "title": "My Love Is Your Love",
    "year": 1998,
    "game": "SingStar R&B"
  },
  {
    "id": "490",
    "artist": "Womack & Womack",
    "title": "Teardrops",
    "year": 1988,
    "game": "SingStar R&B"
  },
  {
    "id": "491",
    "artist": "Air Supply",
    "title": "All Out Of Love",
    "year": 1980,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "492",
    "artist": "Alannah Myles",
    "title": "Black Velvet",
    "year": 1989,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "493",
    "artist": "Anastacia",
    "title": "Left Outside Alone",
    "year": 2004,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "494",
    "artist": "Avril Lavigne",
    "title": "I'm With You",
    "year": 2002,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "495",
    "artist": "Boston",
    "title": "More Than A Feeling",
    "year": 1976,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "496",
    "artist": "Boy Meets Girl",
    "title": "Waiting For A Star To Fall",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "497",
    "artist": "The Calling",
    "title": "Wherever You Will Go",
    "year": 2001,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "498",
    "artist": "Cutting Crew",
    "title": "(I Just) Died In Your Arms",
    "year": 1986,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "499",
    "artist": "Cyndi Lauper",
    "title": "Time After Time",
    "year": 1983,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "500",
    "artist": "Duran Duran",
    "title": "Ordinary World",
    "year": 1992,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "501",
    "artist": "Europe",
    "title": "Carrie",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "502",
    "artist": "Heart",
    "title": "Alone",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "503",
    "artist": "Jon Secada",
    "title": "Just Another Day (Without You)",
    "year": 1992,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "504",
    "artist": "Lone Star",
    "title": "Amazed",
    "year": 1999,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "505",
    "artist": "Marc Cohn",
    "title": "Walking In Memphis",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "506",
    "artist": "Meat Loaf",
    "title": "I'd Do Anything For Love (But I Won't Do That)",
    "year": 1993,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "507",
    "artist": "Mr Big",
    "title": "To Be With You",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "508",
    "artist": "Mr Mister",
    "title": "Broken Wings",
    "year": 1985,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "509",
    "artist": "Mr Mister",
    "title": "Kyrie",
    "year": 1985,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "510",
    "artist": "Nickelback",
    "title": "How You Remind Me",
    "year": 2001,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "511",
    "artist": "Nilsson",
    "title": "Without You",
    "year": 1971,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "512",
    "artist": "Poison",
    "title": "Every Rose Has Its Thorn",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "513",
    "artist": "Queen",
    "title": "The Show Must Go On",
    "year": 1991,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "514",
    "artist": "Roxette",
    "title": "It Must Have Been Love",
    "year": 1990,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "515",
    "artist": "Roxette",
    "title": "Listen To Your Heart",
    "year": 1988,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "516",
    "artist": "Starship",
    "title": "Nothing's Gonna Stop Us Now",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "517",
    "artist": "Sugababes",
    "title": "Too Lost In You",
    "year": 2003,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "518",
    "artist": "Tina Arena",
    "title": "Chains",
    "year": 1994,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "519",
    "artist": "Toto",
    "title": "Africa",
    "year": 1982,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "520",
    "artist": "T'Pau",
    "title": "China In Your Hand",
    "year": 1987,
    "game": "SingStar Rock Ballads"
  },
  {
    "id": "521",
    "artist": "Bloc Party",
    "title": "Banquet",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "522",
    "artist": "Blur",
    "title": "Song 2",
    "year": 1997,
    "game": "SingStar Rocks!"
  },
  {
    "id": "523",
    "artist": "Bowling For Soup",
    "title": "1985",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "524",
    "artist": "The Bravery",
    "title": "An Honest Mistake",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "525",
    "artist": "The Cardigans",
    "title": "My Favourite Game",
    "year": 1998,
    "game": "SingStar Rocks!"
  },
  {
    "id": "526",
    "artist": "Coldplay",
    "title": "Speed of Sound",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "527",
    "artist": "Deep Purple",
    "title": "Smoke On The Water",
    "year": 1972,
    "game": "SingStar Rocks!"
  },
  {
    "id": "528",
    "artist": "Franz Ferdinand",
    "title": "Do You Want To",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "529",
    "artist": "Gwen Stefani",
    "title": "What You Waiting For?",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "530",
    "artist": "Hard-Fi",
    "title": "Hard to Beat",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "531",
    "artist": "The Hives",
    "title": "Hate to Say I Told You So",
    "year": 2000,
    "game": "SingStar Rocks!"
  },
  {
    "id": "532",
    "artist": "Hole",
    "title": "Celebrity Skin",
    "year": 1998,
    "game": "SingStar Rocks!"
  },
  {
    "id": "533",
    "artist": "Jet",
    "title": "Are You Gonna Be My Girl?",
    "year": 2003,
    "game": "SingStar Rocks!"
  },
  {
    "id": "534",
    "artist": "Kasabian",
    "title": "Club Foot",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "535",
    "artist": "Keane",
    "title": "Everybody's Changing",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "536",
    "artist": "The Killers",
    "title": "Somebody Told Me",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "537",
    "artist": "Kings of Leon",
    "title": "The Bucket",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "538",
    "artist": "KT Tunstall",
    "title": "Black Horse And The Cherry Tree",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "539",
    "artist": "Maxïmo Park",
    "title": "Apply Some Pressure",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "540",
    "artist": "Nirvana",
    "title": "Come As You Are",
    "year": 1992,
    "game": "SingStar Rocks!"
  },
  {
    "id": "541",
    "artist": "The Offspring",
    "title": "Self Esteem",
    "year": 1994,
    "game": "SingStar Rocks!"
  },
  {
    "id": "542",
    "artist": "Queen",
    "title": "Don't Stop Me Now",
    "year": 1979,
    "game": "SingStar Rocks!"
  },
  {
    "id": "543",
    "artist": "Queens of the Stone Age",
    "title": "Go With The Flow",
    "year": 2002,
    "game": "SingStar Rocks!"
  },
  {
    "id": "544",
    "artist": "Razorlight",
    "title": "Somewhere Else",
    "year": 2006,
    "game": "SingStar Rocks!"
  },
  {
    "id": "545",
    "artist": "The Rolling Stones",
    "title": "Paint It Black",
    "year": 1966,
    "game": "SingStar Rocks!"
  },
  {
    "id": "546",
    "artist": "Scorpions",
    "title": "Wind Of Change",
    "year": 1990,
    "game": "SingStar Rocks!"
  },
  {
    "id": "547",
    "artist": "Snow Patrol",
    "title": "Run",
    "year": 2004,
    "game": "SingStar Rocks!"
  },
  {
    "id": "548",
    "artist": "Stereophonics",
    "title": "Dakota",
    "year": 2005,
    "game": "SingStar Rocks!"
  },
  {
    "id": "549",
    "artist": "Thin Lizzy",
    "title": "The Boys Are Back in Town",
    "year": 1976,
    "game": "SingStar Rocks!"
  },
  {
    "id": "550",
    "artist": "The Undertones",
    "title": "Teenage Kicks",
    "year": 1978,
    "game": "SingStar Rocks!"
  },
  {
    "id": "551",
    "artist": "101 Dalmatians",
    "title": "Cruella De Vil",
    "year": 1961,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "552",
    "artist": "Aladdin",
    "title": "A Whole New World",
    "year": 1992,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "553",
    "artist": "The Aristocats",
    "title": "Ev'rybody Wants To Be A Cat",
    "year": 1970,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "554",
    "artist": "Beauty And The Beast",
    "title": "Beauty And The Beast",
    "year": 1991,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "555",
    "artist": "Cinderella",
    "title": "Bibbidi-Bobbidi-Boo",
    "year": 1950,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "556",
    "artist": "Cinderella",
    "title": "The Work Song",
    "year": 1950,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "557",
    "artist": "The Jungle Book",
    "title": "Bare Necessities",
    "year": 1967,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "558",
    "artist": "The Jungle Book",
    "title": "I Wanna Be Like You",
    "year": 1967,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "559",
    "artist": "Lady and the Tramp",
    "title": "He's A Tramp",
    "year": 1955,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "560",
    "artist": "The Lion King",
    "title": "I Just Can't Wait To Be King",
    "year": 1994,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "561",
    "artist": "The Lion King",
    "title": "The Circle Of Life",
    "year": 1994,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "562",
    "artist": "The Little Mermaid",
    "title": "Kiss The Girl",
    "year": 1989,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "563",
    "artist": "The Little Mermaid",
    "title": "Under The Sea",
    "year": 1989,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "564",
    "artist": "Peter Pan",
    "title": "Following The Leader",
    "year": 1953,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "565",
    "artist": "Peter Pan",
    "title": "You Can Fly! You Can Fly! You Can Fly!",
    "year": 1953,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "566",
    "artist": "Sleeping Beauty",
    "title": "I Wonder",
    "year": 1959,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "567",
    "artist": "Sleeping Beauty",
    "title": "Once Upon A Dream",
    "year": 1959,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "568",
    "artist": "Tarzan",
    "title": "Son Of Man",
    "year": 1999,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "569",
    "artist": "Toy Story",
    "title": "You've Got A Friend In Me",
    "year": 1995,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "570",
    "artist": "Winnie The Pooh",
    "title": "Winnie The Pooh",
    "year": 1966,
    "game": "SingStar Singalong with Disney"
  },
  {
    "id": "571",
    "artist": "Afro-dite",
    "title": "Never Let It Go",
    "year": 2003,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "572",
    "artist": "Anna Book",
    "title": "ABC",
    "year": 1986,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "573",
    "artist": "Arvingarna",
    "title": "Eloise",
    "year": 1993,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "574",
    "artist": "Attack",
    "title": "Ooa hela natten",
    "year": 2005,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "575",
    "artist": "Barbados",
    "title": "Kom hem",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "576",
    "artist": "Beyoncé",
    "title": "Crazy in Love",
    "year": 2003,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "577",
    "artist": "Blink-182",
    "title": "What's My Age Again?",
    "year": 1999,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "578",
    "artist": "Carola",
    "title": "Fångad av en stormvind",
    "year": 1991,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "579",
    "artist": "Christian Walz",
    "title": "Never Be Afraid Again",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "580",
    "artist": "The Clash",
    "title": "Should I Stay or Should I Go",
    "year": 1982,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "581",
    "artist": "Daniel Lindström",
    "title": "Coming True",
    "year": 2005,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "582",
    "artist": "Darin",
    "title": "Money for Nothing",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "583",
    "artist": "Friends",
    "title": "Lyssna Till Ditt Hjärta",
    "year": 2001,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "584",
    "artist": "Good Charlotte",
    "title": "I Just Wanna Live",
    "year": 2004,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "585",
    "artist": "The Hives",
    "title": "Main Offender",
    "year": 2000,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "586",
    "artist": "Jimmy Jansson",
    "title": "Vi kan gunga",
    "year": 2006,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "587",
    "artist": "Kylie Minogue",
    "title": "In Your Eyes",
    "year": 2002,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "588",
    "artist": "Lena Philipsson",
    "title": "Det gör ont",
    "year": 2004,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "589",
    "artist": "Lisa Nilsson",
    "title": "Himlen runt hörnet",
    "year": 1995,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "590",
    "artist": "Magnus Uggla",
    "title": "Värsta grymma tjejen",
    "year": 1982,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "591",
    "artist": "Manfred Mann",
    "title": "Do Wah Diddy Diddy",
    "year": 1964,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "592",
    "artist": "Mauro Scocco",
    "title": "Sarah",
    "year": 1999,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "593",
    "artist": "OutKast",
    "title": "Roses",
    "year": 2004,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "594",
    "artist": "Patrik Isaksson",
    "title": "Hos dig är jag underbar",
    "year": 2000,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "595",
    "artist": "Robbie Williams",
    "title": "Let Me Entertain You",
    "year": 1998,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "596",
    "artist": "Robbie Williams and Kylie Minogue",
    "title": "Kids",
    "year": 2000,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "597",
    "artist": "Robyn",
    "title": "Show Me Love",
    "year": 1997,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "598",
    "artist": "Steppenwolf",
    "title": "Born To Be Wild",
    "year": 1968,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "599",
    "artist": "Tom Jones",
    "title": "It's Not Unusual",
    "year": 1965,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "600",
    "artist": "Uno Svenningsson",
    "title": "Under ytan",
    "year": 1994,
    "game": "SingStar Svenska Hits"
  },
  {
    "id": "601",
    "artist": "A-ha",
    "title": "Take On Me",
    "year": 1985,
    "game": "SingStar"
  },
  {
    "id": "602",
    "artist": "Atomic Kitten",
    "title": "Eternal Flame",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "603",
    "artist": "Avril Lavigne",
    "title": "Complicated",
    "year": 2002,
    "game": "SingStar"
  },
  {
    "id": "604",
    "artist": "Blondie",
    "title": "Heart of Glass",
    "year": 1978,
    "game": "SingStar"
  },
  {
    "id": "605",
    "artist": "Blue",
    "title": "One Love",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "606",
    "artist": "Busted",
    "title": "Crashed the Wedding",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "607",
    "artist": "Carl Douglas",
    "title": "Kung Fu Fighting",
    "year": 1974,
    "game": "SingStar"
  },
  {
    "id": "608",
    "artist": "Daniel Bedingfield",
    "title": "If You're Not the One",
    "year": 2002,
    "game": "SingStar"
  },
  {
    "id": "609",
    "artist": "The Darkness",
    "title": "I Believe in a Thing Called Love",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "610",
    "artist": "Deee-Lite",
    "title": "Groove Is in the Heart",
    "year": 1990,
    "game": "SingStar"
  },
  {
    "id": "611",
    "artist": "Dido",
    "title": "Thank You",
    "year": 1998,
    "game": "SingStar"
  },
  {
    "id": "612",
    "artist": "Elvis Presley",
    "title": "Suspicious Minds",
    "year": 1969,
    "game": "SingStar"
  },
  {
    "id": "613",
    "artist": "George Michael",
    "title": "Careless Whisper",
    "year": 1984,
    "game": "SingStar"
  },
  {
    "id": "614",
    "artist": "Good Charlotte",
    "title": "Girls & Boys",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "615",
    "artist": "Jamelia",
    "title": "Superstar",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "616",
    "artist": "Lemar",
    "title": "50/50",
    "year": 2004,
    "game": "SingStar"
  },
  {
    "id": "617",
    "artist": "Liberty X",
    "title": "Just a Little",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "618",
    "artist": "Madonna",
    "title": "Like a Virgin",
    "year": 1984,
    "game": "SingStar"
  },
  {
    "id": "619",
    "artist": "Mis-Teeq",
    "title": "Scandalous",
    "year": 2003,
    "game": "SingStar"
  },
  {
    "id": "620",
    "artist": "Motörhead",
    "title": "Ace of Spades",
    "year": 1980,
    "game": "SingStar"
  },
  {
    "id": "621",
    "artist": "Petula Clark",
    "title": "Downtown",
    "year": 1964,
    "game": "SingStar"
  },
  {
    "id": "622",
    "artist": "P!nk",
    "title": "Get the Party Started",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "623",
    "artist": "Rick Astley",
    "title": "Never Gonna Give You Up",
    "year": 1987,
    "game": "SingStar"
  },
  {
    "id": "624",
    "artist": "Ricky Martin",
    "title": "Livin' la Vida Loca",
    "year": 1999,
    "game": "SingStar"
  },
  {
    "id": "625",
    "artist": "Roy Orbison",
    "title": "Oh Pretty Woman",
    "year": 1964,
    "game": "SingStar"
  },
  {
    "id": "626",
    "artist": "S Club",
    "title": "Don't Stop Movin'",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "627",
    "artist": "Sophie Ellis-Bextor",
    "title": "Murder on the Dancefloor",
    "year": 2001,
    "game": "SingStar"
  },
  {
    "id": "628",
    "artist": "Sugababes",
    "title": "Round Round",
    "year": 2002,
    "game": "SingStar"
  },
  {
    "id": "629",
    "artist": "Village People",
    "title": "Y.M.C.A.",
    "year": 1978,
    "game": "SingStar"
  },
  {
    "id": "630",
    "artist": "Westlife",
    "title": "World of Our Own",
    "year": 2002,
    "game": "SingStar"
  }
];

export const games: Game[] = [];
