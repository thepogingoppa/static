let listOfColors = ["Pula", "Kahil", "Dalag", "Lunhaw",
"Bughaw", "Tagom", "Ubihon", "Tabonon", "Abohon",
     "Itom", "Puti", "Rosas"];
let button = document.querySelector("button");
button.addEventListener("click", function()
    {
        let randomNumber = Math.floor(Math.random() * listOfColors.length);
    }
);