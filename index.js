const appendButtons = document.querySelectorAll(".append");
const display = document.querySelector("input");
const calculate = document.querySelector(".calculate");
const deleteOne = document.querySelector(".delete-one");
const deleteAll = document.querySelector(".delete-all");

const x = new DOMParser().parseFromString("&Pi;", "text/html").documentElement.textContent;

appendButtons.forEach(
    append => {
        append.onclick = function(e) {
            if (append.innerHTML === x) {
                if (display.value === Math.PI.toFixed(2)) {
                    e.preventDefault();
                } else {
                    display.value += Math.PI.toFixed(2);
                }
            } else {
                display.value += append.innerHTML;
            }
        }
    }
)

calculate.onclick = function() {
    try {
        display.value = eval(display.value);
    } catch(Error) {
        display.value = "Error";
    }
}

deleteAll.onclick = function() {
    display.value = "";
}

deleteOne.onclick = function() {
    display.value = display.value.split("").slice(0,-1).join("");
}