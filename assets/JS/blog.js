const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogPostsContainer = document.getElementById('blogPosts');

//Display info blog post
blogPosts.forEach (post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>By:</strong> ${post.username}</p>
    <p>${post.post}</p>
    <hr> 
    `
    blogPostsContainer.appendChild(postElement);
});






