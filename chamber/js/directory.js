const dataPath = "data/data.json";
const cards = document.querySelector(".cards");

fetch(dataPath)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const partners = jsonObject['partners'];
        partners.forEach(displayPartners);
    });


function displayPartners(partner) {
    // Create elements to add to the document
    let card = document.createElement("section");
    card.setAttribute("class", "pop-out-box");
    card.setAttribute("style", `border: 3px solid ${partner.level}`)
    let businessName = document.createElement("h2");
    let businessLogo = document.createElement("img");
    let email = document.createElement("p");
    let website = document.createElement("p");
    let websiteLink = document.createElement("a");

    // Change the textContent property of the businessName element to contain the partner's full name
    businessName.textContent = `${partner.name}`;

    // Build the image attributes by using the setAttribute method for various values
    businessLogo.setAttribute("src", partner.imageurl);
    businessLogo.setAttribute("alt", `Logo of ${partner.name}`);
    businessLogo.setAttribute("loading", "lazy");

    // Change the textContent property of the p elements to add the email and website
    email.textContent = `${partner.email}`;
    websiteLink.textContent = "Website";
    websiteLink.setAttribute("href", partner.website)
    website.appendChild(websiteLink);
    

    // Add/append the section(card) with all the elements
    card.appendChild(businessName);
    card.appendChild(businessLogo);
    card.appendChild(email);
    card.appendChild(website);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.getElementById("cards").appendChild(card);
}


