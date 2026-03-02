const express = require("express");
const router = express.Router();
// const protect = require("../middleware/authMiddleware");
const authMiddleware=require("../middleware/authMiddleware");
const checkRole=require("../middleware/roleMiddleware");

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to protected dashboard",
    user: req.user
  });
});

router.get(
  "/admin",
  authMiddleware,
  checkRole("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin",
      user: req.user
    });
  }
);

module.exports = router;