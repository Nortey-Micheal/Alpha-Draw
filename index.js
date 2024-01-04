// Variable declaration
const input = document.querySelector("input");
const gridNum = document.querySelector("output.output");
const drawPad = document.querySelector(".drawPad");
const color = document.querySelector("#color");
const randomCol = document.querySelector(".randomCol");
const btn = document.createElement("button");
const settings = document.querySelector(".settings");
btn.textContent = "RESET";
btn.addEventListener("click" , () => {
    drawPad.innerHTML = "";
})
settings.appendChild(btn)

randomCol.addEventListener("click",ranColor)
input.addEventListener("input" , grid)
var grids

drawPad.addEventListener("mouseover" , addColor);
// drawPad.addEventListener("touchstart" , addColor);
// function to add color
function addColor(event) {
    if (event.target !== drawPad) {
        event.target.style.backgroundColor = `${color.value}`;
    }
}

//function to generate random colors
function ranColor() {
    drawPad.addEventListener("mouseover" , (event) => {
        if (event.target !== drawPad) { ///putting this outside of the next if statement prevents the creation of a single random color
            var num1 = Math.floor(Math.random() * 500);
            var num2 = Math.floor(Math.random() * 500);
            var num3 = Math.floor(Math.random() * 500);
        }
        if (event.target !== drawPad) {
            event.target.style.backgroundColor = `rgb(${num1},${num2},${num3})`
        }
    })
}

// function for determining grid number
function grid(event) {
    drawPad.innerHTML = ""; //removes any initial boxes available before input
    gridNum.textContent = event.target.value;
    grids = gridNum.textContent;
    amount(grids);
}


// function to calculate grid and make div
function amount(grids) {
    square = grids * grids;
    width = 600 / grids;
    height = 600 / grids;
    for (let i = 1; i <= square; i++) {
        const div = document.createElement("div");
        div.style.border = "black solid 1px";
        div.style.width = `${width}px`; // set width of boxes
        div.style.height = `${height}px`; //set height of boxes
        div.style.flexGrow = "1";
        div.style.flexShrink = "1";
        drawPad.appendChild(div)
    }
}