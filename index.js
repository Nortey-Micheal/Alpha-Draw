// Variable declaration
const input = document.querySelector("input");
const gridNum = document.querySelector("output.output");
const drawPad = document.querySelector(".drawPad");


input.addEventListener("input" , grid)
var grids

drawPad.addEventListener("mouseover" , addColor)
// function to add color
function addColor(event) {
    if (event.target !== drawPad) {
        event.target.style.backgroundColor = "red";
    }
}


// function for determining grid number
function grid(event) {
    drawPad.innerHTML = ""; //removes any initial boxes available before input
    gridNum.textContent = event.target.value;
    grids = gridNum.textContent;
    amount(grids);
}


// function to calculate grid 
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