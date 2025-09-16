import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT
    const token = jwt.sign(
      { id: user._id }, // payload
      process.env.JWT_SECRET, // secret key
      { expiresIn: "1h" } // token lifetime
    );

    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true, // client can’t access it with JS
      secure: process.env.MONGO_URI === "production", // true in production (HTTPS)
      sameSite: "strict",
    });

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Example protected route
router.get("/profile", verifyToken, async (req, res) => {
  // console.log(req.user.id);
  const user = await User.findById(req.user.id).select("-password"); // exclude password
  res.json(user);
});

export default router;
