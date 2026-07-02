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