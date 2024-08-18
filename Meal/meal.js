
// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to check if a cookie exists
function cookieExists(name) {
  return getCookie(name) !== null;
}

// Function to handle accept cookies button click
function toggleMenu(menuId) {
  var menuLinks = document.getElementById(menuId);
  menuLinks.classList.toggle("show-menu");
}

  window.onload = function () {
    var content = document.getElementById('content');
    var consentBanner = document.getElementById('cookieConsentBanner');
    // Check if the 'cookies_accepted' cookie is set
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookies_accepted='))) {
      consentBanner.style.display = 'none';
    }

    document.getElementById('accept').onclick = function () {
      var expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      document.cookie = "cookies_accepted=true; expires=" + expiryDate.toUTCString() + "; path=/";
      consentBanner.style.display = 'none';

    };

    document.getElementById('decline').onclick = function () {
      var expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1);//set for only 1 day for decline
      document.cookie = "cookies_accepted=true; expires=" + expiryDate.toUTCString() + "; path=/";
      consentBanner.style.display = 'none';
    };
  }