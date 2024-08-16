const grid = document.querySelector("#grid");

function changeColor(div)
{
    div.style.backgroundColor = "red";
}

for (i = 0; i < 16; i++)
{
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", () => changeColor(square)); 
    grid.appendChild(square);
}
