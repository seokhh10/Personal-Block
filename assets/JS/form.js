const formElement = document.querySelector('form')


// Elements from form
const handleFormSubmit = function(event) {
    event.preventDefault();
  
const userName = document.querySelector('#postUsername').value.trim();

const titlePost = document.querySelector('#postTitle').value.trim();

const contentPost = document.querySelector('#postContent').value.trim();

console.log(userName);
console.log(titlePost);
console.log(contentPost);

}

formElement.addEventListener('submit', handleFormSubmit);

