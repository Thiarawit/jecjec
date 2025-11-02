async function loadData() {
    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyN_VagbGUeZD7ktFjF-ScLjZuVL7X9vvZSZj9ssCAQ6oGoYZIjZ8wFeuggrfE2cwVD/exec"
    )
    const events = await response.json()

    elements.tempValue.textContent = events[0] + '°C'
    elements.humidityValue.textContent = events[1] + '%'
    elements.maxTemp.textContent = events[3] + '°C'
    elements.minTemp.textContent =events[4] + '°C'
    elements.avgTemp.textContent = events[2] + '°C'
    elements.maxHumidity.textContent = events[6] + '%'
    elements.minHumidity.textContent = events[7] + '%'
    elements.avgHumidity.textContent = events[5] + '%'
}

loadData()