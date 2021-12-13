const router = require("express").Router();
const auth = require("../middlewares/auth");
const userController = require("../controllers/userController");

// Registering the user without phone number
router.post("/register", userController.registerUser);

// Login User
router.post("/login", userController.loginUser);

// Delete
router.delete("/delete", auth, userController.deleteUser);

// Validatiing Token
router.post("/validateToken", userController.validateToken);

// Getting the User
router.get("/", auth, userController.getUser);

// Getting the sms client token
router.get("/verify/getToken", auth, userController.getToken);

// Verifying the sms client token
router.get("/verify/verifyToken", auth, userController.verifyToken);

// Register User Vaccine
router.post("/vaccines/register", auth, userController.registerUserVaccine);

// Getting User Vaccine
router.get("/vaccines/", auth, userController.getUserVaccine);

// Logout Test
router.get('/logout', auth, userController.logoutUser)

module.exports = router;
