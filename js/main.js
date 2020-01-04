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
  "Sm",
  "Teeny",
  "Sooth",
  "Smart",
  "Nan",
  "H",
  "Oog",
  "Hug"
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
  "lli",
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

const dumbGradients = [
  "linear-gradient(90deg, rgba(0,255,218,1) 0%, rgba(85,0,255,1) 100%)",
  "linear-gradient(90deg, rgba(255, 0, 215, 0.31) 0%, rgb(0, 211, 255) 100%)",
  "linear-gradient(90deg, rgba(0,255,149,1) 0%, rgba(0,99,255,1) 100%)",
  "linear-gradient(260deg, rgba(0,255,218,1) 0%, rgba(85,0,255,1) 100%)",
  "linear-gradient(260deg, rgba(255, 0, 215, 0.31) 0%, rgb(0, 211, 255) 100%)",
  "linear-gradient(260deg, rgba(0,255,149,1) 0%, rgba(0,99,255,1) 100%)"
];

function generateNewDumbName() {
  const text = document.getElementById("dumbName");
  const bg = document.getElementById("body");
  text.style.opacity = 0;
  setTimeout(() => {
    setNewDumbName(text);
    //setNewDumbBackground(bg);
  }, 250);
}

function setNewDumbBackground(bg) {
  bg.style.background = dumbGradients[arrayRandomIndex(dumbGradients)];
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
