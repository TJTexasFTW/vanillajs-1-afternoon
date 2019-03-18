console.log("Hello Me");

var progress = [];
var allSquares;
var full = false;

function notNull(element, index, array) {
    return (element === "X" || element ==="O");
}



// console.log("allSquares = " + allSquares);

function play(val) {
    const getPlayer = document.getElementById("player");
    const element = document.getElementById(val);
    console.log("val: = " + val);
    
    if (element.innerText === "X" || element.innerText === "O") {
        alert("This square already played");
    } else {
        if (getPlayer.innerText === "X"){
            progress[val] = getPlayer.innerText;
            getPlayer.innerText = "O"
            element.innerText = "X";
        } else {
        progress[val] = getPlayer.innerText;
        getPlayer.innerText = "X"
        element.innerText = "O"
        }
    }   
    console.log(progress);
/*Do we have a winner?*/
if (progress.length = 9) {
    for (var i = 0; i < 9; i++) {
      if (progress[i] = undefined) {
        full = false;
    } else {
        full = true}
    }
} else {
    full = false;
}
console.log("Full?: " + full)
    if (((progress[0] === "X" || progress[0] === "O") && 
         (progress[1] === "X" || progress[1] === "O") && 
         (progress[2] === "X" || progress[2] === "O")) && 
        progress[0] === progress[1] && progress[1] === progress[2]) {
        alert("We have a winner - " + progress[0])
    } else if (((progress[3] === "X" || progress[3] === "O") && 
        (progress[4] === "X" || progress[4] === "O") && 
        (progress[5] === "X" || progress[5] === "O")) && 
        progress[3] === progress[4] && progress[4] === progress[5]) {
        alert("We have a winner - " + progress[3]) 
    } else if (((progress[6] === "X" || progress[6] === "O") && 
        (progress[7] === "X" || progress[7] === "O") && 
        (progress[8] === "X" || progress[8] === "O")) && 
        progress[6] === progress[7] && progress[7] === progress[8]) {
        alert("We have a winner - " + progress[6]) 
    } else if (((progress[0] === "X" || progress[0] === "O") && 
        (progress[3] === "X" || progress[3] === "O") && 
        (progress[6] === "X" || progress[6] === "O")) && 
        progress[0] === progress[3] && progress[3] === progress[6]) {
        alert("We have a winner - " + progress[0]) 
    } else if (((progress[1] === "X" || progress[1] === "O") && 
        (progress[4] === "X" || progress[4] === "O") && 
        (progress[7] === "X" || progress[7] === "O")) && 
        progress[1] === progress[4] && progress[4] === progress[7]) {
        alert("We have a winner - " + progress[1])
    } else if (((progress[2] === "X" || progress[2] === "O") && 
        (progress[5] === "X" || progress[5] === "O") && 
        (progress[8] === "X" || progress[8] === "O")) && 
        progress[2] === progress[5] && progress[5] === progress[8]) {
        alert("We have a winner - " + progress[2])
    } else if (((progress[0] === "X" || progress[0] === "O") && 
        (progress[4] === "X" || progress[4] === "O") && 
        (progress[8] === "X" || progress[8] === "O")) && 
        progress[0] === progress[4] && progress[4] === progress[8]) {
        alert("We have a winner - " + progress[0])
    } else if (((progress[2] === "X" || progress[2] === "O") && 
        (progress[4] === "X" || progress[4] === "O") && 
        (progress[6] === "X" || progress[5] === "O")) && 
        progress[2] === progress[4] && progress[4] === progress[6]) {
        alert("We have a winner - " + progress[2]) 
    } else if (full = true) {
        alert("We have a draw. . . ") 
    } else {
        /*continue*/
    }
     
}

// }


