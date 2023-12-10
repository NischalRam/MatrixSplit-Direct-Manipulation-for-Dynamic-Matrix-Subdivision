const matrix = [
    ["Sector", "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011", "2012", "2013", "2014", "2015", "2016"],
    ["Energy (Electricity and Heat)", 70.0, 70.3, 70.9, 71.5, 71.8, 72.3 , 70.0, 70.3, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Transportation", 15.0, 15.0, 15.2, 15.5, 15.8, 16.2 , 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Industry", 5.4, 5.4, 5.5, 5.6, 5.7, 5.9, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Agriculture", 2.0, 2.0, 2.1, 2.2, 2.3, 2.4, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Land Use Changes", 2.8, 2.8, 2.9, 3.0, 3.1, 3.2, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Residential and Commercial", 1.2, 1.2, 1.2, 1.3, 1.4, 1.5, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Fugitive Emissions", 0.8, 0.8, 0.9, 0.9, 1.0, 1.1, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Waste", 0.6, 0.6, 0.7, 0.7, 0.8, 0.9, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Other Fuel Combustion", 0.4, 0.4, 0.4, 0.5, 0.5, 0.6, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Industrial Processes", 0.4, 0.4, 0.4, 0.5, 0.5, 0.6, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Forest Land", 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 70.9, 71.5, 71.8, 72.3, 70.0, 70.3, 70.0, 70.3, 70.9, 71.5],
    ["Bunker Fuels", 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["International Transport", 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["Other Energy Industries", 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["Water and Wastewater", 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["Solvent and Other Product Use", 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["Agriculture Soils", 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["Biomass Energy", 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2],
    ["Industry", 5.4, 5.4, 5.5, 5.6, 5.7, 5.9, 0.1, 0.1, 0.1, 0.2,0.1, 0.1, 0.1, 0.1, 0.1, 0.2]
  ];
  

// The dimensions of the matrix (adjust these as needed)
const ROWS = matrix.length;
const COLS = matrix[0].length;


let table = document.getElementById("matrix");
for (let i = 0; i < ROWS; i++) {
    let row = table.insertRow();
    for (let j = 0; j < COLS; j++) {
        let cell = row.insertCell();
        cell.innerHTML = matrix[i][j];
        cell.onmousedown = function(event) { startSelection(event, i, j); };
        cell.onmousemove = function(event) { updateSelection(event, i, j); };
        cell.onmouseup = function() { endSelection(); };
    }
}

let marquee = document.createElement("div");
marquee.className = "marquee";
table.parentNode.insertBefore(marquee, table.nextSibling);

let isSelecting = false;
let selectionStartRow, selectionStartCol, selectionEndRow, selectionEndCol;

let submatrices = [];
let submatricesContainer = document.getElementById("submatrices");

function startSelection(event, row, col) {
    isSelecting = true;
    selectionStartRow = row;
    selectionStartCol = col;
    selectionEndRow = row;
    selectionEndCol = col;
    updateSelection(event, row, col);
}

function updateSelection(event, row, col) {
    if (isSelecting) {
        selectionEndRow = row;
        selectionEndCol = col;

        let selectedCells = document.getElementsByClassName("selected");
        while (selectedCells.length > 0) {
            selectedCells[0].classList.remove("selected");
        }

        for (let i = Math.min(selectionStartRow, selectionEndRow); i <= Math.max(selectionStartRow, selectionEndRow); i++) {
            for (let j = Math.min(selectionStartCol, selectionEndCol); j <= Math.max(selectionStartCol, selectionEndCol); j++) {
                let cell = table.rows[i].cells[j];
                cell.classList.add("selected");
            }
        }
    }
}

function endSelection() {
    if (isSelecting) {
        isSelecting = false;

        let width = Math.abs(selectionEndCol - selectionStartCol) + 1;
        let height = Math.abs(selectionEndRow - selectionStartRow) + 1;
        let submatrix = [];
        for (let i = Math.min(selectionStartRow, selectionEndRow); i <= Math.max(selectionStartRow, selectionEndRow); i++) {
            let subrow = [];
            for (let j = Math.min(selectionStartCol, selectionEndCol); j <= Math.max(selectionStartCol, selectionEndCol); j++) {
                subrow.push(matrix[i][j]);
            }
            submatrix.push(subrow);
        }

        let subtable = document.createElement("table");
        subtable.style.width = `${width * 24}px`;
        for (let i = 0; i < height; i++) {
            let subrow = subtable.insertRow();
            for (let j = 0; j < width; j++) {
                let subcell = subrow.insertCell();
                subcell.innerHTML = submatrix[i][j];
                subcell.style.border = "1px solid black";
                subcell.style.textAlign = "center";
                subcell.style.padding = "2px";
                subcell.style.backgroundColor = "#BCA37F"; // Use the desired color value

            }
        }

        submatrices.push(subtable);
        submatricesContainer.appendChild(subtable);
    }
}

function resetSubmatrices() {
    submatrices.forEach(submatrix => submatricesContainer.removeChild(submatrix));
    submatrices.length = 0;
}


