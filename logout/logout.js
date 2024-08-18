function logout() {
    // Clear cookies by setting their expiry date to the past
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "registrationDate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    
    // Redirect to login page after logging out
    window.location.href = "../login/login.html";
}
