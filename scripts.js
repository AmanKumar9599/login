const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const userBox = document.getElementById('user-box');
const problemHandlerBox = document.getElementById('problem-handler-box');

function selectRole(role) {
    if (role === 'user') {
        userBox.classList.add('active');
        userBox.classList.remove('inactive');
        problemHandlerBox.classList.add('inactive');
        problemHandlerBox.classList.remove('active');
    } else {
        problemHandlerBox.classList.add('active');
        problemHandlerBox.classList.remove('inactive');
        userBox.classList.add('inactive');
        userBox.classList.remove('active');
    }
}

// Function to handle form switching
let loginbtn=document.getElementById('login-btn')
loginbtn.addEventListener('click', () => {
    loginbtn.style.color="#f06";
    signupbtn.style.color="#4a90e2";
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

let signupbtn=document.getElementById('signup-btn');
signupbtn.addEventListener('click', () => {
    signupbtn.style.color="#f06";
    loginbtn.style.color="#4a90e2";
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});
