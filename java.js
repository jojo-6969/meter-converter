function convert() {
    let meters = document.getElementById("meters").value;
    let kilometers = meters / 1000;
    let inches = meters * 39.3701;
    let feet = meters * 3.28084;
    document.getElementById("km").innerText = `Kilometers: ${kilometers.toFixed(3)}`;
    document.getElementById("inches").innerText =`Inches: ${inches.toFixed(3)}`;
    document.getElementById("feet").innerText = `Feet: ${feet.toFixed(3)}`;
}