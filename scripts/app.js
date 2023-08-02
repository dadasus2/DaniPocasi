const cityForm = document.querySelector('form');


const updateCity = async (city) => {
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    let condition = document.querySelector('.condition')
    condition.textContent = weather.WeatherText

    let temperature = document.querySelector('.temperature')
    temperature.textContent = weather.Temperature.Metric.Value + "°C"

    console.log(weather)
    let cityName = document.querySelector('.cityName')
    cityName.textContent = city
    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    const cityName = document.querySelector('.cityName')


    updateCity(city).then(data => console.log(data))
})