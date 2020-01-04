const bonusName = ["Li'l ", "My first "];

const prefixes = [
  "B",
  "By",
  "Bl",
  "P",
  "Br",
  "Bw",
  "Cw",
  "Cr",
  "Fw",
  "F",
  "Gy",
  "Sn",
  "Sh",
  "Sl",
  "Y",
  "M",
  "N",
  "R",
  "Sw",
  "Teeny",
  "Sooth",
  "Smart",
  "Nan",
  "H",
  "Oog"
];

const vowels = ["i", "u", "uu", "oo", "o", "y", "ee", "a"];

const suffixes = [
  "ppy",
  "boo",
  "roo",
  "doo",
  "pu",
  "bear",
  "ly",
  "lo",
  "lee",
  "roo",
  "ry",
  "li",
  "my",
  "bo",
  "tot",
  "ndo",
  "ku",
  "baby",
  "gro",
  "kaa",
  "snoh",
  "bebe",
  "roo",
  "tomo",
  "by"
];

function generateNewDumbName() {
  const text = document.getElementById("dumbName");
  text.style.opacity = 0;
  setTimeout(() => {
    setNewDumbName(text);
  }, 250);
}

function setNewDumbName(text) {
  const hasBonus = Math.random() <= 0.2;
  let bonus = "";
  if (hasBonus) bonus = bonusName[arrayRandomIndex(bonusName)];
  const prefix = prefixes[arrayRandomIndex(prefixes)];
  const vowel = vowels[arrayRandomIndex(vowels)];
  const suffix = suffixes[arrayRandomIndex(suffixes)];
  const newDumbName = bonus + prefix + vowel + suffix;
  console.log(newDumbName);
  text.innerHTML = newDumbName;
  text.style.opacity = 1;
}

function arrayRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
