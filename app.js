css = document.querySelector("h3");
c1 = document.querySelector(".color1");
c2 = document.querySelector(".color2");

c1.addEventListener("input", gradient);
c2.addEventListener("input", gradient);

function gradient() {
  document.body.style.background = `linear-gradient(to right, ${c1.value}, ${c2.value})`;
  css.innerText = document.body.style.background;
}
