async function loadCompanies() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        // Shuffling
        const shuffled = data
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

 
        const selected = shuffled.slice(0, 3); // 3 random companies
const container = document.getElementById('company-container');

container.innerHTML = `
  <h2>MEMBER'S SPOTLIGHT</h2>
  ${selected.map(company => `
    <div class="company-card">
      <img src="${company.image}" alt="${company.name}" class="company-logo">

      <h3>${company.name}</h3>

      <p>${company.address}</p>
      <p>${company.phone}</p>

      <p>
        <a href="${company.website}" target="_blank">Visit Website</a>
      </p>

      <p><strong>Membership Level:</strong> 
        ${company.membership_level === 1 ? "Bronze" :
          company.membership_level === 2 ? "Silver" :
          company.membership_level === 3 ? "Gold" : "Unknown"}
      </p>

      <p>${company.other_info}</p>
    </div>
  `).join('')}
`;


    } catch (error) {
        console.error("Error loading companies:", error);
    }
}

//  calling function
loadCompanies();
