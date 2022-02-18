// Selectors
//**************************//
const CONTAINER = document.getElementById("container");
const clrButton = document.getElementById("clear");
const slider = document.getElementById("pixelSlider");
const pixelTxt = document.getElementById("pixelTxt");
slider.step = 2;
let gridSize = slider.value;
pixelTxt.innerText = slider.value;

slider.oninput = () => {
    pixelTxt.innerText = slider.value;   
}
slider.onchange = () => {
    
    gridSize = slider.value;
    clearScreen();
    
}
clrButton.addEventListener('click', clearScreen);





// Create a grid of cells within CONTAINER
function drawGrid(){
    
   

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

function clearScreen(){
    //location.reload(); <<< this option would just reload the page, which works, but would reset any user settings.
    
    // This option removes all the child elements of CONTAINER.
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);

    }

    // Now we have to redraw the grid, or we'd have a big red square with no drawing area.
    drawGrid();
    
}

drawGrid();
