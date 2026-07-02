window.werchterPhotos = [
  {
    id: "werchter-upload-001",
    src: "artwork/werchter-upload-001.jpg",
    title: "Vooravond in Rooi",
    description: "Lenneke en Gale klinken met oranje drankjes op een terras in Rooi tijdens de vooravond van het Werchter-weekend.",
    day: "maandag 29 juni",
    date: "2026-06-29",
    moment: "vooravond",
    stage: "niet van toepassing",
    artist: "niet van toepassing",
    people: ["Lenneke", "Gale"],
    tags: ["Rooi", "29 juni", "vooravond", "terras", "drankjes"],
    source: "telegram",
    confidence: "hoog"
  },
  {
    id: "werchter-upload-002",
    src: "artwork/werchter-upload-002.jpg",
    title: "Camping opbouw",
    description: "Zonnige campingweide met tenten, caravans en auto's. Festivalgangers zijn bezig met het opzetten en inrichten van het kampement.",
    day: "zondag 28 juni",
    date: "2026-06-28",
    moment: "camping opbouw",
    stage: "camping",
    artist: "niet van toepassing",
    people: [],
    tags: ["camping", "opbouw", "tenten", "caravan", "festivalcamping", "zomer"],
    source: "telegram",
    confidence: "hoog"
  },
  {
    id: "werchter-upload-003",
    src: "artwork/werchter-upload-003.jpg",
    title: "Festivalcamping met blauwe tenten",
    description: "Tenten en caravans op een grasveld onder een heldere blauwe lucht, met een rustige campingsfeer bij de kampeerplek.",
    day: "zondag 28 juni",
    date: "2026-06-28",
    moment: "camping opbouw",
    stage: "camping",
    artist: "niet van toepassing",
    people: [],
    tags: ["camping", "tenten", "caravan", "festivalterrein", "zonnig", "kamperen"],
    source: "telegram",
    confidence: "hoog"
  }
,
  {
    id: "werchter-upload-004",
    src: "artwork/werchter-upload-004.jpg",
    title: "Lenneke met uitzicht op het groen",
    description: "Lenneke zit buiten aan een tafel met een smartphone en zonnebril, met een open grasveld en wolkenlucht op de achtergrond.",
    day: "te-controleren",
    date: "te-controleren",
    moment: "rustmoment",
    stage: "niet zichtbaar",
    artist: "niet van toepassing",
    people: ["Lenneke"],
    tags: ["Lenneke", "buiten", "rustmoment", "smartphone", "zonnebril", "grasveld", "telegram-upload"],
    source: "telegram",
    confidence: "hoog"
  },
  {
    id: "werchter-upload-005",
    src: "artwork/werchter-upload-005.jpg",
    title: "Campingtafel bij de tenten",
    description: "Lenneke zit op de Werchter-camping achter een tafel met flessen en kampeerspullen, tussen de tenten en partytent.",
    day: "donderdag 2 juli",
    date: "2026-07-02",
    moment: "campingmoment",
    stage: "camping",
    artist: "niet van toepassing",
    people: ["Lenneke"],
    tags: ["camping", "Lenneke", "tenten", "partytent", "campingtafel", "drankjes", "Werchter"],
    source: "telegram",
    confidence: "hoog"
  },
  {
    id: "werchter-upload-006",
    src: "artwork/werchter-upload-006.jpg",
    title: "Biermoment met de groep",
    description: "Niels, Lenneke en vrienden zitten samen aan een tafel met bier onder een overkapping tijdens het Werchter-weekend.",
    day: "donderdag 2 juli",
    date: "2026-07-02",
    moment: "groepsmoment",
    stage: "horeca / camping",
    artist: "niet van toepassing",
    people: ["Niels", "Lenneke", "vrienden"],
    tags: ["groep", "Niels", "Lenneke", "vrienden", "bier", "terras", "overkapping", "Werchter"],
    source: "telegram",
    confidence: "hoog"
  },
  {
    id: "werchter-upload-007",
    src: "artwork/werchter-upload-007.jpg",
    title: "Lenneke proost met een pintje",
    description: "Lenneke houdt lachend een glas bier omhoog tijdens een ontspannen Werchter-moment.",
    day: "donderdag 2 juli",
    date: "2026-07-02",
    moment: "proostmoment",
    stage: "horeca / camping",
    artist: "niet van toepassing",
    people: ["Lenneke"],
    tags: ["Lenneke", "bier", "proost", "portret", "horeca", "Werchter"],
    source: "telegram",
    confidence: "hoog"
  }
];

window.werchterPhotoUploadGuide = {
  nextAssetPattern: "artwork/werchter-upload-###.jpg",
  workflow: [
    "treat a loose Telegram image in this chat as a photo upload unless the caption clearly says otherwise",
    "download Telegram image",
    "optimize as web JPEG",
    "append a record to window.werchterPhotos",
    "fill day, date, stage, artist, people, tags and confidence",
    "bump site version and deploy to main"
  ],
  preferredTags: ["day", "artist", "festivalganger", "stage", "moment", "source"]
};