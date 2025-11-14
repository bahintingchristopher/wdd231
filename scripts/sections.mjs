// sections.mjs
export function populateSections(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");

  // Clear existing options
  sectionSelect.innerHTML = '<option value="0" disabled selected>--</option>';

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = section.sectionNumber;
    sectionSelect.appendChild(option);
  });
}
