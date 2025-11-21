const mydialog = document.querySelector("#mydialog");

// Buttons
const openFree = document.querySelector("#openFree");
const openBronze = document.querySelector("#openBronze");
const openSilver = document.querySelector("#openSilver");
const openGold = document.querySelector("#openGold");

// Function to open dialog with dynamic content
function showDialog(title, text) {
  mydialog.innerHTML = `
    <h2>${title}</h2>
    <p>${text}</p>
    <button id="closeDialog">Close</button>
  `;

  const closeDialog = mydialog.querySelector("#closeDialog");
  closeDialog.addEventListener("click", () => mydialog.close());

  mydialog.showModal();
}

// Event listeners
// Free Membership
openFree.addEventListener("click", () => {
  showDialog(
    "Free Membership",
    `
    <ul>
      <li>No fee for non-profit organizations</li>
      <li>Access to basic resources and networking</li>
      <li>View other member profiles</li>
    </ul>
    `
  );
});


// Bronze Membership
openBronze.addEventListener("click", () => {
  showDialog(
    "Bronze Membership",
    `
    <ul>
      <li>All Free membership benefits</li>
      <li>Mid-level paid membership perks</li>
      <li>Access to additional resources and events</li>
      <li>Basic discounts on selected services</li>
    </ul>
    `
  );
});

// Silver Membership
openSilver.addEventListener("click", () => {
  showDialog(
    "Silver Membership",
    `
    <ul>
      <li>All Free membership benefits</li>
      <li>Mid-level paid membership perks</li>
      <li>Access to premium resources</li>
      <li>Discounts on selected services</li>
      <li>Participation in special events</li>
    </ul>
    `
  );
});


openGold.addEventListener("click", () => {
  showDialog(
    "Gold Membership",
    `
    Premium membership with **maximum benefits**:<br>
    - Access to all company services and products<br>
    - Dividend sharing opportunities<br>
    - Exclusive discounts<br>
    - Invitations to VIP events<br>
    - Priority customer support<br>
    - Networking opportunities with top members
    `
  );
});

