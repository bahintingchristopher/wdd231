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


// const latestVisit = localStorage.getItem("latestVisit");

// if (latestVisit) {
//     const lastDate = new Date(latestVisit);
//     const now = new Date();

//     // Calculate difference in days
//     const diffMs = now - lastDate; 
//     const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

//     alert(
//         `Welcome! Let us know if you have any questions!\n` + //concatenate
//         `Your last visit was on ${lastDate.toLocaleString()}.\n` +
//         `That was ${diffDays} day(s) ago.`
//     );
// } else {
//   alert(
//     `Welcome! Let us know if you have any questions!\n` +
//     `This is your first visit.`
//   );
// }

// localStorage.setItem("latestVisit", new Date().toISOString());



document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("welcomeBanner");
    const visitMessage = document.getElementById("visit-message");
    const closeBtn = document.getElementById("closeBanner");

    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    let message = ""; // hold the final concatenated message.

 
   if (!lastVisit) { 
        message = "Welcome! Let us know if you have any questions.<br>This is your first Visit.";
}
    else {
        const lastTime = Number(lastVisit);
        const msInDay = 1000 * 60 * 60 * 24;
        const diffDays = Math.floor((now - lastTime) / msInDay);

        let secondLine = "";

        if (diffDays < 1) {
           
            secondLine = "\nAwsome! Back soon.";
        } else {
         

            const dayWord = diffDays === 1 ? "day" : "days";
            secondLine = `\nYour last visit was ${diffDays} ${dayWord} ago.`;

            secondLine += "\nAwsome! Back soon."; 
        }

        
        message = `Welcome! Let us know if you have any questions.\n${secondLine}`;
    }


    visitMessage.textContent = message; 

    
    localStorage.setItem("lastVisit", now);

    // Close Button functionality
    closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
    });

});