const BASE_URL = 'https://valorant-api.com/v1';
const divResults = document.getElementById('container');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');
const agentDescription = document.getElementById('agentDescription');
const modalImage = document.getElementById('modalImage');

fetch(`${BASE_URL}/agents`)
    .then(res => res.json())
    .then(jsonResponse => {
        jsonResponse.data.forEach(agent => {
            if (agent.fullPortrait) {
                const div = document.createElement('div');

                const img = document.createElement('img');
                img.src = agent.fullPortrait;
                img.alt = agent.displayName;

                const p = document.createElement('p');
                p.textContent = agent.displayName;

                div.appendChild(img);
                div.appendChild(p);

                div.addEventListener('click', () => {
                    agentDescription.textContent = agent.description;
                    modalImage.src = agent.displayIconSmall; 
                    modal.classList.remove('hidden'); 
                });

                divResults.appendChild(div);
            }
        });
    })

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    agentDescription.textContent = ''; 
});
