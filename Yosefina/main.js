document.getElementById("contactForm").addEventListener("submit");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const typedText = "Hello, I'm a web designer!";
let index = 0;

function typeText() {
  if (index < typedText.length) {
    document.getElementById("typed-text").textContent +=
      typedText.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;
