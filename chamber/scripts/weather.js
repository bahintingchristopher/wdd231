const lat = 12.445661036625317;
const lon = 122.29285726286544;
const apiKey = "4f54153c62ca313d92f85d2a2b81a446"; 

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// --- Select HTML elements ---
const currentCondition = document.querySelector('#current-condition');
const currentTemp = document.querySelector('#current-temp');
const currentWind = document.querySelector('#current-wind');
const currentHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

// --- Fetch current weather ---
async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) throw new Error("Failed to fetch current weather");
        const data = await response.json();

        currentCondition.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

        // Display temperature
        currentTemp.textContent = `${data.main.temp.toFixed(1)}°C`;

        // Display wind (convert m/s to km/h)
        const windKmh = (data.wind.speed * 3.6).toFixed(1);
        currentWind.textContent = `${windKmh} km/h`;

        // Display humidity
        currentHumidity.textContent = `${data.main.humidity}%`;

        
        // Display icon
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('src', iconUrl);
        weatherIcon.setAttribute('alt', data.weather[0].description);

        // Display description
        captionDesc.textContent = data.weather[0].description;
    } catch (error) {
        console.error(error);
    }
}

// --- Fetch 3-day forecast ---
async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error("Failed to fetch forecast: " + response.status);
        const data = await response.json();

        forecastContainer.innerHTML = ""; // Clear previous content

        const dailyData = {};

        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!dailyData[date]) {
                dailyData[date] = [];
            }
            dailyData[date].push(item);
        });

      
        const dates = Object.keys(dailyData).slice(0, 3);   // Take the next 3 days

        dates.forEach(date => {
            const dayItems = dailyData[date];

          
            const temps = dayItems.map(d => d.main.temp);
            const minTemp = Math.min(...temps).toFixed(1);
            const maxTemp = Math.max(...temps).toFixed(1);

            
            let middayItem = dayItems.reduce((prev, curr) => {
                const targetHour = 12;
                return Math.abs(new Date(curr.dt * 1000).getHours() - targetHour) <
                       Math.abs(new Date(prev.dt * 1000).getHours() - targetHour) ? curr : prev;
            });

            const forecastItem = document.createElement("div");
            forecastItem.classList.add("forecast-item");
            forecastItem.innerHTML = `
                <h3>${date}</h3>
                <p> Min: ${minTemp}°C / Max: ${maxTemp}°C </p>
                <p>
                    ${middayItem.weather[0].description.charAt(0).toUpperCase() + middayItem.weather[0].description.slice(1)}
                </p>

                <img src="https://openweathermap.org/img/wn/${middayItem.weather[0].icon}@2x.png" alt="${middayItem.weather[0].description}">
            `;
            forecastContainer.appendChild(forecastItem);
        });

    } catch (error) {
        console.error(error);
        forecastContainer.textContent = "Error fetching forecast.";
    }
}

// --- Running functions ---
getCurrentWeather();
getForecast();
