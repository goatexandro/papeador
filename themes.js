const toggleMode = document.getElementById('toggleMode');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const body = document.body;
const header = document.querySelector('header');

const currentMode = localStorage.getItem('theme');

if (currentMode === 'dark') {
    body.classList.add('bg-black');  
    body.classList.remove('bg-gray-500');
    header.classList.add('bg-black');
    header.classList.remove('bg-white');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
} else if (currentMode === 'light') {
    body.classList.add('bg-gray-500'); 
    body.classList.remove('bg-black'); 
    header.classList.add('bg-white');
    header.classList.remove('bg-black');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
} else {
    body.classList.add('bg-gray-500'); 
    body.classList.remove('bg-black');
    header.classList.add('bg-white');
    header.classList.remove('bg-black');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
}

toggleMode.addEventListener('click', () => {
    if (body.classList.contains('bg-black')) {
        body.classList.remove('bg-black');
        body.classList.add('bg-gray-500'); 
        header.classList.remove('bg-black');
        header.classList.add('bg-white');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light'); 
    } else {
        body.classList.remove('bg-gray-500');
        body.classList.add('bg-black');  
        header.classList.remove('bg-white');
        header.classList.add('bg-black');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark'); 
    }
});
