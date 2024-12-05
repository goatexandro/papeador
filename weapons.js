const BASE_URL = 'https://valorant-api.com/v1';
const divResults = document.getElementById('container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalContent.querySelector('video')?.remove(); 
});

fetch(`${BASE_URL}/weapons`)
    .then(res => res.json())
    .then(jsonResponse => {
        jsonResponse.data.forEach(weapon => {
            const div = document.createElement('div');
            div.className = 'weapon-card'; 

            const img = document.createElement('img');
            img.src = weapon.displayIcon;
            img.alt = weapon.displayName;

            const p = document.createElement('p');
            p.textContent = weapon.displayName;

            div.appendChild(img);
            div.appendChild(p);
            div.addEventListener('click', () => {
                const skin = weapon.skins.find(
                    skin => !!skin.levels.find(level => !!level.streamedVideo) || !!skin.chromas.find(chroma => !!chroma.streamedVideo)
                );
                const level = skin?.levels.find(level => !!level.streamedVideo);
                const chroma = skin?.chromas.find(chroma => !!chroma.streamedVideo);

                const videoSrc = level?.streamedVideo || chroma?.streamedVideo;

                if (videoSrc) {
                    const video = document.createElement('video');
                    video.src = videoSrc;
                    video.controls = true;
                    video.autoplay = true;

                    modalContent.querySelector('video')?.remove();
                    modalContent.appendChild(video);
                    modal.classList.remove('hidden'); 
                } else {
                    alert('No hay video disponible para esta arma.');
                }
            });

            divResults.appendChild(div);
        });
    });
