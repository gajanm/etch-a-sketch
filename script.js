const container = document.querySelector(".container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const bod = document.querySelector("body");

/* creating heading */
const tog = document.createElement('div');

const head = document.createElement('div');
head.textContent = "Etch A Sketch";


tog.appendChild(head).className ="header";


const num = document.createElement('button');
num.innerText = "Control how many grids";

tog.appendChild(num).className = "but";

bod.appendChild(tog).className = "heading";

/* code for resetting grids */
num.addEventListener("click", () => {
    resetGrids();

    
    
    makeGrid(prompt("How many grids do you want (max=100)"));
    
})




function resetGrids(){
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach((one) => {
        one.style.backgroundColor="white";
    })

    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

}

let temp = "";

function makeGrid(grids){
    temp=grids;
    makeRows(grids);
    makeCells(grids);
}


function makeRows(r){
    
    for (let i = 0; i<r; i++){
        const row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    }
}





function makeCells(c){
    for (let i = 0; i<rows.length; i++){
        for (let j = 0; j<c; j++){
            const col = document.createElement('div');
            rows[i].appendChild(col).className = 'cell';
        }
    }

    const cell = document.querySelectorAll(".cell");


    z = (600/temp)-(1);

    cell.forEach((one) => {
        one.style.width = `${z}px`;
        one.style.height = `${z}px`;
        one.style.backgroundColor = "white";
    }
    )


    cell.forEach((one) => {
        one.addEventListener("mouseover", () =>
        {
            
            if (one.style.backgroundColor == "white"){
                x = randomRgbColor();
                
                one.style.backgroundColor=`${x}`; 
            }

        })
    })

}



function randomRgbColor() {
    let arr = ["red", "blue", "green", "orange", "pink", "purple"]
    let x = Math.floor(Math.random()*arr.length);
    
    return arr[x];
}






makeGrid(16, 16);



