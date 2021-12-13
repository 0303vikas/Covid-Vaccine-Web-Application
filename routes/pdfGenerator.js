const router = require("express").Router();
const auth = require("../middlewares/auth");
const reportGen = require('../pdfGenerators/reports/report');

// Registering the vaccine
router.get("/", auth, reportGen.Topdf);

module.exports = router;