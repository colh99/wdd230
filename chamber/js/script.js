// HAMBURGER MENU
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// DATE AND TIME
// Get a date object to use
const todaysdate = new Date();

// Sets today's date at the top of the page
const datefieldUK = document.querySelector("#todays-date"); // for european/family history format with day first.

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(todaysdate);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Sets the copyright year to the current year
document.querySelector("#copyrightyear").textContent = todaysdate.getFullYear();

// Sets the last modified to the current time and date
document.querySelector("#lastmod").textContent = document.lastModified;
