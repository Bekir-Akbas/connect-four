function createAccount() {
    // For simplicity, store user information in localStorage
    const username = document.getElementById("createUsername").value;
    const password = document.getElementById("createPassword").value;

    // Check if the user already exists
    if (localStorage.getItem(username)) {
        alert("User already exists. Please choose a different username.");
    } else {
        // Store user information
        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert("Account created successfully!");
        
        // Transition to the login screen
        document.getElementById("account").style.display = "none";
        document.getElementById("login").style.display = "block";
    }
}
yeni fonksiyon
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve user information from localStorage
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.password === password) {
            alert("Login successful!");

            // Transition to the game menu
            startGame();
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("User not found. Please create an account.");
    }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function createAccount() {
    const usernameInput = document.getElementById("createUsername");
    const passwordInput = document.getElementById("createPassword");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if both username and password are provided
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Check if the user already exists
    if (localStorage.getItem(username)) {
        alert("User already exists. Please choose a different username.");
    } else {
        // Store user information
        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert("Account created successfully!");

        // Transition to the login screen
        document.getElementById("account").style.display = "none";
        document.getElementById("login").style.display = "block";

        // Clear input fields
        usernameInput.value = "";
        passwordInput.value = "";
    }
}








