const grid = document.querySelector("#grid");

var size = 4;
const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener("click", changeSize);

function changeColor(div)
{
    div.style.backgroundColor = "red";
}

function changeSize()
{
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => { grid.removeChild(square); }); 
    size = prompt("Enter a size for the grid: ");    
    squareSize = 500/size;    // Square height/width are total pixels(200) divided by number of columns/rows
    console.log(size);
    console.log(squareSize);
    for (i = 0; i < size; i++)
    {
        for(j = 0; j < size; j++)
        {
            console.log("in loop");
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            square.addEventListener("mouseover", () => changeColor(square)); 
            grid.appendChild(square);
        }
    }
}

for (i = 0; i < 16; i++)
{
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", () => changeColor(square)); 
    grid.appendChild(square);
}
