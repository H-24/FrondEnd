const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

function LoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", LoginSubmit);