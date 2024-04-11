// Color Scheme
document.body.style.backgroundColor = "#1a1a1a";
document.body.style.color = "#ffffff";

// Typography
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.fontSize = "16px";
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
headings.forEach(function(heading) {
    heading.style.fontWeight = "bold";
});
var links = document.querySelectorAll("a");
links.forEach(function(link) {
    link.style.textDecoration = "none";
    link.style.color = "green";
});

// Buttons and Links
var buttons = document.querySelectorAll("button, .button, a.button");
buttons.forEach(function(button) {
    button.style.backgroundColor = "#333333";
    button.style.color = "#ffffff";
    button.style.border = "1px solid #333333";
    button.style.padding = "10px 20px";
    button.style.transition = "background-color 0.3s, color 0.3s";
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#555555";
    });
    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#333333";
    });
});

// Cards or Panels
var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
    card.style.backgroundColor = "#333333";
    card.style.color = "#ffffff";
    card.style.padding = "20px";
    card.style.marginBottom = "20px";
});

// Forms and Input Fields
var inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password'], textarea");
inputs.forEach(function(input) {
    input.style.backgroundColor = "#333333";
    input.style.color = "#ffffff";
    input.style.border = "1px solid #666666";
    input.style.padding = "10px";
});

// Footer
var footer = document.querySelector(".footer");
footer.style.backgroundColor = "#333333";
footer.style.color = "#ffffff";
footer.style.padding = "20px";
footer.style.textAlign = "center";
