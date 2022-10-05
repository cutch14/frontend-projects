const notifications = document.querySelector(".three");
const removeReadNotifications = document.querySelector(".mark-read");
const posts = document.querySelectorAll(".notification");
const newPostRedDot = document.querySelectorAll(".unread");

function removeUnread() {
    posts.forEach(elem => {
        if(elem.classList.contains('active')) {
            elem.classList.remove('active');
        }
    })

    newPostRedDot.forEach(elem => {
        elem.classList.remove('active');
    })

    notifications.style.visibility = 'hidden';
}

removeReadNotifications.addEventListener('click', removeUnread);
