function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result;

    if (unit === "C") {
        result = (temp * 9/5) + 32;
        document.getElementById("result").innerText = `${temp}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById("result").innerText = `${temp}°F is ${result.toFixed(2)}°C`;
    }
}
