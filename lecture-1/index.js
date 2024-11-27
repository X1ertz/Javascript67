
const button = document.getElementById('toggle-btn');
const message = document.getElementById('message');

button.addEventListener('click', function() {

    if (message.style.display === "none") {
        
        message.style.display = "block";
        button.textContent = "Hide Text";
    } else {

        message.style.display = "none";
        button.textContent = "Show Text ";
    }
});
