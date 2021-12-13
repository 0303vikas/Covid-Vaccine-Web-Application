const router = require("express").Router();
const vaccineController = require("../controllers/vaccineController");
const auth = require("../middlewares/auth");

// Registering the vaccine and certificate
router.post("/register", auth, vaccineController.registerVaccine);

// Getting all the vaccines
router.get("/", auth, vaccineController.getVaccines);

module.exports = router;