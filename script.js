const form = document.getElementById('searchForm');
const input = document.getElementById('username');
const profileContainer = document.getElementById('profile');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = input.value.trim();

    console.log('You searched for:', username);

    
    Gitname(username);
});

async function Gitname(Users) {
    const response = await fetch(`https://api.github.com/users/${Users}`);
    const data = await response.json();
    console.log(data);
}
