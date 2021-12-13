const Certificate = require('../models/certificate');
const Vaccine = require('../models/vaccine');
const User = require('../models/user');
const certificate = require('../models/certificate');

exports.submitCertificate = async(req, res) => {
    // Trying to get details

    try {

        const {hospital, latestDate} = req.body

        const user = await User.findById(req.user);
        
        const vaccine = await Vaccine.find({id: user.id})



        if(!hospital || !latestDate) return  res.status(500).json({
            msg: "You did not enter all fields"
        })

        if(vaccine[0].dposes === 2) return res.status(500).json({
            msg: "You have already been vaccinated twice!"
        })

        // New Certificate

        let vaccineCertificate = Certificate({
            id: user.id,
            hospital: hospital,
            latestDate: latestDate,
            doses: vaccine[0].doses
        })

        console.log(user);

        user.certificate.push(vaccineCertificate);
        await user.save();
        await vaccineCertificate.save();

        res.status(200).send(user);
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
exports.getCertificate = async(req, res) => {

    // user identification
    const user = await User.findById(req.user);

    var id = user.id;

    //Checking for invalid certificates or therefore lack of
    if(!user.certificate) return res.status(500).json({
        msg: "No Certificate found!"
    });
    
    let certificate = await Certificate.find({id: id});


    res.status(200).send(certificate);
}