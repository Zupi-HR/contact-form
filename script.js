const form = document.querySelector("form");
const formElements = document.querySelectorAll("input, textarea");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formElements.forEach((element) => {
    hideValidationError(element);
  });

  if (form.checkValidity()) {
    successMessage.style.display = "block";
    form.reset();
    return;
  }
  formElements.forEach((element) => {
    validateForm(element);
  });
});

function hideValidationError(element) {
  element.setAttribute("aria-invalid", "false");
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
  if (!element.checkValidity()) {
    element.setAttribute("aria-invalid", "true");
    if (element.validity.valueMissing) {
      showValidationError(element, "required");
    } else if (element.validity.typeMismatch) {
      showValidationError(element, "email");
    }
  }
}

function showValidationError(element, errorType) {
  const parentElement =
    element.type === "radio"
      ? element.closest("fieldset")
      : element.parentElement;

  if (element.type === "radio")
    element.parentElement.classList.add("input-error");
  else element.classList.add("input-error");

  parentElement.querySelector(`.${errorType}-error`).style.display = "block";
}
