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
    showValidationError(element);
  });
});

function hideValidationError(element) {
  let span =
    element.parentElement.querySelector(".error") ||
    element.closest("fieldset")?.querySelector(".error");
  if (span) {
    span.style.display = "none";
  }
  if (element.type === "radio") {
    element.parentElement.classList.remove("input-error");
  } else {
    element.classList.remove("input-error");
  }
}

function showValidationError(element) {
  let parentElement = element.parentElement;
  let span =
    parentElement.querySelector(".error") ||
    element.closest("fieldset")?.querySelector(".error");
  if (element.validity.valueMissing) {
    span.style.display = "block";
    if (element.type === "radio") {
      element.parentElement.classList.add("input-error");
    } else {
      element.classList.add("input-error");
    }
  } else if (element.validity.typeMismatch) {
    span = parentElement.querySelector("email-error");
  }
}
