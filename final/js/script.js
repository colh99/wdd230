// HAMBURGER MENU
function toggleMenu() {
    document.getElementById("top-nav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("header-logo").classList.toggle("open");
    document.getElementById("hero-main").classList.toggle("open");
    if (document.getElementById("hero-text") != null) {
        document.getElementById("hero-text").classList.toggle("open");
        document.getElementById("hero-button").classList.toggle("open");
    }
    
    
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// Sets the last modified to the current time and date
document.querySelector("#lastmod").textContent = document.lastModified;