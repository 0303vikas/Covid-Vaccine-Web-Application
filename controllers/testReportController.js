const Report = require('../models/testReport');
const User = require('../models/user');

exports.submitReport = async(req, res) => {
    // Trying to get details

    try {

        let {
            type,
            hospital,
            latestDate,
            result
        } = req.body;

        // Report Submission

        if(!latestDate) return res.status(400).json({
            msg: "Please select a date"
        });
        if(!hospital) return res.status(400).json({
            msg: "Please select a hospital"
        });

        let user = await User.findById(req.user);

        // New Report
        var id;
        id = req.user;

        const newReport = Report({
            id: req.user,
            type, hospital, latestDate, result
        });

        user.testReports.push(newReport);
        
        const saveUser = await user.save();
        await newReport.save();

        res.status(200).send(saveUser);
        Promise.resolve();
    }

    // Catching the Error

    catch(error){

        res.status(500).json({
            error: error.message
        });

    }
}

// Getting Report
exports.getReport = async(req, res) => {
    const user = await User.findById(req.user);
    
    if(!user.testReports) return res.status(500).json({
        msg: "No report found!"
    });
    
    let reports = await Report.find({id: req.user});


    res.status(200).send(reports);
}