let audio = new Audio("sources/tingin.mp3");
let container = document.querySelector(".container");
let titleelement = document.querySelector(".title");
let buttoncontainer = document.querySelector(".button-container");
let leftbutton = document.querySelector(".left");
let rightbutton = document.querySelector(".right");
let index = 0;
let title = [
  "🤍🤍🤍",
  "From: Ervane<br>To: Crystal",
  "Hello po, miss na kita",
  "Sorry kung tagal natapos",
  "Crush baya kita hehe",
  "Turn on mo volume mo",
  "I hope you like this gift",
  "🤍🤍🤍",
];

const changeTitle = (title) => {
  titleelement.style.opacity = 0;
  setTimeout(() => {
    titleelement.innerHTML = title;
    titleelement.style.opacity = 1;
  }, 250);
};

const audioplayer = () => {
  const lyrics = [
    [4.358425, "Dahan-dahan lang Sa gitna man ng daan"],
    [8.536704, "Mga saglit na inilikha Kakaiba ang tama"],
    [16.492898, "Ng sinag sa 'yong kutis na kayumanggi"],
    [21.986209, "Oh sa'n ba 'ko dinadala"],
    [25.937152, "Bawat ngiting biglaang nabura Iyong naipinta"],
    [34.923843, "Hiwaga ng 'yong tingin nang-aalipin"],
    [39.412894, "Kahit sa'n man madala"],
    [44.226246, "'Di pinapansin, ingay sa tabi"],
    [48.764645, "Magulong kapaligiran, sa 'yo lang ang tingin"],
    [53.391971, "'Di pinapansin, ika'y paiikutin"],
    [58.237284, "Nang dahan-dahan lang"],
    [61.399933, "Sa gitna man ng daan"],
    [63.744193, "Sa bawat sandaling ikaw ay pinagmamasdan"],
    [68.811554, "May dumadapong kiliti na 'di maunawaan"],
    [73.800272, "Walang imik, 'di mabanggit na"],
    [75.496817, "Sa aking isip ikaw lang ang nagmamarka"],
    [81.825366, "Kahit mabitin aking salita"],
    [86.513365, "Mata'y ibinubunyag na"],
    [89.67105, "Sa 'yo lang magpapaangkin"],
    [92.844421, "'Di palalampasin"],
    [95.086868, "'Wag ka sanang kumawala"],
    [100.23591, "'Di mawawala"],
    [104.114602, "'Di pinapansin, ingay sa tabi"],
    [109.147962, "Magulong kapaligiran, sa 'yo lang ang tingin"],
    [113.476192, "'Di pinapansin, ako'y paiikutin"],
    [118.396095, "Nang dahan-dahan lang"],
    [120.437209, "Sa gitna man ng daan"],
    [123.051619, "Ohhh, ohhh"],
    [127.244421, "Ohhh, ohhh"],
    [132.238455, "Ohhh, ohhh"],
    [137.004537, "Ohhh, ohhh"],
    [141.90565, "'Di man alam ang darating"],
    [146.489412, "Sa dulo at sa gitna ng dilim"],
    [151.001345, "Sa liwanag mo nakatingin"],
    [155.649363, "Sa 'yo nakatingin"],
    [157.606787, "Sa 'yo lang ang tingin"],
    [160.450444, "'Di man alam ang darating"],
    [164.605102, "Sa dulo at sa gitna ng dilim"],
    [169.080957, "Sa liwanag mo nakatingin"],
    [173.935967, "Sa 'yo nakatingin"],
    [176.212431, "Sa 'yo lang ang tingin"],
    [181.942348, "'Di pinapansin, ingay sa tabi"],
    [186.547493, "Magulong kapaligiran, sa 'yo lang ang tingin"],
    [191.106063, "'Di pinapansin, ika'y paiikutin"],
    [195.891292, "Nang dahan-dahan lang"],
    [198.338693, "Sa gitna man ng daan"],
    [200.241428, "'Di pinapansin, ingay sa tabi"],
    [204.838131, "Magulong kapaligiran, sa 'yo lang ang tingin"],
    [209.371015, "'Di pinapansin, ika'y paiikutin"],
    [214.25289, "Nang dahan-dahan lang"],
    [216.434074, "Sa gitna man ng daan"],
  ];

  document.body.classList.remove("start-animation");

  titleelement.style.top = "50%";
  buttoncontainer.style.display = "none";
  audio.volume = 0.25;
  audio.loop = true;

  audio.play();
  audio.addEventListener("playing", () => {
    lyrics.forEach(async ([timeout, lyrics]) => {
      await new Promise((resolve) => setTimeout(resolve, timeout * 1000));
      console.log(lyrics);
      changeTitle(lyrics);
    });
  });
};

const next = () => {
  if (index < title.length - 1) {
    index = index + 1;

    changeTitle(title[index]);

    if (index === title.length - 1) {
      audioplayer();
    }
  }
};

const back = () => {
  if (index >= 1) {
    index = index - 1;

    changeTitle(title[index]);
  }
};

leftbutton.addEventListener("click", back);
rightbutton.addEventListener("click", next);

document.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === "PageUp" ||
    event.key === "PageDown" ||
    event.key === " "
  ) {
    event.preventDefault();
  }
});

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);
