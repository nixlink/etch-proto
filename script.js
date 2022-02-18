// Selectors
//**************************//
const CONTAINER = document.getElementById("container");

let gridSize = 16;



// Create a grid of cells within CONTAINER
function drawGrid(gridSize){

    let cellSize = 480 / gridSize;

    for( let i = 0; i < (gridSize * gridSize); i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        console.log(cell);
        //cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseover', changeColor);
        CONTAINER.appendChild(cell);
    }

    


}

function changeColor(e){

    console.log(e);
    e.target.style.backgroundColor = "#212224";
}

drawGrid(32);
