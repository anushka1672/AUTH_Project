const express = require("express");
const userRoute = express.Router();

// Signup Route
userRoute.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    //operations

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Login Route
userRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //operations
    
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Clean export (Recommended)
module.exports = userRoute;