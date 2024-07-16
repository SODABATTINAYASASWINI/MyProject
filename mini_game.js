var size = 0
function range(){
    var table = document.getElementById("table")
    // table.innerHTML = ""
    size = window.prompt("Give the grid size")
    var tbody = document.createElement("tbody") 
    for(var i = 0; i < size; i ++){
        var trow = document.createElement("tr")
        for(var j = 0; j < size; j++){
            var tcell = document.createElement("td")
            if (i == 0 && j == 0) {
                tcell.style.backgroundColor = "red"; 
            }
            tcell.style.border = "1px solid black"
            tcell.style.height = "50px"
            tcell.style.width = "60px"
            trow.appendChild(tcell)
        }
        tbody.appendChild(trow)
    }
    tbody.style.border = "1px solid black"
    // var table = document.getElementById("table")
    table.appendChild(tbody)
}
var trows = document.getElementsByTagName("tr")
console.log(trows)
var i = 0
var j = 0
function right(){
    if(j == size - 1){
        window.alert("You went to the right most bit")
        return;
    }
    trows[i].cells[j].style.backgroundColor = "white"
    j += 1
    trows[i].cells[j].style.backgroundColor = "red"
}
function left(){
    if(j == 0){
        window.alert("You went to the left most bit")
        return;
    }
    trows[i].cells[j].style.backgroundColor = "white"
    j -= 1
    trows[i].cells[j].style.backgroundColor = "red"
}

function up(){
    if(i == 0){
        window.alert("You went to the top most bit")
        return;
    }
    trows[i].cells[j].style.backgroundColor = "white"
    i -= 1
    trows[i].cells[j].style.backgroundColor = "red"
}

function down(){
    if(i == size - 1){
        window.alert("You went to the last bit")
        return;
    }
    trows[i].cells[j].style.backgroundColor = "white"
    i += 1
    trows[i].cells[j].style.backgroundColor = "red"
}
