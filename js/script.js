
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

for (let j = 0; j < workcards.length; j++) {

    for (let i = 0; i < tags.length; i++) {
        let tagSrc = tags[i].src;
        let tagAlt = tags[i].title;
        // if (workcards[i].labels)
        console.log(tagSrc + " " + tagAlt)
    };
}
let cardsInput = (workcard) => {
    let cardHTML = "";
    workcard.forEach ((site) => {
        let tagsHTML = "";
        
        cardHTML += `
        <div>
        <h3>${site.title}</h3>
        <p>${site.titletext}</p>
        <h4>About</h4>
        <p>${site.description}</p>
        <h4>Techs</h4>
        <div class="techs"></div>
        </div>
        <div class="right-container"><img src="${site.image}" alt="Image of ${site.title}"></div>
        `
    });
    return cardHTML
};
const cardsContent = cardsInput(workcards);
const workcardContainer = document.querySelector(".workcards");
workcardContainer.innerHTML = cardsContent;

let activePageApplication = () => {
    const activePage = document.title
    const indexTitle = "Portfolio - Robin Lysaker";
    const aboutTitle = "About Robin"
    const worksTitle = "Works"
    const blogTitle = "Robins Blog"
    const allLinks = document.querySelectorAll(".header-links a")
    
    switch (activePage){
        case indexTitle:
            allLinks[0].classList.add(".active");
            break;
        case aboutTitle:
            allLinks[1].classList.add(".active");
            break;
        case worksTitle:
            allLinks[2].classList.add(".active");
            break;
        case blogTitle:
            allLinks[3].classList.add(".active");
            break;
    }
}

window.onload = () => {
    activePageApplication();
}
