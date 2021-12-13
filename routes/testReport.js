const router = require("express").Router();
const auth = require("../middlewares/auth");
const testReportController = require("../controllers/testReportController");

// Report Submission
router.post("/submit", auth, testReportController.submitReport);

// Getting Report
router.get("/", auth, testReportController.getReport);

module.exports = router;
