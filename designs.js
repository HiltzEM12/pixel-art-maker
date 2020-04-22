// Form element
const form = document.querySelector('#sizePicker');
// Hight element
const height = document.querySelector('#inputHeight');
// Width element
const width = document.querySelector('#inputWidth');
// color element
const color = document.querySelector('#colorPicker');
// Table element
const table = document.querySelector('#pixelCanvas');

// Add submit event listner to the form
form.addEventListener('submit',makeGrid);

function makeGrid(event) {
    event.preventDefault(); // Otherwise html returns to orginal state
    table.innerHTML = '' // Remove the old cells
    addCells(height.value, width.value);  // Modify the table with the user input
}

// Function to add cells to the grid
function addCells(rows,columns){
    for (let r = 0; r < rows; r++){
        const newRow = document.createElement('tr'); //Create row
        table.appendChild(newRow);  // Add row to the doc
        for (let c = 0; c < columns; c++){
            const newColumn = document.createElement('td'); // Create column (cell)
            newRow.appendChild(newColumn); // Add column (cell) to the doc
            newColumn.addEventListener('click',changeColor);  // Add listener to the cell
        }
    }
}

// Function to change the color of a cell
function changeColor(event){
    event.target.style.backgroundColor  = color.value; // Get color from the user choice
}