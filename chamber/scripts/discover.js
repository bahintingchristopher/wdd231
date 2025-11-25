import { places } from '../data/places.mjs';
console.log(places)

const showHere = document.querySelector("#showHere");

places.kananga_famous.forEach(place => {
    const placeDiv = document.createElement("div");
    placeDiv.classList.add("place");

    const picture = document.createElement("img");
    picture.src = place.picture;
    picture.alt = place.name;
    picture.loading = "lazy"; 
    placeDiv.appendChild(picture);

    const h2 = document.createElement("h2");
    h2.textContent = place.name.toUpperCase(); //this will make all letters CAPITAL
    placeDiv.appendChild(h2);

    const address = document.createElement("p");
    address.innerHTML = `<strong>Address:</strong> ${place.address}`;
    placeDiv.appendChild(address);

    const description = document.createElement("p");
    const words = place.description.split(" ");
    const shortDesc = words.slice(0, 13).join(" ") + "...";
    description.innerHTML = `<strong>Description:</strong> ${shortDesc}`;
    placeDiv.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Learn More";
    placeDiv.appendChild(button);

  
    let isExpanded = false;

    button.addEventListener("click", () => {
        if (isExpanded) {
            description.innerHTML = `<strong>Description:</strong> ${shortDesc}`;
            button.textContent = "Learn More";
        } else {
            description.innerHTML = `<strong>Description:</strong> ${place.description}`;
            button.textContent = "Show Less";
        }
        isExpanded = !isExpanded;
    });

    showHere.appendChild(placeDiv);
});


const latestVisit = localStorage.getItem("latestVisit");

if (latestVisit) {
    const lastDate = new Date(latestVisit);
    alert(`Welcome back! Your last visit was on ${lastDate.toLocaleString()}.`);
} else {
    alert("Welcome! This is your first visit.");
}

// Update localStorage with current visit
const now = new Date();
localStorage.setItem("latestVisit", now.toISOString());
