document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inputForm");
    if (!form) {
        console.error("Couldn't find the Form element!");
        return;
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nitrogenInputElement     = document.getElementById("nitrogenInput");
        const phosphorusInputElement   = document.getElementById("phosphorusInput");
        const potassiumInputElement    = document.getElementById("potassiumInput");
        const temperatureInputElement  = document.getElementById("temperatureInput");
        const humidityInputElement     = document.getElementById("humidityInput");
        const phInputElement           = document.getElementById("phInput");
        const rainfallInputElement     = document.getElementById("rainfallInput");

        const nitrogenInput     = parseFloat(nitrogenInputElement.value) || 0;
        const phosphorusInput   = parseFloat(phosphorusInputElement.value) || 0; 
        const potassiumInput    = parseFloat(potassiumInputElement.value) || 0;
        const temperatureInput  = parseFloat(temperatureInputElement.value) || 0;
        const humidityInput     = parseFloat(humidityInputElement.value) || 0;
        const phInput           = parseFloat(phInputElement.value) || 0;
        const rainfallInput     = parseFloat(rainfallInputElement.value) || 0;

        const nitrogenCells = document.querySelectorAll(".nitrogen");
        const phosphorusCells = document.querySelectorAll(".phosphorus");
        const potassiumCells = document.querySelectorAll(".potassium");
        const temperatureCells = document.querySelectorAll(".temperature");
        const humidityCells = document.querySelectorAll(".humidity");
        const phCells = document.querySelectorAll(".ph");
        const rainfallCells = document.querySelectorAll(".rainfall");

        nitrogenCells.forEach((cell) => {
            const nitrogenValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
            if (nitrogenInput> nitrogenValue*1.3 || nitrogenValue*0.7>nitrogenInput) {
                cell.style.backgroundColor = "#ffcccc"; // Red
            } else {
                cell.style.backgroundColor = "#ffffff"; // White
            }
        });

    phosphorusCells.forEach((cell) => {
        const phosphorusValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
        if (phosphorusInput> phosphorusValue*1.3 || phosphorusValue*0.7>phosphorusInput) {
            cell.style.backgroundColor = "#ffcccc"; // Red
        } else {
            cell.style.backgroundColor = "#ffffff"; // White
        }
    });

    potassiumCells.forEach((cell) => {
        const potassiumValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
        if (potassiumInput> potassiumValue*1.3 || potassiumValue*0.7>potassiumInput) {
            cell.style.backgroundColor = "#ffcccc"; // Red
        } else {
            cell.style.backgroundColor = "#ffffff"; // White
        }
    });

    temperatureCells.forEach((cell) => {
        const temperatureValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
        if (temperatureInput> temperatureValue*1.3 || temperatureValue*0.7>temperatureInput) {
            cell.style.backgroundColor = "#ffcccc"; // Red
        } else {
            cell.style.backgroundColor = "#ffffff"; // White
        }
    });

    humidityCells.forEach((cell) => {
        const humidityValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
        if (humidityInput> humidityValue*1.3 || humidityValue*0.7>humidityInput) {
            cell.style.backgroundColor = "#ffcccc"; // Red
        } else {
            cell.style.backgroundColor = "#ffffff"; // White
        }
    });

    phCells.forEach((cell) => {
        const phValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
        if (phInput> phValue*1.3 || phValue*0.7>phInput) {
            cell.style.backgroundColor = "#ffcccc"; // Red
        } else {
            cell.style.backgroundColor = "#ffffff"; // White
        }
    });

    rainfallCells.forEach((cell) => {
        const rainfallValue = parseFloat(cell.textContent || cell.nodeValue) || 0;
        if (rainfallInput> rainfallValue*1.3 || rainfallValue*0.7>rainfallInput) {
            cell.style.backgroundColor = "#ffcccc"; // Red
        } else {
            cell.style.backgroundColor = "#ffffff"; // White
        }
    });
    });
});
