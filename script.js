document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thanks, " + name + "! Your message has been sent.");
    } else {
        alert("Please fill out all fields.");
    }
});
