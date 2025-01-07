document.getElementById("submit").addEventListener("click", function () {
    // Inputed conditions from the user
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
    // Plants and data from table
    const rows = document.querySelectorAll("#dataTable tr");
    const plants = [];
    
    // Collect data from the table
    rows.forEach(function (row, index) {
        if (index === 0) return; //titles

        const cells = row.querySelectorAll("td");
        const plantName = cells[0].textContent.trim();
        const nitrogenValue = parseFloat(cells[1].textContent) || 0;
        const phosphorusValue = parseFloat(cells[2].textContent) || 0;
        const potassiumValue = parseFloat(cells[3].textContent) || 0;
        const temperatureValue = parseFloat(cells[4].textContent) || 0;
        const humidityValue = parseFloat(cells[5].textContent) || 0;
        const phValue = parseFloat(cells[6].textContent) || 0;
        const rainfallValue = parseFloat(cells[7].textContent) || 0;
        plants.push({
            name:        plantName,
            nitrogen:    nitrogenValue,
            phosphorus:  phosphorusValue,
            potassium:   potassiumValue,
            temperature: temperatureValue,
            humidity:    humidityValue,
            ph:          phValue,
            rainfall:    rainfallValue
        });
    });

    // Filter the plants
    let report = "";
    let count = { "7": [], "6": [], "5": [], "4": [], "3": [], "2": [], "1": [], "0": [] };

    plants.forEach(function (plant) {
        let matches = 0;
        let adjustments = [];

        if (nitrogenInput > plant.nitrogen * 1.3) {
            adjustments.push("Decrease Nitrogen");
        }else if(plant.nitrogen * 0.7 > nitrogenInput){
            adjustments.push("Increase Nitrogen");
        }else {
            matches++;
        }

        if (phosphorusInput > plant.phosphorus * 1.3) {
            adjustments.push("Decrease Phosphorus");
        }else if(plant.phosphorus * 0.7 > phosphorusInput){
            adjustments.push("Increase Phosphorus");
        }else {
            matches++;
        }

        if (potassiumInput > plant.potassium * 1.3) {
            adjustments.push("Decrease Potassium");
        }else if(plant.potassium * 0.7 > potassiumInput){
            adjustments.push("Increase Potassium");
        }else {
            matches++;
        }

        if (temperatureInput > plant.temperature * 1.3) {
            adjustments.push("Decrease Temperature");
        }else if(plant.temperature * 0.7 > temperatureInput){
            adjustments.push("Increase Temperature");
        }else {
            matches++;
        }

        if (humidityInput > plant.humidity * 1.3) {
            adjustments.push("Decrease Humidity");
        }else if(plant.humidity * 0.7 > humidityInput){
            adjustments.push("Increase Humidity");
        }else {
            matches++;
        }

        if (phInput > plant.ph * 1.3) {
            adjustments.push("Decrease pH");
        }else if(plant.ph * 0.7 > phInput){
            adjustments.push("Increase pH");
        }else {
            matches++;
        }

        if (rainfallInput > plant.rainfall * 1.3) {
            adjustments.push("Rainfall is too much.");
        }else if(plant.rainfall * 0.7 > rainfallInput){
            adjustments.push("Rainfall is too low.");
        }else {
            matches++;
        }

        if (matches > 0) {
            if (!adjustments.length) {
                count[matches].push(plant.name);
            } else {
                count[matches].push(plant.name + " " + adjustments.join(", "));
            }
        }
    });

    // Write the report
    for (let i = 7; i >= 0; i--) {
        if (count[i].length > 0) {
            report += `${i}/7 Condition has meet with these plants:\n`;
            report += count[i].join("\n") + "\n\n";
        }
    }

    // Send it to div
    document.getElementById("reportOutput").textContent = report;
});
