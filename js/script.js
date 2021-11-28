
const nav = document.querySelectorAll(".nav");
let linkInput = (cont) => {
    cont.forEach ((container) => {
        links.forEach ((link) => {
            container.innerHTML += `
                <a href="${link.src}">${link.title}</a>
                `
        });
    });
};
linkInput(nav);

let cardHTML = "";

let cardsInput = (workcard) => {
    workcard.forEach ((site) => {
        let labelObj = site.labels
        let tagsHTML = "";
        labelObj.forEach ((label) => {
            if (label.html) {
                tagsHTML += `<img src="${tags.html}" alt="HTML Icon">`
            }
            if (label.css) {
                tagsHTML += `<img src="${tags.css}" alt="CSS Icon">`
            }
            if (label.js) {
                tagsHTML += `<img src="${tags.js}" alt="Javascript">`
            }
            if (label.static) {
                tagsHTML += `<p class="tag-btn">${tags.static}</p>`
            }
            if (label.responsive) {
                tagsHTML += `<p class="tag-btn">${tags.responsive}</p>`
            }
            if (label.school) {
                tagsHTML += `<p class="tag-btn">${tags.school}</p>`
            }
        })
        
        cardHTML += `
        <div>
            <div class="left-container">
                <h3>${site.title}</h3>
                <p>${site.titletext}</p>
                <h4>About</h4>
                <p>${site.description}</p>
                <div class="techs">
                <h4>Techs</h4>
                <div class="flex">
                    ${tagsHTML}
                </div>
                </div>
            </div>
            <div class="right-container">
                <img src="${site.image}" alt="Image of ${site.title}">
            </div>
        </div>
            `
        });
        return cardHTML
    };
const cardsContent = cardsInput(workcards);
const workcardContainer = document.querySelector(".workcards");
workcardContainer.innerHTML = cardsContent;


