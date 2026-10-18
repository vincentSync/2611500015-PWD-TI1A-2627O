const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form dikirim.");
});

contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});

contactForm.addEventListener("reset", () => {
  formFeedback.textContent = "";
});
