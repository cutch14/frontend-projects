// Select elements for dark mode switch

const colorSwitchElements = document.querySelectorAll(".color-switch");
const enableDarkMode = document.querySelector(".light-mode-container");
const enableLightMode = document.querySelector(".dark-mode-container");

// Toggle dark/light mode

function toggleColorMode() {
    colorSwitchElements.forEach(elem => elem.classList.toggle("color-switch"));
}

enableLightMode.addEventListener('click', toggleColorMode);
enableDarkMode.addEventListener('click', toggleColorMode);

// Populate user card

const userInput = document.querySelector(".search-input");
const endpoint = "https://api.github.com/users/";

let userData = {};

const submitBtn = document.querySelector(".search-button");
const errorMessage = document.querySelector(".error");

// Select elements to update

const profilePic = document.querySelector(".user-profile-img");
const profileUserName = document.querySelector(".username-title");
const profileUserTag = document.querySelector(".username-tag");
const profileUserJoined = document.querySelector(".joined-info");
const profileUserBio = document.querySelector(".user-bio");
const repoNumber = document.querySelector(".repo-count");
const followersNumber = document.querySelector(".followers-count");
const followingNumber = document.querySelector(".following-count");
const userLocation = document.querySelector(".location");
const userWebsite = document.querySelector(".website");
const userTwitter = document.querySelector(".twitter");
const userGitHub = document.querySelector(".github");



async function populateUserCard() {
    let userName = userInput.value;

    // Get GitHub user data
    async function findUser(userName) {
        const response = await fetch(`${endpoint}${userName}`)
        const data = await response.json();
        userData = data;
    }

    await findUser(userName);

    // Handle invalid entry error

    if(!userData.login) {
        errorMessage.classList.add("active");
    }

    if(userData.login) {
        errorMessage.classList.remove("active");
    }

    // Populate user card
    
    if(userData.avatar_url) {
        profilePic.src = userData.avatar_url;
    }

    // User name and user tag

    profileUserName.innerHTML = userData.name;
    profileUserTag.innerHTML = `@${userData.login}`;

    // Convert date

    let dateCreate = new Date(userData.created_at);
    let dateString = dateCreate.toDateString();

    if(userData.created_at) {
        profileUserJoined.innerHTML = `Joined ${dateString.slice(4)}`
    } else {
        profileUserJoined.innerHTML = "Not Applicable";
    }

    // Profile bio
    
    profileUserBio.innerHTML = userData.bio ? userData.bio : "No bio";

    // Reach

    repoNumber.innerHTML = userData.public_repos;
    followersNumber.innerHTML = userData.followers;
    followingNumber.innerHTML = userData.following;

    // Socials

    if(userData.location) {
        userLocation.innerHTML = userData.location;
        userLocation.style.opacity = 1;
    } else {
        userLocation.innerHTML = "Not Applicable";
        userLocation.style.opacity = 0.5;
    }

    if(userData.blog) {
        userWebsite.innerHTML = userData.blog;
        userWebsite.style.opacity = 1;
    } else {
        userWebsite.innerHTML = "Not Applicable";
        userWebsite.style.opacity = 0.5;
    }

    if(userData.twitter_username) {
        userTwitter.innerHTML = userData.twitter_username;
        userTwitter.style.opacity = 1;
    } else {
        userTwitter.innerHTML = "Not Applicable";
        userTwitter.style.opacity = 0.5;
    }

    if(userData.company) {
        userGitHub.innerHTML = userData.company;
        userGitHub.style.opacity = 1;
    } else {
        userGitHub.innerHTML = "Not Applicable";
        userGitHub.style.opacity = 0.5;
    }
}

submitBtn.addEventListener('click', populateUserCard);