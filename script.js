const sideNavBar = document.getElementById("sideNavbar");
const toggleBtn = document.getElementById("bxIcon");

toggleBtn.addEventListener("click", () => {
  sideNavBar.classList.toggle("collapsed");
});
