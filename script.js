const Toggle = document.querySelector('.toggle-btn');
const Left = document.querySelector('.left');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');

// Ensure that either .home or .about exists before adding event listener
Toggle.addEventListener("click", () => {
    Left.classList.toggle('display');
    if (home) {
        home.classList.toggle('rotate');
    }
    if (about) {
        about.classList.toggle('rotate');
    }
    if (blog) {
        blog.classList.toggle('rotate');
    }
    if (contact) {
        contact.classList.toggle('rotate');
    }
});


function validateForm() {
    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Validate name
    if (name.value.trim() === "") {
        showError(name, "Name is required.");
        isValid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        isValid = false;
    }

    // Validate subject
    if (subject.value.trim() === "") {
        showError(subject, "Subject is required.");
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
        showError(message, "Message is required.");
        isValid = false;
    }

    return isValid;
}


