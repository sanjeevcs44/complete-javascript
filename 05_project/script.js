const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e), console.log(e.target.id);
    switch (e.target.id) {
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      default: {
        alert("yellow is not clicked");
      }
    }
  })
);
