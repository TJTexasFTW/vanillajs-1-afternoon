console.log("Hello Me");

let progress = [];

function play(val) {
    const getPlayer = document.getElementById("player");
    const element = document.getElementById(val);
    console.log("val: = " + val);
    
        if (getPlayer.innerText === "X"){
            progress[val] = getPlayer.innerText;
            getPlayer.innerText = "O"
            element.innerText = "X";
        } else {
        progress[val] = getPlayer.innerText;
        getPlayer.innerText = "X"
        element.innerText = "O"
        
        }
        console.log(progress);
}




