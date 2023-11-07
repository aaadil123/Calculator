let typed = new Typed(".lang", {        /* script for typing effect */
    strings: [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
    backDelay: 700
});

let string = "";
let input = document.getElementById("input-field")      /* select input field */
let buttons = document.querySelectorAll(".btn");        /* select all buttons */
let arr = Array.from(buttons)       /* make an array of selected buttons */
arr.forEach((button) => {       /* traverse on array for every button */
    button.addEventListener('click', (e) => {       /* add event listener on clicking of button */
        if(e.target.innerHTML == '='){      
            string = eval(string);      /* eval function evaluate the input */
            input.value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";        /* clears the output */
            input.value = string;
        }
        else if(e.target.innerHTML == "Del"){
            string = string.substring(0, string.length-1);      /* delete single character */
            input.value = string;
        }
        else{
            string += e.target.innerHTML;       /* add number of symbol to input */
            input.value = string;
        }
    });
});