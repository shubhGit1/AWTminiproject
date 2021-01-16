const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "hii" && password === "pallavi") {
        location.assign("file:///C:/Users/Shubham/Desktop/AWT%20Mini%20Project/Dashboard.html");}

    else if (username === "hii" && password === "pal") {
        location.assign("file:///C:/Users/Shubham/Desktop/AWT%20Mini%20Project/Dashboard.html");

      }

    else {
        loginErrorMsg.style.opacity = 1;
    }
})