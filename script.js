function initMap() {
    // Initialize the Google Maps API (if needed)
    console.log("Google Maps API loaded");
}

document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendLocation");
    const locationInput = document.getElementById("location");

    sendButton.addEventListener("click", function () {
        const userInput = locationInput.value.trim();

        if (userInput === "") {
            alert("Please enter a location! 🌍😂");
            return;
        }

        // Generate a completely random latitude and longitude
        const randomLat = (Math.random() * 180 - 90).toFixed(6);
        const randomLng = (Math.random() * 360 - 180).toFixed(6);

        // 5% chance to actually go where they want
        const shouldSendToCorrectLocation = Math.random() < 0.05;

        let destination = shouldSendToCorrectLocation
             ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userInput)}`
             : `https://www.google.com/maps/@${randomLat},${randomLng},10z`;

        // Display an evil message before redirecting
        document.getElementById("message").innerHTML = shouldSendToCorrectLocation
            ? "You're lucky! You're actually going where you want. 😅"
            : "Oops! Looks like you're going on an unexpected adventure. 😈";

        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = destination;
        }, 2000);
    });
});
