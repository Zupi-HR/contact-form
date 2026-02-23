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

function showValidationError(element) {}
