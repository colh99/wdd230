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

console.log(daysSinceLastVisit);
console.log(secondsSinceLastVisit);

document.getElementById('days-ago').textContent = daysSinceLastVisit;