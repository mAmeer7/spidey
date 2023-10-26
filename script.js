let main = document.querySelector(".main");
let imgbox = document.querySelector(".imagebox");
let image = document.querySelector(".imagebox>img");

imgbox.addEventListener("mousemove", (e) => {
  image.style.top = 1 - e.y * 0.05 + "px";
  image.style.left = 1 - e.x * 0.05 + "px";
});

let page2 = document.querySelector("#page2");
let peterImage = document.querySelector(".imageSection>img");


document.addEventListener("scroll", (e) => {
  console.log(page2.scr)
});

console.log(page2);
console.log(peterImage);
