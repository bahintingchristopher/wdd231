const mydialog = document.querySelector("#mydialog");
const dialogText = document.querySelector("#mydialog-text");
const closeDialog = document.querySelector("#closeDialog");

// buttons
const openFree = document.querySelector("#openFree");
const openBronze = document.querySelector("#openBronze");
const openSilver = document.querySelector("#openSilver");
const openGold = document.querySelector("#openGold");

// show dialog with different text
openFree.addEventListener("click", () => {
  mydialog.showModal();
  dialogText.innerHTML = `Free Membership:<br>No Fee, for Non-profit organizations.`;
});

openBronze.addEventListener("click", () => {
  mydialog.showModal();
  dialogText.innerHTML = `Bronze Membership:<br>Mid-level paid membership.`;
});

openSilver.addEventListener("click", () => {
  mydialog.showModal();
  dialogText.innerHTML = `Silver Membership:<br>Higher-level paid membership.`;
});

openGold.addEventListener("click", () => {
  mydialog.showModal();
  dialogText.innerHTML = `Gold Membership:<br>Premium membership with maximum benefits.`;
});

// close dialog
closeDialog.addEventListener("click", () => {
  mydialog.close();
});
