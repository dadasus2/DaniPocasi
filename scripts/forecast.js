const key = "yk7Mc56Zqa7ekKcfEKyi8s50xPn37L7i";






const getWeather = async (cityId) => {
    const link = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${cityId}?apikey=${key}&language=cs-cz`

    const output = await fetch(link + query)

    const data = await output.json()

    return data[0]
}

const getCity = async (city) => {
    const link = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`

    const output = await fetch(link + query)

    const data = await output.json()

    return data[0]
}






