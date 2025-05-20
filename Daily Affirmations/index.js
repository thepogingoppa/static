let affirmations = [
    "You did well today!",
    "I'm proud of you.",
    "You can do it.",
    "I believe in you.",
    "You're nearly there.",
    "You'll get there soon.",
    "Keep it up!",
    "Padayon!"
]
let random = Math.floor(Math.random() * affirmations.length);
let title = document.querySelector("span.title");
let subtitle = document.querySelector("p");

title.innerHTML = " " + affirmations[random];
subtitle.innerHTML = "d a i l y &nbsp;&nbsp;&nbsp; a f f i r m a t i o n s";

