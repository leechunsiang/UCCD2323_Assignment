
function scrollToTop() {
    window.scrollTo(
        {
            top: 0, behavior: 'smooth'
        }
    );
}
function toggleMenu(menuId) {
    var menuLinks = document.getElementById(menuId);
    menuLinks.classList.toggle("show-menu");
}


/* for cookie */
window.onload = function () {
    var consentBanner = document.getElementById('cookieConsentBanner');

    document.getElementById('accept').onclick = function () {
        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = "cookies_accepted=true; expires=" + expiryDate.toUTCString() + "; path=/";
        consentBanner.style.display = 'none';
    };

    document.getElementById('decline').onclick = function () {
        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 1); // Set for only 1 day for decline
        document.cookie = "cookies_accepted=true; expires=" + expiryDate.toUTCString() + "; path=/";
        consentBanner.style.display = 'none';
    };
};


