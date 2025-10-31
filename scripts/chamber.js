
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});


const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
  lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}


// Select filter buttons
const allBtn = document.getElementById("all");
const cseBtn = document.getElementById("cse");
const wddBtn = document.getElementById("wdd");
const filterButtons = [allBtn, cseBtn, wddBtn];

// Select course items (all <li> except the filter buttons)
const courses = document.querySelectorAll(".course-list li:not(#all):not(#cse):not(#wdd)");

// Select credit total display
const creditDisplay = document.getElementById("credit-total");

// Main function to filter courses
function filterCourses(category) {
  // Highlight active filter button
  filterButtons.forEach(btn => btn.classList.remove("active"));
  document.getElementById(category.toLowerCase()).classList.add("active");

  let totalCredits = 0;

  // Show/hide courses + calculate credits
  courses.forEach(course => {
    const credits = parseInt(course.dataset.credits) || 0;
    if (category === "ALL" || course.classList.contains(category)) {
      course.style.display = "block";
      totalCredits += credits;
    } else {
      course.style.display = "none";
    }
  });

  
  if (creditDisplay) {
    creditDisplay.textContent = totalCredits;
  }
}

// Add click events for filter buttons
allBtn.addEventListener("click", () => filterCourses("ALL"));
cseBtn.addEventListener("click", () => filterCourses("CSE"));
wddBtn.addEventListener("click", () => filterCourses("WDD"));


filterCourses("ALL");

document.addEventListener("DOMContentLoaded", () => {

    // List of taken courses
    const takenCourses = ["WDD130", "CSE210", "WDD131", "CSE110", "CSE111"];
    
    // Select all filter buttons
    const filterButtons = document.querySelectorAll(".course-items li[id]");
    
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.id;
            const courses = document.querySelectorAll(".course-items li[data-credits]");

            courses.forEach(course => {
                // Reset check 
                course.innerHTML = course.textContent;

                // Show or hide based 
                if(filter === "all" || course.classList.contains(filter.toUpperCase())) {
                    course.style.display = "list-item";

                    // Add check mark if is taken
                    if(takenCourses.includes(course.textContent)) {
                        course.innerHTML += " ☑️"; // append a check 
                    }
                } else {
                    course.style.display = "none";
                }
            });
        });
    });
});

