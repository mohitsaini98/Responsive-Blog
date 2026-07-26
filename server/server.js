require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./src/config/db");

// routes
const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/users");
const blogRoutes = require("./src/routes/blogs");
const commentRoutes = require("./src/routes/comments");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// connect database
connectDB();

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

// Serve static frontend (if built)
const clientBuildPath = path.join(__dirname, "..", "build");
if (process.env.NODE_ENV === "production" && require('fs').existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
