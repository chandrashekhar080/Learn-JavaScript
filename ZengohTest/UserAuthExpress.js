const express = require("express");
const app = express();
app.use(express.json());

const users = [{ username: "admin", password: "1234" }];

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
