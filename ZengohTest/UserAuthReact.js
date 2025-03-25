import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Load user from localStorage on app load
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    // Login function
    const login = (username, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = users.find(u => u.username === username && u.password === password);
        
        if (validUser) {
            localStorage.setItem("user", JSON.stringify(validUser));
            setUser(validUser);
            return true;
        } else {
            return false;
        }
    };

    // Register function
    const register = (username, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(user => user.username === username)) {
            return "Username already exists!";
        }
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return "User registered successfully!";
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}



/*******************Login Page  ************************ */
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (login(username, password)) {
            setMessage("Login successful!");
        } else {
            setMessage("Invalid credentials.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
}

/*******************Register Page  ************************ */
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Register() {
    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = () => {
        const response = register(username, password);
        setMessage(response);
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <p>{message}</p>
        </div>
    );
}

/*******************Deshboard Page  ************************ */
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <>
                    <p>Welcome, {user.username}!</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>Please log in to access the dashboard.</p>
            )}
        </div>
    );
}

/*******************App.js  ************************ */
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <nav>
                    <Link to="/">Login</Link> | 
                    <Link to="/register"> Register</Link> | 
                    <Link to="/dashboard"> Dashboard</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}




/*Running the Application
Install dependencies (if not already installed):

nginx
Copy
Edit
npm install react-router-dom
Start the React app:

sql
Copy
Edit
npm start
🔹 How It Works
Register a new user (username & password are stored in localStorage).

Login using the registered credentials (session is stored in localStorage).

Access Dashboard (restricted page only visible when logged in).

Logout (clears session).

🚀 Features & Improvements
✅ Pure React authentication using localStorage
✅ User persistence on refresh (checks localStorage)
✅ Context API for global state management
✅ Simple routing for Login, Register, and Dashboard
✅ Protects Dashboard from unauthenticated users
*/