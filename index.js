console.log('Happy developing ✨')

let colorHex = newColorHex();

function newColorHex() {
    let number1 = generateNumber().toString(16);
    let number2 = generateNumber().toString(16);
    let number3 = generateNumber().toString(16);
    let number4 = generateNumber().toString(16);
    let number5 = generateNumber().toString(16);
    let number6 = generateNumber().toString(16);
    return `#${number1}${number2}${number3}${number4}${number5}${number6}`;

}
function generateNumber(){
    return Math.floor(Math.random() * 16);
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('box').style.backgroundColor = colorHex;
    document.getElementById('box').innerText = colorHex;
})



