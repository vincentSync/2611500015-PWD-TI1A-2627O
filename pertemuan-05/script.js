const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  console.log("Form dikirim.");
});

contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});
