async function loadData() {
    const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjlJkCo2w3WiFHcQ7CxBfPODReLEnNYhIpMJmbIvcVElA7xhuLBuNZZQIqxiaqWZ8IAyJw9Ctz9G2kXVr8Vo-WFxezZwBWrQJzFs5jsMIlASynKitpaur2lIfRSKDhA0MYDTUjp7-OdOulZ9XcB-JSNQNGX_QxlpLTM1E338EltM-UXtKFZ_eoAwPpRU1zMr8MvyIkmHpW5PZX1ElpAXi8f4fcO2NUsxZztFUPN7kIRya-JmPczHuXWp2XpqxyfEApjNE4X4_himIZj173sn6WtcpAFZw&lib=MLNJRbHbUWO-AeSj-02S0Lk6rrLPY8ULk"
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