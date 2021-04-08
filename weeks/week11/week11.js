import makeRequest from './authHelpers.js';
import Auth from './Auth.js';
document.querySelector('form').onsubmit = login

function login(event) {
    event.preventDefault();
    const myAuth = new Auth();
    myAuth.login(getPosts);

    async function getPosts() {
        const posts = await makeRequest('posts', 'GET', null, myAuth.token)
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            console.log("in getPosts");
            postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>`
            document.getElementById('posts').appendChild(postDiv);

        })
    }
    return false;
}