const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
const colorBox = document.querySelector("#colorBox");
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e), console.log(e.target.id);
    switch (e.target.id) {
      case "yellow":
        colorBox.style.backgroundColor = e.target.id;
        break;
      case "grey":
        colorBox.style.backgroundColor = e.target.id;
        break;
      case "blue":
        colorBox.style.backgroundColor = e.target.id;
        break;
      case "green":
        colorBox.style.backgroundColor = e.target.id;
        break;
      default: {
        alert("yellow is not clicked");
      }
    }
  })
);
