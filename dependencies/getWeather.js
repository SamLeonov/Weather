async function getWeather(City) {
    const api = ('https://api.openweathermap.org/data/2.5/weather?q=' +City+ '&APPID=a700dc47c62418d24f1ae0199d16b860&units=metric');
    let weather = await fetch(api);
    weather = await weather.json();
    const cont = document.getElementById('container');

    const state = document.createElement('div');
    state.className = 'item';
    state.textContent = "Current weather : a "+ weather.weather[0].description;
    cont.appendChild(state);
   

    const temperature = document.createElement('div');
    temperature.className = 'item';
    temperature.textContent = "Current temperature: "+weather.main.temp;
    cont.appendChild(temperature);

    const pressure = document.createElement('div');
    pressure.className = 'item';
    pressure.textContent = "Atmosphere pressure : "+Math.round(weather.main.pressure/1.333)+" mm/hg";
    cont.appendChild(pressure);

    const humidity = document.createElement('div');
    humidity.className = 'item';
    humidity.textContent = "Air humidity : "+weather.main.humidity + "%";
    cont.appendChild(humidity);

    const clouds = document.createElement('div');
    clouds.className = 'item';
    clouds.textContent = "Clouds: " +weather.clouds.all + "%";
    cont.appendChild(clouds);

    const wind = document.createElement('div');
    wind.className = 'item';
    wind.textContent = "Wind: " + weather.wind.speed + ' m/s';
    cont.appendChild(wind);

}

export {getWeather}