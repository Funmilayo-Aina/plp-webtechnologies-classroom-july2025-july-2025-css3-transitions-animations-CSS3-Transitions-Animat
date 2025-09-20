// 🌙 Dark/Light Mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ➕ Logistics Order Counter
let orderCount = 0;
document.getElementById("addOrder").addEventListener("click", () => {
  orderCount++;
  document.getElementById("orderCount").textContent = orderCount;
});

// 💳 Payment Platform Selection
document.getElementById("paymentSelect").addEventListener("change", (e) => {
  const paymentMessage = document.getElementById("paymentMessage");
  paymentMessage.textContent = ` You selected ${e.target.value} as your payment method.`;
});

//  Delivery Method Selection
document.getElementById("deliverySelect").addEventListener("change", (e) => {
  const deliveryMessage = document.getElementById("deliveryMessage");
  deliveryMessage.textContent = `Delivery method: ${e.target.value}`;
});

// 📋 Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  let feedback = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const country = document.getElementById("country").value;
  const message = document.getElementById("message").value.trim();

  // Validate name
  if (name.length < 3) {
    valid = false;
    feedback += " Name must be at least 3 characters long.<br>";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    valid = false;
    feedback += " Enter a valid email address.<br>";
  }

  // Validate phone
  const phoneRegex = /^[0-9]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    valid = false;
    feedback += "Enter a valid phone number (7–15 digits).<br>";
  }

  // Service and country must be selected
  if (!service) {
    valid = false;
    feedback += "Please select a service.<br>";
  }
  if (!country) {
    valid = false;
    feedback += " Please select a country.<br>";
  }

  // Message validation
  if (message.length < 10) {
    valid = false;
    feedback += " Message must be at least 10 characters long.<br>";
  }

  // Show results
  const formFeedback = document.getElementById("formFeedback");
  if (valid) {
    formFeedback.innerHTML = "Message sent successfully! We'll get back to you soon.";
    formFeedback.style.color = "green";
  } else {
    formFeedback.innerHTML = feedback;
    formFeedback.style.color = "red";
  }
});
// Toggle dark/light mode
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change button text depending on mode
    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});
