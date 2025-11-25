import { places } from '../data/places.mjs';
console.log(places)

const showHere = document.querySelector("#showHere");

places.kananga_famous.forEach(place => {
    const placeDiv = document.createElement("div");
    placeDiv.classList.add("place");

    const picture = document.createElement("img");
    picture.src = place.picture;
    picture.alt = place.name;
    picture.loading = "lazy" //this is the lazy loading
    placeDiv.appendChild(picture);

    const h2 = document.createElement("h2");
    h2.textContent = place.name;
    placeDiv.appendChild(h2);

    const address = document.createElement("p");
    address.innerHTML = `<strong>Address:</strong> ${place.address}`;
    // address.innerHTML = `<span class="label">Address:</span> ${place.address}`;
    placeDiv.appendChild(address);

    const description = document.createElement("p");
    const words = place.description.split(" ");
    const shortDesc = words.slice(0, 13).join(" ") + "..."; //just display with little words first
    description.innerHTML = `<strong>Description:</strong> ${shortDesc}`;
    placeDiv.appendChild(description);

    const button = document.createElement("button")
    placeDiv.classList.add("place");
    button.textContent = "Learn More";
    placeDiv.appendChild(button);
    

    showHere.appendChild(placeDiv);
});


// Get dialog references
const mydialog = document.querySelector("#mydialog");
const myinfo = mydialog.querySelector("p");
const myclose = mydialog.querySelector("button");

// Close button event
myclose.addEventListener("click", () => mydialog.close());

// this is the modal functionality to all (Learn More)buttons
const buttons = document.querySelectorAll(".place button");
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const place = places.kananga_famous[index];
        myinfo.textContent = place.description; // full description
        mydialog.showModal();
    });
});
