document.addEventListener("DOMContentLoaded", () => {
    const sideBar = document.querySelector(".side-bar-container");
    const menuBtn = document.querySelector(".menu-button");
    const closeBtn = document.querySelector(".close-button");

    // Open Mobile Menu
    menuBtn.addEventListener("click", () => {
        sideBar.style.display = "flex";
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
    });

    // Close Mobile Menu
    closeBtn.addEventListener("click", () => {
        sideBar.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "block";
    });
});
function goToDonatePage() {
    window.location.href = "donate.html";
}