console.log("Hello Me");

let progress = [];

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
    if (progress[0] === progress[1] && progress[1] === progress[2]) {
        alert("We have a winner - " + progress[0])
    } else if (progress[3] === progress[4] && progress[4] === progress[5]) {
        alert("We have a winner - " + progress[3]) 
    } else if (progress[6] === progress[7] && progress[7] === progress[8]) {
        alert("We have a winner - " + progress[6]) 
    } else if (progress[0] === progress[3] && progress[3] === progress[6]) {
        alert("We have a winner - " + progress[0]) 
    } else if (progress[1] === progress[4] && progress[4] === progress[7]) {
        alert("We have a winner - " + progress[1])
    } else if (progress[2] === progress[5] && progress[5] === progress[8]) {
        alert("We have a winner - " + progress[2])
    } else if (progress[0] === progress[4] && progress[4] === progress[8]) {
        alert("We have a winner - " + progress[0])
    } else if (progress[2] === progress[4] && progress[4] === progress[6]) {
        alert("We have a winner - " + progress[2]) 
    } else if (progress.every(notNull)) {
        alert("We have a draw. . . ") 
    } 

    function notNull(element, index, array) {
        return(element === "X" || element ==="O")
    }






