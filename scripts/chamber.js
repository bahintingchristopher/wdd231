// -----------------------------
// 🧭 Toggle nav menu
// -----------------------------
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});

// -----------------------------
// 📅 Display current year
// -----------------------------
const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// -----------------------------
// 🕒 Display last modified date
// -----------------------------
const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
  lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}

// -----------------------------
// 🎓 Course filtering + credits
// -----------------------------

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

  // Update total credits
  if (creditDisplay) {
    creditDisplay.textContent = totalCredits;
  }
}

// Add click events for filter buttons
allBtn.addEventListener("click", () => filterCourses("ALL"));
cseBtn.addEventListener("click", () => filterCourses("CSE"));
wddBtn.addEventListener("click", () => filterCourses("WDD"));

// Default view (show all on load)
filterCourses("ALL");
