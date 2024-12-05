const BASE_URL = 'https://valorant-api.com/v1';


const divResults = document.getElementById('container');
// 1. Mostrar los agentes
// 1.1 Mostrar descripción agente al hacer click
fetch(`${BASE_URL}/agents`)
    .then(res => res.json())
    .then(jsonResponse => {
        jsonResponse.data.forEach(agent => {
            addImage(agent.displayIconSmall, () => {
                divResults.innerHTML = agent.description;
            });
        });
    }
    );
// 2. Mostrar los mapas
/*fetch(`${BASE_URL}/maps`)
    .then(res => res.json())
    .then(jsonResponse => {
        jsonResponse.data.forEach(map => addImage(map.splash, null));
    }
);*/
// 3. Mostrar las armas
// 3.1 Mostrar vídeo armas al hacer click
fetch(`${BASE_URL}/weapons`)
    .then(res => res.json())
    .then(jsonResponse => {
        jsonResponse.data.forEach(weapon => addImage(weapon.displayIcon, () => {


            const skin = weapon.skins.find(
                skin => !!skin.levels.find(level => !!level.streamedVideo) || !!skin.chromas.find(chroma => !!chroma.streamedVideo)
            );  

            const level = skin.levels.find(level => !!level.streamedVideo);
            const chroma = skin.chromas.find(chroma => !!chroma.streamedVideo);


            const vid = document.createElement('video');
            vid.src = !!level ? level.streamedVideo : chroma.streamedVideo;
            divResults.innerHTML = '';
            divResults.appendChild(vid);
            vid.autoplay = true;
        }));
    }
    );


const addImage = (src, click) => {
    const img = document.createElement('img');
    img.width = "100";
    img.height = "100";
    img.src = src;
    img.onclick = click;
    document.body.appendChild(img);
}