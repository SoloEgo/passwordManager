const express = require("express");

const router = express.Router();

// controllers
const {
    signup,
    signin,
    forgotPassword,
    resetPassword,
    uploadImage,
    requireSignIn
} = require("../controllers/auth");

router.get("/", (req, res) => {
    return res.json({
        data: "Auth API is set well",
    });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/upload-image", requireSignIn, uploadImage)

module.exports = router;