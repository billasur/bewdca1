const express = require('express');
const app = express();
app.use(express.json());

const users = [
    { id: "1", email: "123@gmail.com", password: "123abcdef" },
    { id: "2", email: "1234@gmail.com", password: "123abcdef" },
    { id: "3", email: "12356@gmail.com", password: "123abcdef" },
];

// Simple GET route to confirm the server is working
app.get('/', (req, res) => {
    return res.status(201).json({ "message": "hello there, Everything is working just fine" });
});

// PUT route to change user password based on email
app.put('/change', (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(user => user.email === email);
    
    if (user) {
        user.password = password; // Update password
        return res.status(200).json({ message: "Password changed successfully" });
    } else {
        return res.status(404).json({ message: "Email not found" });
    }
});

// DELETE route to delete a user by email
app.delete('/delete', (req, res) => {
    const { email } = req.body;
    
    const index = users.findIndex(user => user.email === email);
    
    if (index !== -1) {
        users.splice(index, 1); // Delete user from array
        return res.status(200).json({ message: "User deleted successfully" });
    } else {
        return res.status(404).json({ message: "Email not found" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
