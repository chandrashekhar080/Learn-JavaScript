// Dummy user database (for demonstration)
const users = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "password" }
];

// Function to register a new user
function register(username, password) {
    if (users.some(user => user.username === username)) {
        console.log("Username already exists!");
        return;
    }
    users.push({ username, password });
    console.log("User registered successfully!");
}

// Function to login a user
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", username);
        console.log("Login successful! Welcome,", username);
    } else {
        console.log("Invalid credentials!");
    }
}

// Function to check if a user is logged in
function checkLogin() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        console.log("Currently logged in as:", loggedInUser);
    } else {
        console.log("No user is logged in.");
    }
}

// Function to logout the user
function logout() {
    localStorage.removeItem("loggedInUser");
    console.log("Logged out successfully!");
}

// Example usage
register("newUser", "mypassword"); // Register a new user
login("newUser", "mypassword");   // Login with valid credentials
checkLogin();                     // Check if user is logged in
logout();                          // Logout the user
