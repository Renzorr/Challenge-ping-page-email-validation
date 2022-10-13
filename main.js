const inputEmail = document.querySelector(".email");
const alertText = document.querySelector(".alert");
const btnSubmit = document.querySelector(".btn-getStarted");

function ValidateEmail() {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!inputEmail.value.match(validRegex)) {
    inputEmail.classList.add("warning");
    alertText.classList.add("active");
    inputEmail.value = " ";
  } else {
    return;
  }
}

btnSubmit.addEventListener("click", ValidateEmail);

inputEmail.addEventListener("keydown", () => {
  inputEmail.classList.remove("warning");
  alertText.classList.remove("active");
});
