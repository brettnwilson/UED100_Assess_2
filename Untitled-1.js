// Script to show an alert on form submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    // Add actual form submission logic here if needed
});