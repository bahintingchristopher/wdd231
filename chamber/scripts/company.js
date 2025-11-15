async function loadCompanies() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

           
        const spotlight = data[Math.floor(Math.random() * data.length)];

        
        const remainingCompanies = data.filter(c => c !== spotlight);

      
        const shuffled = remainingCompanies
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

        const selected = [spotlight, ...shuffled.slice(0, 2)]; 

        const container = document.getElementById('company-container');

        container.innerHTML = `
            ${selected.map((company, index) => `
                <div class="company-card ${index === 0 ? "spotlight" : ""}">
                    <img src="${company.image}" alt="${company.name}" class="company-logo">
                    <h3>${company.name}</h3>
                    <p>${company.address}</p>
                    <p>${company.phone}</p>
                    <p><a href="${company.website}" target="_blank">Visit Website</a></p>
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

// Call function
loadCompanies();
