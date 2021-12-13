const pdf = require("html-pdf");
const options = {format: 'Letter'};
const User = require("../../models/user");
const Report = require("../../models/testReport");

exports.Topdf = async (req, res) => {

    // Try to get details
    try {
        const user = await User.findById(req.user);
    
        if(!user.testReports) return res.status(500).json({
            msg: "No report found!"
        });
        
        let reports = await Report.find({id: req.user});

        reports = reports.reverse()[0];
    
    
        res.render('../templates/report.html', {
            reports: reports,
        }, function (err, HTML) {
            pdf.create(HTML, options).toFile('./downloads/employee.pdf', function (err, result) {
                if (err) {
                    return res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                }
            })
          })  

    }
    catch(error){
        res.status(500).json({
            error:error.message
        })
    }
}