
import { modalcourses } from "../data/modalcourses.js";


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

// ---------- COURSE FILTER ----------
const allBtn = document.getElementById("all");
const cseBtn = document.getElementById("cse");
const wddBtn = document.getElementById("wdd");
const filterButtons = [allBtn, cseBtn, wddBtn];

// Select only course items (not the filter buttons)
const courses = document.querySelectorAll(".course-list li");

// for the active button
function setActiveButton(buttonId) {
  filterButtons.forEach(btn => btn.classList.remove("active")); // remove from all
    const btn = document.getElementById(buttonId);
    if (btn) btn.classList.add("active"); // add to clicked
}



// Optional: total credits display
const creditDisplay = document.getElementById("credit-total");

// List of completed courses
const takenCourses = ["WDD130", "CSE210", "WDD131", "CSE110", "CSE111"];

// ---------- MAIN FILTER FUNCTION ----------
function filterCourses(category, triggeredByClick = false) {
  // Highlight active button
  filterButtons.forEach(btn => btn.classList.remove("active"));
document.getElementById(category.toLowerCase()).classList.add("active");

  let totalCredits = 0;

  courses.forEach(course => {
    const credits = parseInt(course.dataset.credits) || 0;

    // Hide all first
    course.style.display = "none";
    course.classList.remove("completed");

    if (category === "ALL" || course.classList.contains(category)) {
      course.style.display = "block";
      totalCredits += credits;

      // Only add checkmark and function was triggered by a button click
  if (triggeredByClick && takenCourses.includes(course.textContent.trim())) {
        course.classList.add("completed");
      }
    }
  });

  if (creditDisplay) {
    creditDisplay.textContent = totalCredits;
  }
}

// ---------- EVENT LISTENERS -------
allBtn.addEventListener("click", () => filterCourses("ALL", true));
cseBtn.addEventListener("click", () => filterCourses("CSE", true));
wddBtn.addEventListener("click", () => filterCourses("WDD", true));

// Default: show all WITHOUT checkmarkss
filterCourses("ALL", false);

//MODAL
const courseDetails = document.getElementById("course-details");

modalcourses.forEach(course => {
  const courseLi = document.getElementById(course.code);
  if (!courseLi) return;

  courseLi.addEventListener("click", () => {
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Certificate:</strong> ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    const closeBtn = document.getElementById("closeModal");
    closeBtn.addEventListener("click", () => courseDetails.close());
  });
});
