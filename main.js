let user_name = '';
let pass_word = '';

function signUp() {
    // Get input values
    user_name = document.getElementById("user_name").value;
    pass_word = document.getElementById("password").value;

    // Check if username or password is empty
    if (user_name === "" || pass_word === "") {
        alert("Username and Password can't be empty");
        return;
    }

    // Validate password
    if (!validatePassword(pass_word)) {
        return; // Stop signup if password is invalid
    }

    alert("Signup successful!");
}

function validatePassword(password) {
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }
    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        return false;
    }
    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        return false;
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
        alert("Password must contain at least one special character.");
        return false;
    }
    return true; // Password is valid
}

function login() {
    document.getElementById("msg").innerHTML = "";

    let login_username = document.getElementById("login_username").value;
    let login_password = document.getElementById("login_password").value;

    if (user_name !== "" && pass_word !== "" && login_username !== "" && login_password !== "") {
        if (user_name === login_username && pass_word === login_password) {
            window.location = "navigate.html";
        } else {
            document.getElementById("msg").innerHTML = "Invalid Username or Password";
        }
    } else {
        document.getElementById("msg").innerHTML = "Username and Password cannot be Empty/Invalid";
    }
}

function onSignIn(googleUser) {
    // Handle Google Sign-In
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    window.location = "navigate.html";
}
