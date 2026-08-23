/* ==========================================
   WISHBONE DREAM CLUB — INTERACTIONS
   ========================================== */

let wishes = Number(localStorage.getItem("wishCount") || 0);
let musicOn = false;

const wishesList = [
  "something soft is coming your way.",
  "a tiny good thing will find you.",
  "your next lucky moment is closer than you think.",
  "keep the pretty little dream alive.",
  "someone is quietly rooting for you.",
  "today deserves one unnecessary sparkle.",
  "you are allowed to want beautiful things.",
  "a surprise is hiding in an ordinary moment.",
  "the moon has your back tonight.",
  "your silly little idea might actually work.",
  "good things do not always arrive loudly.",
  "save a little room for magic."
];

const fortunes = [
  "You will notice something beautiful that everyone else walked past.",
  "A forgotten idea is about to become useful.",
  "Your next tiny victory will happen sooner than expected.",
  "Someone will make you smile for no important reason.",
  "The universe recommends: buy yourself a cute little treat.",
  "A weird coincidence will become your favorite story.",
  "You have excellent luck with small things today.",
  "Something you almost gave up on still has a little life in it."
];

const oracleMessages = [
  "the stars say: follow the thing that makes you grin.",
  "the stars say: your best idea will arrive at an inconvenient hour.",
  "the stars say: keep the tiny object. it is lucky.",
  "the stars say: you need more music and less overthinking.",
  "the stars say: something pastel is spiritually important today.",
  "the stars say: go outside and look at the sky.",
  "the stars say: your next chapter needs a ridiculous amount of glitter."
];

const skySymbols = [
  "✦","✧","♡","⋆","˚","○",
  "☁","☆","·","🫧"
];

function randomItem(arr) {
  return arr[
    Math.floor(Math.random() * arr.length)
  ];
}

function showToast(text) {

  const toast =
    document.getElementById("toast");

  toast.textContent = text;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 1200);
}

function updateWishCounter() {

  document.getElementById("wishCount")
    .textContent =
    String(wishes).padStart(3, "0");
}


/* ================================
   WISH
================================ */

function makeWish() {

  wishes++;

  localStorage.setItem(
    "wishCount",
    wishes
  );

  updateWishCounter();

  document.getElementById(
    "wishText"
  ).textContent =
    randomItem(wishesList);

  burst(
    window.innerWidth / 2,
    window.innerHeight / 2,
    ["✦","♡","☆","🫧","🌸","⭐"],
    24
  );

  showToast("♡ wish accepted ♡");
}


/* ================================
   ORB
================================ */

function chargeOrb() {

  const orb =
    document.getElementById("orb");

  orb.animate(
    [
      {
        transform:
          "scale(1) rotate(0)"
      },
      {
        transform:
          "scale(1.25) rotate(20deg)"
      },
      {
        transform:
          "scale(.95) rotate(-10deg)"
      },
      {
        transform:
          "scale(1) rotate(0)"
      }
    ],
    {
      duration: 700,
      easing: "ease-out"
    }
  );

  burst(
    orb.getBoundingClientRect().left
      + orb.offsetWidth / 2,

    orb.getBoundingClientRect().top
      + orb.offsetHeight / 2,

    ["✦","✨","♡","☁"],
    12
  );

  showToast(
    "the little orb is awake ✧"
  );
}


/* ================================
   SHRINE ITEMS
================================ */

function tapItem(el, name) {

  el.animate(
    [
      {
        transform:
          "translateY(0) rotate(0)"
      },
      {
        transform:
          "translateY(-18px) rotate(4deg) scale(1.06)"
      },
      {
        transform:
          "translateY(0) rotate(0)"
      }
    ],
    {
      duration: 500
    }
  );

  const r =
    el.getBoundingClientRect();

  burst(
    r.left + r.width / 2,
    r.top + 40,
    ["♡","✦","🌸","☆"],
    10
  );

  showToast(
    name + " acquired ♡"
  );
}


/* ================================
   TRINKETS
================================ */

function collectTrinket(el) {

  const r =
    el.getBoundingClientRect();

  el.animate(
    [
      {
        transform:
          "scale(1) rotate(0)",
        opacity: 1
      },
      {
        transform:
          "scale(1.7) rotate(25deg)",
        opacity: 1
      },
      {
        transform:
          "scale(.1) rotate(180deg)",
        opacity: 0
      }
    ],
    {
      duration: 600
    }
  );

  burst(
    r.left + r.width / 2,
    r.top + r.height / 2,
    ["✨","💖","✦","🫧","☆"],
    14
  );

  showToast(
    "trinket collected!"
  );

  setTimeout(() => {

    el.style.visibility =
      "hidden";

  }, 580);
}


/* ================================
   PARTICLES
================================ */

function burst(
  x,
  y,
  symbols,
  amount = 10
) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const p =
      document.createElement("span");

    p.className =
      "click-spark";

    p.textContent =
      randomItem(symbols);

    p.style.left =
      x + "px";

    p.style.top =
      y + "px";

    p.style.setProperty(
      "--x",
      `${Math.random() * 180 - 90}px`
    );

    p.style.setProperty(
      "--y",
      `${Math.random() * 180 - 90}px`
    );

    document.body.appendChild(p);

    setTimeout(
      () => p.remove(),
      950
    );
  }
}


/* ================================
   FORTUNE
================================ */

