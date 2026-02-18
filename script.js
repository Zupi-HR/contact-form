const form = document.querySelector("form");
const formElements = document.querySelectorAll("input, textarea");

form.addEventListener("submit", (e) => {
  if (form.checkValidity()) {
    // write code later
    return;
  }
  e.preventDefault();
  formElements.forEach((element) => {
    if (!element.checkValidity()) {
      let span = element.parentElement.querySelector(".error");
      if (!span) {
        const fieldset = element.closest("fieldset");
        span = fieldset.querySelector(".error");
      }
      if (span) span.style.display = "block";
    }
  });
});
