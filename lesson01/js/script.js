// Sets the copyright year to the current year
const todaysdate = new Date();
document.querySelector("#copyrightyear").textContent = todaysdate.getFullYear();

// Sets the last modified to the current time and date
document.querySelector("#lastmod").textContent = document.lastModified;