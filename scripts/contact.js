// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const button = document.querySelector("#submit-button");
const contactMain = document.querySelector(".contact");

button.addEventListener("click", () => {
  contactMain.innerHTML = "<p>Thank you for your message!</p>";
  contactMain.style.fontSize = "24px";
});