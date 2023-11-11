let columns = 26;
let rows = 100;
const headerContainer = document.querySelector(".header");
const serialNumbersContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

const headerMain = document.querySelector(".root-container");


const cellContainer = document.querySelector(".cell");


const sizeOfCol=document.getElementById('changeSize');

// A => 65


// question -auto Resize Columns/Rows:Add an event listener 
// to the boundary of column/row headers for a double-click.
// Calculate the width (for columns) or height (for rows) based on the content.
// Adjust the width/height of the column/row accordingly.








function createHeaderCells() {

    for (let i = 0; i <= columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if (i !== 0) {
            // i = 1 => Char A => 64 + 1 => 65
            headerCell.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(headerCell);
        
    }

    // console.log(document.querySelectorAll('.header-cell'))
    // document.querySelector('.header-cell').addEventListener('dblclick',(e)=>{
    //     console.log(e.target)
    //     e.target.style.height="100px"
        
    
    // });
    

}




function createSerialNumberCells() {
    for (let i = 1; i <= rows; i++) {
        const snoCell = document.createElement("div");
        snoCell.innerText = i;
        snoCell.className = "sno-cell cell"
        serialNumbersContainer.appendChild(snoCell);
    }
}

function createRow(rowNumber) {
    // creates a row and each row will have 26 columns
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 1; i <= columns; i++) {
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        row.appendChild(cell);

        cell.id = String.fromCharCode(64 + i) + rowNumber;

        // adding focus event for every cell.
        cell.addEventListener("focus", onCellFocus);
        // add input event as we need to record the inside the input 
        cell.addEventListener("input", onFormChange);
    }
    mainContainer.appendChild(row);
}

function buildMainSection() {
    // loop for 100 times
    for (let i = 1; i <= rows; i++) {
        createRow(i);
    }
}

createHeaderCells();
createSerialNumberCells();

buildMainSection();