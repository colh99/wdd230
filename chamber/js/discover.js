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

// Last Visit
let lastVisitDate;
const now = Date.now();

if (window.localStorage.getItem('last-visit-date')) 
{
    lastVisitDate = window.localStorage.getItem('last-visit-date');
} else {
    lastVisitDate = now;
}

window.localStorage.setItem('last-visit-date', now);

const secondsSinceLastVisit = Math.floor((now - lastVisitDate) / 1000);
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / 86400);

document.getElementById('days-ago').textContent = daysSinceLastVisit;