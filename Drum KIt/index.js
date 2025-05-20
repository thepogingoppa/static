let buttons = document.querySelectorAll(".drum");

//  triggers sound for each mouse click
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function()
        {
            let buttonPressed = this.innerHTML;
            makeSound(buttonPressed);
            buttonAnimation(buttonPressed);
        }
    );
}

// triggers sound for each key pressed
document.addEventListener("keydown", function(event)
    {
        makeSound(event.key);
        buttonAnimation(event.key);
    }
);

// the different sounds
function makeSound(buttonPressed)
{
    switch (buttonPressed) 
    {
        case 'w':
            playTom1();
            break;
        case 'a':
            playTom2();
            break;
        case 's':
            playTom3();
            break;
        case 'd':
            playTom4();
            break;
        case 'j':
            playCrash();
            break;
        case 'k':
            playKick();
            break;
        case 'l':
            playSnare();
            break;
        default: alert("Button has no sound.");
    }
}

// animation for the button
function buttonAnimation(buttonPressed)
{
    let letterOfButton = document.querySelector("." + buttonPressed);
    letterOfButton.classList.add("animation");
    setTimeout(function() {
        letterOfButton.classList.remove("animation");
    }, 100);
}

// the different sounds
function playTom1()
{
    let tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();
}

function playTom2()
{
    let tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play();
}

function playTom3()
{
    let tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play();
}

function playTom4()
{
    let tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play();
}

function playCrash()
{
    let crash = new Audio("./sounds/crash.mp3");
    crash.play();
}

function playKick()
{
    let kick = new Audio("./sounds/kick-bass.mp3");
    kick.play();
}

function playSnare()
{
    let snare = new Audio("./sounds/snare.mp3");
    snare.play();
}

