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

// Input date and time as form input
document.getElementById('submit').addEventListener('click', AppendDate());
function AppendDate() {
    document.getElementById('timestamp').value = Date.now();
}

// Sets the copyright year to the current year
document.querySelector("#copyrightyear").textContent = todaysdate.getFullYear();

// Sets the last modified to the current time and date
document.querySelector("#lastmod").textContent = document.lastModified;

// Only display message banner on Monday or Tuesday
dayOfWeek = todaysdate.getDay();
messageBanner = document.getElementById("message-banner");

if (dayOfWeek == 1 || dayOfWeek == 2) {
    messageBanner.style.display = "block";
}

// LAZY LOADING
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// TO DO: Separate code for each page. Also, remove all Console log messages