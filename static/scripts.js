// Buttons and Links (Hover Effects)
var buttonsAndLinks = document.querySelectorAll("button, .button, a.button");
buttonsAndLinks.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        element.style.backgroundColor = "#555555";
    });
    element.addEventListener("mouseout", function() {
        element.style.backgroundColor = "#333333";
    });
});
