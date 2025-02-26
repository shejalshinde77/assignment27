const cityNameInput = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');
const cityInfoDiv = document.getElementById('city-info');

const cityInfo = {
    'New York': {
        population: '8,420,527',
        area: '302.6 sq mi',
        description: 'New York City is the largest city in the United States.'
    },
    'Los Angeles': {
        population: '3,999,759',
        area: '502.7 sq mi',
        description: 'Los Angeles is the second-largest city in the United States.'
    },
    'Chicago': {
        population: '2,670,504',
        area: '234 sq mi',
        description: 'Chicago is the third-largest city in the United States.'
    }
};

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cityName = cityNameInput.value.trim();
    if (cityName) {
        const cityData = cityInfo[cityName];
        if (cityData) {
            cityInfoDiv.innerHTML = `
                <h2>${cityName}</h2>
                <p>Population: ${cityData.population}</p>
                <p>Area: ${cityData.area}</p>
                <p>${cityData.description}</p>
            `;
        } else {
            cityInfoDiv.innerHTML = `<p>City not found.</p>`;
        }
    } else {
        cityInfoDiv.innerHTML = `<p>Please enter a city name.</p>`;
    }
});
