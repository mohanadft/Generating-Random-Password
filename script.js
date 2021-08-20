let password = document.querySelector(".password"),
  input = document.querySelector("#length"),
  btn = document.querySelector(".btn");

let random = "abcdefghijkl@!#$%^&mnopqrstuvwxy*()|/z0123456789";

// Ameer Ismail Al-Ashqar
// 201835

btn.addEventListener("click", function () {
  let newPassword = [];
  for (let i = 0; i < input.value; i++) {
    newPassword.push(random.charAt(Math.trunc(Math.random() * random.length)));
  }
  document.querySelector(".greetMessage").innerHTML = "Here are The Password.";
  password.innerHTML = newPassword.join("");
  if (input.value <= 0 || input.value === "") {
    alert("Please Enter a Number.");
    document.querySelector(".greetMessage").innerHTML = "";
  }
  input.value = "";
});
