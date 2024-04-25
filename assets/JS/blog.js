const mainElement = document.querySelector('main');
const backButton = document.querySelector('.back-button');


const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogPostsContainer = document.getElementById('blogPosts');


// Display info blog post - style card elements

blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-card');
    postElement.innerHTML = `
    <h2 class="blog-title">${post.title}</h2>
    <p class="blog-content">${post.post}</p>
    <p class="blog-user"><strong><a href="mailto:${post.username}"By:</strong> ${post.username}</p>`;
    blogPostsContainer.appendChild(postElement);
});


backButton.addEventListener("click", () => {
    location.href = "./index.html";
});


