const Vaccine = require('../models/vaccine');
const certificateController = require('./certificateController')
exports.registerVaccine = async(req, res, next) => {
    // Trying to get the details

    try {
        const id = req.user;

        let{
            type,
            efficacy,
            doses,
            boosterShot,
        } = req.body;

        // vaccine registeration

        if(!type || !efficacy || !doses || !boosterShot)
        return res.status(400).json({
            msg: "Fill all the fields to register vaccine"
        })

        if(doses < 0 || doses > 2) return res.status(400).json({
            msg: "Doses should be between 0-2"
        })

        if(efficacy < 0 || efficacy > 100) return res.status(400).json({
            msg: "Efficacy is percentage"
        })


        const newVaccine = Vaccine({
            type, efficacy, doses, boosterShot, id
        })

        // Saving the Vaccine
        const saveVaccine = await newVaccine.save();

        res.json(saveVaccine);
        

    }
   
    // Catching the error
    catch(error){
        res.status(500).json({
            error: error.message
        });
    } 
}

// Getting the Vaccines
exports.getVaccines = async(req, res) => {

    Vaccine.find({}, function(err, vaccine) {
        var vaccineMap = {};
    
        vaccine.forEach(function(vaccine) {
          vaccineMap[vaccine._id] = vaccine;
        });
    
        res.send(vaccineMap);
    })
}