function fortune() {

  document.getElementById(
    "fortuneText"
  ).textContent =
    randomItem(fortunes);

  showToast(
    "🔮 fortune revealed"
  );

  burst(
    window.innerWidth / 2,
    window.innerHeight / 2,
    ["✦","🔮","☆","♡"],
    16
  );
}


/* ================================
   ORACLE
================================ */

function openOracle() {

  document.getElementById(
    "oracle"
  ).classList.add("open");

  newOracle();
}

function closeOracle() {

  document.getElementById(
    "oracle"
  ).classList.remove("open");
}

function newOracle() {

  document.getElementById(
    "oracleText"
  ).textContent =
    randomItem(oracleMessages);
}


/* ================================
   DREAM ROOM
================================ */

function closeDream() {

  const room =
    document.querySelector(
      ".room-window"
    );

  room.animate(
    [
      {
        transform:
          "scale(1) rotate(-1deg)",
        opacity: 1
      },
      {
        transform:
          "scale(.2) rotate(12deg)",
        opacity: 0
      }
    ],
    {
      duration: 450,
      fill: "forwards"
    }
  );

  showToast(
    "dream room closed ♡"
  );
}


/* ================================
   GUESTBOOK
================================ */

function signGuestbook() {

  const input =
    document.getElementById(
      "guestInput"
    );

  const text =
    input.value.trim();

  if (!text) {

    showToast(
      "write something first ♡"
    );

    return;
  }

  const entry =
    document.createElement("div");

  entry.textContent =
    "♡ " + text;

  entry.style.setProperty(
    "--r",
    `${Math.random() * 4 - 2}deg`
  );

  document.getElementById(
    "guestEntries"
  ).prepend(entry);

  input.value = "";

  showToast(
    "your little note is here ♡"
  );

  burst(
    window.innerWidth / 2,
    window.innerHeight / 2,
    ["♡","✦","🌸"],
    8
  );
}


/* ================================
   MUSIC
================================ */

function toggleMusic() {

  musicOn = !musicOn;

  document.getElementById(
    "musicBtn"
  ).textContent =
    musicOn
      ? "♫ DREAM RADIO: ON"
      : "♫ DREAM RADIO: OFF";

  showToast(
    musicOn
      ? "♪ imaginary dreamy music on ♪"
      : "dream radio off"
  );
}


/* ================================
   NAV
================================ */

function scrollToId(id) {

  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}


/* ================================
   BACKGROUND DECOR
================================ */

function createSky() {

  const sky =
    document.getElementById(
      "sky"
    );

  for (
    let i = 0;
    i < 55;
    i++
  ) {

    const bit =
      document.createElement("span");

    bit.className =
      "sky-bit";

    bit.textContent =
      randomItem(skySymbols);

    bit.style.left =
      `${Math.random() * 100}vw`;

    bit.style.top =
      `${Math.random() * 100}vh`;

    bit.style.fontSize =
      `${8 + Math.random() * 25}px`;

    bit.style.setProperty(
      "--dx",
      `${Math.random() * 80 - 40}px`
    );

    bit.style.setProperty(
      "--dy",
      `${Math.random() * 100 - 50}px`
    );

    bit.style.setProperty(
      "--dur",
      `${2 + Math.random() * 6}s`
    );

    bit.style.animationDelay =
      `${Math.random() * -6}s`;

    sky.appendChild(bit);
  }
}


/* ================================
   AMBIENT SPARKLES
================================ */

setInterval(() => {

  const x =
    Math.random() *
    window.innerWidth;

  const y =
    Math.random() *
    window.innerHeight;

  burst(
    x,
    y,
    ["✦","♡","·","☆"],
    2
  );

}, 1800);


/* ================================
   CLICK SPARKLE
================================ */

document.addEventListener(
  "pointerdown",
  (e) => {

    if (
      e.target.closest("button") ||
      e.target.closest("input")
    ) return;

    burst(
      e.clientX,
      e.clientY,
      ["✦","♡","·"],
      4
    );
  }
);


/* ================================
   CHAOS MODE
================================ */

function summonChaos() {

  document.body.classList.toggle(
    "chaos"
  );

  if (
    !document.body.classList.contains(
      "chaos"
    )
  ) {

    showToast(
      "chaos has gone to sleep ♡"
    );

    return;
  }

  showToast(
    "💥 WISH CHAOS ACTIVATED 💥"
  );

  const pieces = [
    "♡","✦","☆","🌸","🫧",
    "🎀","🍓","🧸","🪽",
    "💎","☁","⭐","🌙",
    "🦢","🍬"
  ];

  for (
    let i = 0;
    i < 70;
    i++
  ) {

    const p =
      document.createElement(
        "span"
      );

    p.className =
      "chaos-piece";

    p.textContent =
      randomItem(pieces);

    p.style.left =
      `${Math.random() * 100}vw`;

    p.style.top =
      `${-50 - Math.random() * 200}px`;

    p.style.setProperty(
      "--x",
      `${Math.random() * 400 - 200}px`
    );

    p.style.animationDelay =
      `${Math.random() * 1.8}s`;

    document.body.appendChild(p);

    setTimeout(
      () => p.remove(),
      4200
    );
  }

  burst(
    window.innerWidth / 2,
    window.innerHeight / 2,
    pieces,
    45
  );
}


/* ================================
   START
================================ */

createSky();
updateWishCounter();
