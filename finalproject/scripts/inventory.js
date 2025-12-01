document.addEventListener('DOMContentLoaded', () => {
    const carsContainer = document.getElementById('cars-container');
    const dialog = document.getElementById('mydialog');

    if (!carsContainer || !dialog) {
        console.error("Required elements missing.");
        return;
    }

    // Fetch car data
    async function getCars() {
        try {
            const response = await fetch("data/cars.json");
            const data = await response.json();
            displayCars(data.cars);
        } catch (error) {
            console.error("Error loading car data:", error);
        }
    }

    // Display cars
    function displayCars(cars) {
        carsContainer.innerHTML = "";

        cars.forEach(car => {
            const card = document.createElement("div");
            card.classList.add("cars-container");

            // Card content with overlay button
            card.innerHTML = `
                <div class="car-image-container" style="position: relative;">
                    <img src="${car.image}" 
                         alt="${car.make} ${car.model}" 
                         width="300" 
                         height="200" 
                         loading="lazy" 
                         decoding="async">
                    <button class="adv-btn">Advantages</button>
                </div>
                <div class="car-info">
                    <span class="make"><strong>Make:</strong> ${car.make}</span>
                    <span class="model"><strong>Model:</strong> ${car.model}</span>
                    <span class="year"><strong>Year:</strong> ${car.year}</span>
                    <span class="price"><strong>Price:</strong> $${car.price.toLocaleString()}</span>
                </div>
            `;

            // Button click opens modal
            const advBtn = card.querySelector('.adv-btn');
            advBtn.addEventListener('click', () => {
                dialog.innerHTML = `
                <div class="dialog-header">
                     <h2>UNIQUE FEATURES</h2>
                    <button id="closeDialog">X</button>
                </div>
                 
                    
                    <img src="${car.image}" width="300" height="200" loading="lazy" decoding="async">\
                    <h3>${car.make} ${car.model}</h3>
                   
                    <p>${car.description}</p>
                    
                `;
                dialog.showModal();

                dialog.querySelector("#closeDialog").addEventListener("click", () => {
                    dialog.close();
                });
            });

            carsContainer.appendChild(card);
        });
    }

    getCars();
});
