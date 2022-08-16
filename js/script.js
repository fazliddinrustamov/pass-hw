let loginQuestion = Number(window.prompt("Enter your password!"))

let loginResult = document.querySelector(".result-text");

let passwordsBase = [12, 77, 86, 92, 79, 46, 55, 23];

for (i = 0; i < passwordsBase.length; i++) {
  if (isNaN(loginQuestion)) {
    loginResult.textContent = "Please enter your pass using numbers!";
    break;
  } else if (loginQuestion == passwordsBase[i]) {
    loginResult.textContent = "You are welcome!";
    break;
  } else {
    loginResult.textContent = "You didn't sign in our site!";
  }
}