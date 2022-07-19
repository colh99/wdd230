const dataPath = "json/data.json";
const cards = document.querySelector(".cards");

fetch(dataPath)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });


function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement("section");
    card.setAttribute("class", "card temple-card");
    let templeName = document.createElement("h3");
    let templeImg = document.createElement("img");
    let dedicated = document.createElement("p");
    let churchServices = document.createElement("h4");
    let clothingRental = document.createElement("p");
    let cafeteria = document.createElement("p");
    let patronHousing = document.createElement("p");
    let distributionCenter = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    let websiteLink = document.createElement("a");

    // Change the textContent property of the templeName element to contain the temple's name
    templeName.textContent = `${temple.name} Temple`;

    // Build the image attributes by using the setAttribute method for various values
    templeImg.setAttribute("src", temple.imageurl);
    templeImg.setAttribute("alt", `Picture of the ${temple.name} temple`);
    templeImg.setAttribute("loading", "lazy");

    // Set textContent property for dedication date and services
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    dedicated.setAttribute("id", "dedicated");
    churchServices.textContent = "Church-offered services:";
    clothingRental.textContent = `Clothing Rental: ${temple.clothingRental}`;
    cafeteria.textContent = `Cafeteria: ${temple.cafeteria}`;
    patronHousing.textContent = `Patron Housing: ${temple.patronHousing}`;
    distributionCenter.textContent = `Distribution Center Nearby: ${temple.distributionCenterNearby}`;

    // Change the textContent property of the p elements to add the address, phone, and website link
    address.textContent = `Address: ${temple.address}`;
    address.setAttribute("id", "address")
    phone.textContent = `Phone: ${temple.phone}`;
    websiteLink.textContent = "View on churchofjesuschrist.org";
    websiteLink.setAttribute("href", temple.website)
    website.appendChild(websiteLink);
    

    // Add/append the section(card) with all the elements
    card.appendChild(templeName);
    card.appendChild(templeImg);
    card.appendChild(dedicated);
    card.appendChild(churchServices);
    card.appendChild(clothingRental);
    card.appendChild(cafeteria);
    card.appendChild(patronHousing);
    card.appendChild(distributionCenter);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.getElementById("cards").appendChild(card);
}