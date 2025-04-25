// Track the count in session
let notificationCount = 0;

// Elements
const form = document.getElementById('notifyForm');
const titleInput = document.getElementById('title');
const messageInput = document.getElementById('message');
const iconInput = document.getElementById('icon');
const notifyCount = document.getElementById('notifyCount');

// Save/restore count in sessionStorage
if (sessionStorage.getItem('notifyCount')) {
  notificationCount = Number(sessionStorage.getItem('notifyCount'));
  notifyCount.textContent = `Notifications sent: ${notificationCount}`;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = titleInput.value.trim() || "Movie Alert";
  const message = messageInput.value.trim();
  const icon = iconInput.value.trim() || "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3ac.png"; // Movie 🎬 emoji

  if (!message) {
    alert("Please enter a message for the notification.");
    messageInput.focus();
    return;
  }

  // Request notification permission if needed
  if (Notification.permission === "granted") {
    showNotification(title, message, icon);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification(title, message, icon);
      } else {
        alert("You must allow notifications to use this feature.");
      }
    });
  } else {
    alert("You have denied notifications for this site.");
  }
});

function showNotification(title, message, icon) {
  new Notification(title, {
    body: message,
    icon: icon
  });
  notificationCount++;
  sessionStorage.setItem('notifyCount', notificationCount);
  notifyCount.textContent = `Notifications sent: ${notificationCount}`;
}
