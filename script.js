const accessKey = "yQzePyAUeZm9BCbkabSBHdXQRFvoNPOzEL75wWMdb8Y";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = '';
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }
    results.map((result) => {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('search-result', 'card', 'col-md-5', 'col-lg-3', 'p-0', 'm-3', 'shadow');

        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = '_blank';
        imgLink.rel = 'noopener';
        imgLink.classList.add('text-decoration-none', 'text-dark');

        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        image.classList.add('card-img-top', 'img-fluid');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const cardText = document.createElement('p');
        cardText.classList.add('card-text', 'text-center', 'fs-5', 'text-capitalize');
        cardText.textContent = result.alt_description;

        imgWrapper.appendChild(imgLink); 
        imgLink.appendChild(image); 
        imgLink.appendChild(cardBody); 
        cardBody.appendChild(cardText); 

        searchResults.appendChild(imgWrapper);
    });

    page++;
    if(page > 1) {
        showMore.classList.remove('d-none');
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});
