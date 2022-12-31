

const endpoint = "https://api.github.com/users/";
let userName = "octocat";
let userData = {};

async function findUser(username) {
    const response = await fetch(`${endpoint}${userName}`)
    const data = await response.json();
    userData = data;
}

findUser();

function populateUserCard() {
    console.log(userData);
}

