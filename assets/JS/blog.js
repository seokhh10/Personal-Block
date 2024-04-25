const mainElement = document.querySelector('main');
const backButtom = document.querySelector('.back-button');


const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogPostsContainer = document.getElementById('blogPosts');

//Display info blog post
// blogPosts.forEach (post => {
//     const postElement = document.createElement('main');
//     postElement.innerHTML = `
//     <h2>${post.title}</h2>
//     <p><strong>By:</strong> ${post.username}</p>
//     <p>${post.post}</p>
//     <hr> 
//     `;
//     blogPostsContainer.appendChild(postElement);
// });


// style card elements

blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-card');
    postElement.innerHTML = `
    <h2 class="blog-title">${post.title}</h2>
    <p class="blog-user"><strong>By:</strong> ${post.username}</p>
    <p class="blog-content">${post.post}</p>
    <hr>`;
    blogPostsContainer.appendChild(postElement);
});

backButtom.addEventListener("click", () => {
    location.href = "./index.html";
});
