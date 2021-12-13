const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Vaccine = require('../models/vaccine');
const testReport = require('../models/testReport');
const Certificate = require('../models/certificate');

//Registering the user 
exports.registerUser = async(req, res) => {

    // trying to request the body 
    try{

        let {
            firstName,
            lastName,
            email,
            password,
            passwordCheck
        } = req.body;

        // User Validation

        if(!email || !password || !passwordCheck || !firstName || !lastName)
        return res.status(400).json(
            {
                 msg: "Not all fields have been entered." 
            }
        );

        if(password.length < 6) return res.status(400).json(
            {
                 msg: "Password should be at least 6 characters." 
            }
        );

        if(password !== passwordCheck) return res.status(400).json(
            {
                 msg: "Enter the same password for verification." 
            }
        );

        //Checking for existing user

        const existingUser = await User.findOne({ email: email });

        if(existingUser) return res.status(400).json(
            {
                 msg: "A User already exists with this email." 
            }
        );

        // Using salt method for password hashing

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = User({
            firstName, lastName, email, password:passwordHash
        });

        const saveuser = await newUser.save();
        
        res.json(saveuser);
    }
    // Catching any error
    catch (error){
        res.status(500).json(
            { 
                error: error.message
            }
        );

    }
}

// Login User

exports.loginUser = async(req, res) => {

    // Trying to request the body
    try {
        const { email, password } = req.body;

        //Field Validation
        if (!email || !password) return res.status(400).json(
            {
                msg: "Not all fields have been entered." 
            }
        );

        // Email checking to find the User
        const user = await User.findOne({ email: email });

        if(!user) return res.status(400).json(
            {
                msg: "The User does not exist." 
            }
        );

        // Crypting the entered password to compare with the user db pass
        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(400).json(
            {
                msg: "Invalid credentials." 
            }
        );

        // Creating the token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        
        // Responding with the first Name, user Id and Token
        res.json({
            token, 
            user: {
                id: user.__id,
                firstName: user.firstName,
                lastName: user.lastName,
                vaccine: user.vaccine
            }
        });
    }
    
    // Catching the Erro
    catch (error){
        res.status(500).json(
            { 
                error: error.message 
            }
        );

    }

}

// Deleting the User
exports.deleteUser = async(req, res) => {

    // Trying to delete the User
    try {
        // Finding and deleting the user
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } 
    
    // Catching the Error
    catch (error) {
        res.status(500).json(
            { 
                error: error.message 
            }
        );
    }
}

// Validating the Token

exports.validateToken = async(req, res) => {

    // Trying to get the token and perform validation
    try {

        const token = req.header("x-auth-token");

        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified) return res.json(false);

        // Verified logged in user

        const user = await User.findById(verified.id);

        // Returning the state of token

        if (!user) return res.json(false);

        return res.json(true);
    }

    // Catching the error
    catch (error) {

        res.status(500).json({ error: error.message });
    }
}

// Getting the User details

exports.getUser = async(req, res) => {

    const user = await User.findById(req.user);
    
    let vaccine = await Vaccine.find({id: req.user});
    let report = await testReport.find({id: req.user});
    let certificate = await Certificate.find({id: req.user})

    // Json Response
    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
        email: user.email,
        phoneNumber: user.phoneNumber,
        isActive: user.isActive,
        vaccines: vaccine,
        testReports: report,
        certificate:certificate
        
    });
}

// Getting the sms token

exports.getToken = async(req, res) => {

    // generating the OTP using Twilio Client
    client
    .verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verifications
    .create({
        to: `+${req.query.phonenumber}`,
        channel: req.query.channel
    })
    .then(data => {

        //Sending the data 
        res.status(200).send(data);
    })
}

// Verifying the sms token

exports.verifyToken = async(req, res) => {
    
    // Updating the user account to active
    await User.findByIdAndUpdate(req.user, {isActive: true}, {new:true})

    // Adding the phone number to the user
    await User.findByIdAndUpdate(req.user, {phoneNumber: req.query.phonenumber.toString()}, {new:true})

    // Verifying the sms OTP token
    client
    .verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verificationChecks
    .create({
        to: `+${req.query.phonenumber}`,
        code: req.query.code
    })
    .then(data => {
        // Sending the Data
        res.status(200).send(data);
    })



}


 // Registering vaccine for the user

 exports.registerUserVaccine = async(req, res) => {

    // Register the User Vaccine

    try {
        
        let {type, boosterShot, doses} = req.body;

        if(!type || !doses) return res.status(500).json({
            msg: "Fill all the fields"
        })

        var userVaccineEfficacy;
        
        var userVaccineType = type;
        if(userVaccineType === "Moderna") userVaccineEfficacy = 89;
        if(userVaccineType === "Pfizer") userVaccineEfficacy = 91;

        const id = req.user;

        var newUserVaccine = Vaccine({
            type: userVaccineType,
            efficacy:userVaccineEfficacy,
            boosterShot: boosterShot,
            doses: doses,
            id: id
            
        });
        



        let user = await User.findById(req.user);
        
        user.vaccines.push(newUserVaccine);
        const saveUser = await user.save();
        newUserVaccine.save();


        res.status(200).send(saveUser);
        Promise.resolve();
        
    }
    catch (error) {
        
        res.status(500).
        json({
            error:error.message
        });

    }
        
    

}

// Getting user Vaccines
exports.getUserVaccine = async(req, res) => {
    const user = await User.findById(req.user);
    
    if(!user.vaccines) return res.status(500).json({
        msg: "No vaccines found!"
    });
    
    let vaccines = await Vaccine.find({id: req.user});


    res.status(200).send(vaccines);
}

// Logout

exports.logoutUser = async (req, res, next) => {

    let token = req.header('x-auth-token')
    res.clearCookie(token);
    res.send({ success: true });
}