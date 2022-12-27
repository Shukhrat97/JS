const cm = document.createElement("div");
cm.classList.add("box");
const mode1 = document.createElement("div");
mode1.classList.add("red");
mode1.classList.add("box__inner");
mode1.innerHTML = "RED <hr>" ;
const mode2 = document.createElement("div");
mode2.classList.add("yellow");
mode2.classList.add("box__inner");
mode2.innerHTML = "YELLOW <hr>";
const mode3 = document.createElement("div");
mode3.classList.add("blue");
mode3.classList.add("box__inner");
mode3.innerHTML = "BLUE <hr>";


cm.prepend(mode1);
cm.prepend(mode2);
cm.prepend(mode3);

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  document.body.append(cm);
  cm.classList.add("active");
  cm.style.top = e.clientY + "px";
  cm.style.left = e.clientX + "px";
});

mode1.addEventListener("click", () => {
  document.body.style.background = "red";
  cm.classList.remove("active");
});

mode2.addEventListener("click", () => {
  document.body.style.background = "yellow";
  cm.classList.remove("active");
});

mode3.addEventListener("click", () => {
  document.body.style.background = "blue";
  cm.classList.remove("active");
});

window.addEventListener("click",()=>{
    cm.classList.remove("active");
});


