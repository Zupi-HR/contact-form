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
    if (element.type === "radio") {
      element.parentElement.classList.remove("input-error");
    } else {
      element.classList.remove("input-error");
    }
    let parentElement = element.parentElement;
    let span =
      element.parentElement.querySelector(".error") ||
      element.closest("fieldset")?.querySelector(".error");
    if (span) {
      span.style.display = "none";
      if (!element.checkValidity()) {
        span.style.display = "block";
        if (element.type === "radio") {
          element.parentElement.classList.add("input-error");
        } else {
          element.classList.add("input-error");
        }
      }
    }
  });
});
