const formElement = document.querySelector('form')

 

// Elements from form
const handleFormSubmit = function(event) {
    event.preventDefault();
  
const userName = document.querySelector('#postUsername').value.trim();
const titlePost = document.querySelector('#postTitle').value.trim();
const contentPost = document.querySelector('#postContent').value.trim();
document.getElementById("postUsername").value = '';

// Data local storage
if (userName && titlePost && contentPost) {
    const blogPost = {
        username: userName,
        title: titlePost,
        post: contentPost
    };

    let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    existingPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

    window.location.href = "./blog.html"; 
} else { 
    alert('Please fill in all the fields.');
}


}

formElement.addEventListener('submit', handleFormSubmit);

