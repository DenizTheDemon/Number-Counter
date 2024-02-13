document.getElementById("number").textContent = "0"; 
let number = parseInt(document.getElementById("number").textContent); 

document.getElementById("button-1").onclick = function(){ 
    number--; 
    document.getElementById("number").textContent = number; 
}


document.getElementById("button+1").onclick = function(){
    number ++;
    document.getElementById("number").textContent = number;
}


document.getElementById("reset").onclick = function(){
    number = 0;
    document.getElementById("number").textContent = number;
}