dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to uncheck shows you haven't seen.",
    checked: false,
    sub: [
      { name: "Mobile Suit Gundam", key: "79" },
      { name: "Mobile Suit Zeta Gundam", key: "Z" },
      { name: "Mobile Suit Gundam ZZ", key: "ZZ" },
      { name: "Char's Counterattack", key: "CCA" },
      { name: "0080: War in the Pocket", key: "80" },
      { name: "0083: Stardust Memory", key: "83" },
      { name: "Mobile Suit Gundam F91", key: "F91" },
      { name: "Mobile Suit Victory Gundam", key: "V" },
      { name: "Mobile Suit Gundam Wing", key: "Wing" },
      { name: "The 08th MS Team", key: "08" },
      { name: "After War Gundam X", key: "X" },
      { name: "Gundam Wing Endless Waltz", key: "EW" },
      { name: "Turn A Gundam", key: "Turn" },
      { name: "Gundam Evolve", key: "EVO" },
      { name: "Mobile Suit Gundam SEED", key: "SEED" },
      { name: "MS IGLOO", key: "IG" },
      { name: "Mobile Suit Gundam SEED Destiny", key: "DEST" },
      { name: "SEED C.E. 73: Stargazer", key: "SG" },
      { name: "Mobile Suit Gundam 00", key: "00" },
      { name: "MS IGLOO 2: The Gravity Front", key: "GF" },
      { name: "Mobile Suit Gundam Unicorn", key: "UC" },
      { name: "Gundam 00: A Wakening of the Trailblazer", key: "AW" },
      { name: "Mobile Suit Gundam AGE", key: "AGE" },
      { name: "Gundam Build Fighters", key: "BF" },
      { name: "Gundam Reconguista in G", key: "RECO" },
      { name: "Gundam Build Fighters Try", key: "TRY" },
      { name: "Mobile Suit Gundam The Origin", key: "ORI" },
      { name: "Mobile Suit Gundam Iron-Blooded Orphans", key: "IBO" },
      { name: "Mobile Suit Gundam Thunderbolt", key: "TB" },
      { name: "Gundam Build Divers", key: "BD" },
      { name: "Mobile Suit Gundam Narrative", key: "NAR" },
      { name: "Gundam Build Divers Re:RISE", key: "RISE" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Mobile Suit Gundam",
    img: "c5DqpgX.png",
    opts: {
      series: [ "79" ],
      stage: ["st4"]
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
