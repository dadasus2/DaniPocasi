const cityForm = document.querySelector('form');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateCity = async (city) => {
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    let condition = document.querySelector('.condition')
    condition.textContent = weather.WeatherText

    let temperature = document.querySelector('.temperature')
    temperature.textContent = weather.Temperature.Metric.Value + "°C"

    let cityName = document.querySelector('.cityName')
    cityName.textContent = city

    document.querySelector('.card').style.display = "block"

    console.log(weather)

    if (weather.IsDayTime) {
        time.src = "day.svg"
    }
    else {
        time.src = "night.svg"
    }

    const iconSrc = `icons/${weather.WeatherIcon}.svg`
    icon.src = iconSrc


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