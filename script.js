const form = document.querySelector("form");
const formElements = document.querySelectorAll("input, textarea");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    successMessage.style.display = "block";
    return;
  }
  formElements.forEach((element) => {
    hideValidationError(element);
    validateForm(element);
  });
});

function hideValidationError(element) {
  const parentElement =
    element.type === "radio"
      ? element.closest("fieldset")
      : element.parentElement;

  parentElement
    .querySelectorAll(".error")
    .forEach((error) => (error.style.display = "none"));

  if (element.type === "radio")
    element.parentElement.classList.remove("input-error");
  else element.classList.remove("input-error");
}

function validateForm(element) {
  if (element.validity.valueMissing) {
    showValidationError(element, "required");
  } else if (element.validity.typeMismatch) {
    showValidationError(element, "email");
  }
}

function showValidationError(element, errorType) {
  const parentElement =
    element.type === "radio"
      ? element.closest("fieldset")
      : element.parentElement;

  if (element.type === "radio") parentElement.classList.add("input-error");
  else element.classList.add("input-error");

  if (element.type === "email") {
    parentElement.querySelector(".email-error").style.display = "block";
  }
  parentElement.querySelector(".required-error").style.display = "block";
}
