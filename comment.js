function leaveComment() {
    var queryParams = new URLSearchParams(window.location.search);
    var username = localStorage.getItem('loggedInUser');

    if (username) {
        var commentText = document.getElementById('commentInput').value;

        // Check if the comment is not empty
        if (!commentText.trim()) {
            alert('Please enter a valid comment.');
            return;
        }

        // Create a comment object
        var comment = {
            username: username,
            text: commentText
        };

        // Save the comment to local storage
        if (!localStorage.getItem('comments')) {
            localStorage.setItem('comments', JSON.stringify([]));
        }

        var comments = JSON.parse(localStorage.getItem('comments'));
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        // Update the displayed comments
        displayComments();
    } else {
        alert('User not found.');
    }
}

function displayComments() {
    var commentsContent = document.getElementById('commentsContent');
    var comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Clear previous comments
    commentsContent.innerHTML = '';

    // Display comments
    if (comments.length > 0) {
        commentsContent.innerHTML += '<h3>Comentários</h3>';
        comments.forEach(function(comment) {
            commentsContent.innerHTML += '<p><strong>' + comment.username + ':</strong> ' + comment.text + '</p>';
        });
    }
}

displayComments();

