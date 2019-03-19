// console.log("Please let this go fast");
// console.log("The House ALWAYS wins!")

const cardID_JS = document.getElementById("cardID").value;

const styleAssign_JS = document.getElementById("styleAssign");
console.log("STYLE: " + styleAssign_JS);

function setCard() {
    const card = document.getElementById(cardID_JS.value);
    console.log("CARD: " + card);
    // card.style.color = styleAssign_JS.value;
    document.getElementById("diamonds").innerHTML = cardID_JS;
}

console.log("CARD ID: " + cardID_JS);


// const id = document.getElementById('idInput')
// const color = document.getElementById('colorInput')

// const setCard = () => {
//     const card = document.getElementById(id.value)
//     console.log(card)
//     // card.style.color = color.value;
// }