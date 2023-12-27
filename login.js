// NÃO ELIMINAR, É PARA O PERFIL ESTAR COM LOGIN A FUNCIONAR :)
// Function to dynamically redirect to the logged-in user's profile
function redirectToLoggedInUserProfile() {
    // Retrieve the logged-in user from local storage
    var loggedInUsername = localStorage.getItem('loggedInUser');

    // Check if a user is logged in
    if (loggedInUsername) {
        // Redirect to the profile page of the logged-in user
        window.location.href = 'profile.html?username=' + encodeURIComponent(loggedInUsername);
    } else {
        // If no user is logged in, you might want to redirect to the login page or handle the case accordingly
        alert('Please log in to view your profile.');
        // window.location.href = 'login.html'; // Uncomment and add the login page URL if needed
    }
}