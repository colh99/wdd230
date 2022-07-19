const dataPath = "json/data.json";
const templeCard = document.getElementById("featured-temple");

fetch(dataPath)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const temples = jsonObject['temples'][0];
        displayTemples(temples);
    });


function displayTemples(temple) {
    // Create elements to add to the document
    let templeName = document.createElement("h3");
    let templeImg = document.createElement("img");
    let dedicated = document.createElement("p");
    let linkToTemplesP = document.createElement("p");
    let linkToTemplesA = document.createElement("a");
    
    // Change the textContent property of the templeName element to contain the temple's name
    templeName.textContent = `${temple.name} Temple`;

    // Build the image attributes by using the setAttribute method for various values
    templeImg.setAttribute("src", temple.imageurl);
    templeImg.setAttribute("alt", `Picture of the ${temple.name} temple`);
    templeImg.setAttribute("loading", "lazy");

    // Set textContent property for dedication date
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    dedicated.setAttribute("id", "dedicated");

    // Set up link to Temples page
    linkToTemplesA.textContent = "See other temples";
    linkToTemplesA.setAttribute("href", "temples.html");
    linkToTemplesP.appendChild(linkToTemplesA);

    // Add/append the section(card) with all the elements
    templeCard.appendChild(templeName);
    templeCard.appendChild(templeImg);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(linkToTemplesP);
}