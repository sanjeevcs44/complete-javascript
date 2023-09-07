const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  const output = document.querySelector("#output");

  const result = document.querySelector("#result");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    console.log(bmi);
    switch (true) {
      case parseInt(bmi) >= 24.9:
        console.log("bmi", bmi);
        output.innerHTML = "you are overweight";
        break;
      case parseInt(bmi) >= 18.5:
        console.log("bmi", bmi);
        output.innerHTML = "you are normal weight";
        break;
      // Add more cases for other conditions as needed
      default:
        console.log("Unknown BMI range");
        break;
    }
  }
});
