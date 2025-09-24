// Image Slider
let sliderImages = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;
function changeImage() {
  const slider = document.getElementById("slider");
  if (slider) {
    index = (index + 1) % sliderImages.length;
    slider.src = sliderImages[index];
  }
}
setInterval(changeImage, 3000); // change every 3 seconds

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else {
      alert("Message sent successfully!");
    }
  });
}
