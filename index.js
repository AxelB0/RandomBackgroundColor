console.log('Happy developing ✨')

let colorHex = newColorHex();

function newColorHex() {
    let generatedColor = '#';
    for (let i = 0; i < 6; i++) {
        generatedColor += generateNumber().toString(16);
    }
    return generatedColor;

}

function generateNumber() {
    return Math.floor(Math.random() * 16);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('box').style.backgroundColor = colorHex;
    document.getElementById('box').innerText = colorHex;
})



