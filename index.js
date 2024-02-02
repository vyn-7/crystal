let video = document.getElementById("tingin");
let container = document.querySelector(".container");
let titleelement = document.querySelector(".title");
let leftbutton = document.querySelector(".left");
let rightbutton = document.querySelector(".right");
let index = 0;
let title = [
  "🤍🤍🤍",
  "From: Ervane<br>To: Crystal",
  "Hello po, miss na kita",
  "Sorry kung tagal natapos :(",
  "I hope you like this gift.",
  "🤍🤍🤍",
];

const next = () => {
  if (index < title.length - 1) {
    index = index + 1;
    titleelement.style.opacity = 0;

    setTimeout(() => {
      titleelement.innerHTML = title[index];
      titleelement.style.opacity = 1;
    }, 500);

    if (index === title.length - 1) {
      container.style.opacity = 0;
      setTimeout(() => {
        container.style.display = "none";
        video.currentTime = 40;
        video.volume = 0.25;

        document.body.classList.remove("start-animation");
        video.play();
      }, 500);
    }
  }
};

const back = () => {
  if (index >= 1) {
    index = index - 1;
    titleelement.style.opacity = 0;

    setTimeout(() => {
      titleelement.innerHTML = title[index];
      titleelement.style.opacity = 1;
    }, 500);
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
