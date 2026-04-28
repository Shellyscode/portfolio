// 1. A simple welcome message when the page loads
window.onload = function() {
    console.log("Shelly's Portfolio is ready!");
};

// 2. Alert message when someone clicks on your name (h1)
// This is a classic beginner JS trick!
const myName = document.querySelector('h1');

myName.addEventListener('click', function() {
    alert("Hi! I'm Shelly Singh. Thanks for visiting my website!");
});

// 3. Change the background color of a card when you click it
// This shows you know how to "manipulate the DOM"
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', function() {
        // This changes the card border to blue when clicked
        this.style.borderColor = "#007bff";
        
        // This prints a message in the "Console" (Right-click > Inspect > Console)
        console.log("You clicked on a section!");
    });
});