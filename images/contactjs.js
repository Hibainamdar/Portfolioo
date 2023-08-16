document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Validate inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }
        
        if (email.trim() === "") {
            alert("Please enter your email.");
            return;
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (message.trim() === "") {
            alert("Please enter a message.");
            return;
        }
        
        // If validation passes, you can submit the form here
        alert("Form submitted successfully!");
    });
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    function showMessage() {
        alert("we will contact you soon");
    }   
}
