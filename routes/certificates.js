const router = require("express").Router();
const certificateController = require("../controllers/certificateController");
const auth = require("../middlewares/auth");

// Generating the certificate
router.post("/submit", auth, certificateController.submitCertificate);

// Getting  the certificate
router.get("/", auth, certificateController.getCertificate);

module.exports = router;