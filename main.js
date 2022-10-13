const inputEmail = document.querySelector(".email");
const alertText = document.querySelector(".alert");

function ValidateEmail() {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!inputEmail.value.match(validRegex)) {
    inputEmail.classList.add("warning");
    alertText.classList.add("active");
  } else {
    return;
  }
}

inputEmail.addEventListener("keydown", () => {
  inputEmail.classList.remove("warning");
  alertText.classList.remove("active");
});
