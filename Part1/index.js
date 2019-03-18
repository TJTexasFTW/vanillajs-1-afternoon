console.log("Hello World");

const play(val) => {
    const getPlayer = document.getElementById("player");
    const element = document.getElementById(val);
        if (getPlayer.innerText === "X"){
            getPlayer.innerText = "O"
            element.innerText = "X";
        } else {
        getPlayer.innerText = "X"
        element.innerText = "O"
        }
}




