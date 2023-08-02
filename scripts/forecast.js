const key = "kFyHcl9yojt7NZlK1rl6OVhn9XATrwtb";

const getWeather = async (cityId) => {
    const link = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${cityId}?apikey=${key}&language=cs-cz`

    const output = await fetch(link + query)

    const data = await output.json()

    return data[0]
}

const getCity = async (city) => {
    const link = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`

    const output = await fetch(link + query)

    const data = await output.json()

    return data[0]
}






