const BASE_URL = 'https://valorant-api.com/v1';
const divResults = document.getElementById('container');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const mapDescription = document.getElementById('map-description');
const modalImage = document.getElementById('modal-image');

const loadedMaps = new Set();

fetch(`${BASE_URL}/maps`)
    .then(res => res.json())
    .then(jsonResponse => {
        jsonResponse.data.forEach(map => {
            if (!loadedMaps.has(map.displayName)) {
                loadedMaps.add(map.displayName);

                const div = document.createElement('div');

                const img = document.createElement('img');
                img.src = map.listViewIconTall; 
                img.alt = map.displayName;

                const p = document.createElement('p');
                p.textContent = map.displayName;

                div.appendChild(img);
                div.appendChild(p);

                div.addEventListener('click', () => {
                    mapDescription.textContent = map.coordinates ; 
                    modalImage.src = map.listViewIcon; 
                    modal.classList.remove('hidden'); 
                });

                divResults.appendChild(div);
            }
        });
    });

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    mapDescription.textContent = ''; 
    modalImage.src = ''; 
});
