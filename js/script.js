// Alert will show as soon as the page loads
        alert("Hello Professor, I created this website inspired by one of my favorite movies. If you click the See Webpage Changes button, you'll see the modifications I've made to the template");
// Function to open the modal
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide the modal
}

// Close modal when clicked outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Close the modal
    }
}
