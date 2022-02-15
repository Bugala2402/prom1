



var islandsCount = 0;

var number1;
var number2;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


var matrix = [];
var matrix2 = [];
var matrixElement;
function fillmatrix() {
    number1 = document.getElementById("number1").valueAsNumber;
    number2 = document.getElementById("number2").valueAsNumber;
    var tbody = document.createElement("tbody")
    var container = document.getElementById("matrix")
    matrixElement = document.createElement("table")
    for (var i = 0; i < number1; i++) {
        
        var row = document.createElement("tr")
        matrix[i] = [];
        matrix2[i] = [];
        for (var j = 0; j < number2; j++) {
            matrix[i][j] = getRandomInt(0, 2);
            matrix2[i][j] = matrix[i][j]
            var col = document.createElement("td");   
            if (matrix2[i][j] == 1) {
                col.style.background = "black"
            }
            col.style.width = "30px"
            col.style.height = "30px"
            row.appendChild(col)
        }
        tbody.appendChild(row)
    }
    matrixElement.setAttribute("border", "1")
    matrixElement.appendChild(tbody)
    container.appendChild(matrixElement)
    document.getElementById('btn2').setAttribute("class", "show-button button");

    document.getElementById('number1').setAttribute("class", "hide-first-screen");
    document.getElementById('number2').setAttribute("class", "hide-first-screen");
    document.getElementById('btn1').setAttribute("class", "hide-first-screen");
    document.getElementById('h').setAttribute("class", "hide-first-screen");
}

function sc1()
{
    document.getElementById('btn3').setAttribute("class", "hide-first-screen");
    document.getElementById('matrix').setAttribute("class", "hide-first-screen");
    document.getElementById('foundIslands').setAttribute("class", "hide-first-screen");

    document.getElementById('number1').setAttribute("class", "show-button input");
    document.getElementById('number2').setAttribute("class", "show-button input");
    document.getElementById('btn1').setAttribute("class", "show-button button");
    document.getElementById('h').setAttribute("class", "show-button");
    window.location.reload();
    
}

 var colorMatrix = new Array([]);
 var index=-1
function resetMat(rowIndex, cullomnIndex) 
{
    if (rowIndex < number1 && cullomnIndex < number2 && rowIndex >= 0 && cullomnIndex >= 0) 
    {
        if (matrix[rowIndex][cullomnIndex] == 1) 
        {
            matrix[rowIndex][cullomnIndex] = 0;
            index++;
            colorMatrix[index]=[rowIndex,cullomnIndex]
            resetMat(rowIndex - 1, cullomnIndex);
            resetMat(rowIndex - 1, cullomnIndex - 1);
            resetMat(rowIndex - 1, cullomnIndex + 1);
            resetMat(rowIndex, cullomnIndex + 1);
            resetMat(rowIndex, cullomnIndex - 1);
            resetMat(rowIndex + 1, cullomnIndex);
            resetMat(rowIndex + 1, cullomnIndex - 1);
            resetMat(rowIndex + 1, cullomnIndex + 1);
        }
    }
}



function findCount(number1, number2) {
    

    for (let i = 0; i < number1; i++) {
        for (let j = 0; j < number2; j++) 
        {
            if (matrix[i][j] == 1) 
            {
                resetMat(i, j);
                index=-1;
                islandsCount++;
                draw();
            }
            colorMatrix = new Array([]);

                document.getElementById("foundIslands").innerHTML = "FOUND " + islandsCount + " ISLANDS!";
                document.getElementById('btn3').setAttribute("class", "show-button button");
                document.getElementById('btn2').setAttribute("class", "hide-first-screen");
            
        }
    }
}
function draw()
{
    var color= "background-color:" + random_rgba();
    var iPoint ;
    var jPoint;
    for (let i = 0; i < colorMatrix.length; i++) {
        iPoint  = colorMatrix[i][0]
        jPoint = colorMatrix[i][1]
      var t = document.getElementById("matrix")
      d = t.getElementsByTagName("tr")[iPoint]
      r = d.getElementsByTagName("td")[jPoint];
      r.style=color
    }
}


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
    //Math.floor(Math.random()*16777215).toString(16);
}




