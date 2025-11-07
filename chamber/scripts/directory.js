
document.addEventListener('DOMContentLoaded', () => {
   
    const membersContainer = document.getElementById('members'); 
    const gridBtn = document.getElementById('grid-view-btn');  
    const listBtn = document.getElementById('list-view-btn'); 
    const navbutton = document.querySelector('#ham-btn');
    const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});

// ---------- DATE & LAST MODIFIED ----------
const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
  lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}


    if (!membersContainer) {
        console.error("The main container element with ID 'members' is missing.");
        return; 
    }


    async function getMembers() {
        try {
           
            const response = await fetch("data/members.json"); 
            const members = await response.json();
            displayMembers(members);
            
           
            initializeViewToggle();
        } catch (error) {
            console.error("Error loading member data:", error);
        }
    }

    function displayMembers(members) {
    membersContainer.innerHTML = "";
    
    const membershipNames = {1: "Member", 2: "Silver", 3: "Gold"};

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="150" height="100">
            <div class="member-info">
                <span class="name">${member.name}</span>
                <span class="address">${member.address}</span>
                <span class="phone">${member.phone}</span>
                <span class="website"><a href="${member.website}" target="_blank">Website</a></span>
                <span class="membership-level">Membership Level: ${membershipNames[member.membership_level]}</span>
                <span class="other-info">${member.other_info}</span>
            </div>
        `;

        membersContainer.appendChild(card);
    });
}

   

    function switchToView(view) {
        membersContainer.classList.remove('grid', 'list');
        membersContainer.classList.add(view);

        
        if (gridBtn && listBtn) { 
            gridBtn.classList.remove('active');
            listBtn.classList.remove('active');

            if (view === 'grid') {
                gridBtn.classList.add('active');
            } else if (view === 'list') {
            listBtn.classList.add('active');
            }
        }
    }

    function initializeViewToggle() {
        if (gridBtn) {
            gridBtn.addEventListener('click', () => {
                switchToView('grid');
            });
        }
        if (listBtn) {
            listBtn.addEventListener('click', () => {
                switchToView('list');
            });
        }
        
           if (membersContainer.classList.contains('list')) {
            switchToView('list');
        } else {
            switchToView('grid');
        }
    }

      getMembers();
});

