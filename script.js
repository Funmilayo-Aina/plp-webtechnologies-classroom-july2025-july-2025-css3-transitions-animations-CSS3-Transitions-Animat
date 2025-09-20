/* ================================================================================================================================================================
   JavaScript Functions
   ================================================================================================================================ */

// Global variable
// 🌙 Dark/Light Mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Logistics Order Counter
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

// Contact Form Validation
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


let isSpinning = false;

/**
 * Toggles bounce animation on an element
 * @param {HTMLElement} el - The element to animate
 */
function toggleBounce(el) {
  el.classList.toggle("bouncing");
}

/**
 * Starts or stops spinner animation
 * @param {HTMLElement} el - The spinner element
 * @returns {string} - Status message
 */
function toggleSpin(el) {
  isSpinning = !isSpinning; // update global state
  el.classList.toggle("spinning");
  return isSpinning ? "Spinner started ✅" : "Spinner stopped ❌";
}

/**
 * Toggles color animation for box
 * @param {HTMLElement} el - The box element
 */
function toggleColorBox(el) {
  el.classList.toggle("color-change");
}

// Local scope example
function multiply(a, b) {
  let result = a * b; // local variable
  return result;
}

/* ================================================================================================================================
   DOM + Animations
   ================================================================================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".js-ball");
  const spinner = document.querySelector(".js-spinner");
  const box = document.querySelector(".js-box");

  // Buttons
  document.getElementById("bounceBtn").addEventListener("click", () => {
    toggleBounce(ball);
  });

  document.getElementById("spinBtn").addEventListener("click", () => {
    let msg = toggleSpin(spinner);
    console.log(msg); // show return value
  });

  document.getElementById("colorBtn").addEventListener("click", () => {
    toggleColorBox(box);
    console.log("Box animation toggled ");
  });

  // Demonstrate function with return value
  console.log("Multiply 3 * 4 =", multiply(3, 4));
});
/* ================================================================================================================================
   Form Validation
   ================================================================================================================================*/
const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting immediately

  let valid = true;
  let messages = [];

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate name
  if (name.length < 3) {
    valid = false;
    messages.push("Name must be at least 3 characters long.");
  }

  // Validate email (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    valid = false;
    messages.push("Enter a valid email address.");
  }

  // Validate password
  if (password.length < 6) {
    valid = false;
    messages.push("Password must be at least 6 characters long.");
  }

  // Show feedback
  const feedback = document.getElementById("form-feedback");
  feedback.innerHTML = "";

  if (valid) {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
    form.reset();
  } else {
    feedback.innerHTML = "❌ " + messages.join("<br> ");
    feedback.style.color = "red";
  }
});
