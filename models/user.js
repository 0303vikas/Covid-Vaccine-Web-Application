const mongoose = require('mongoose');
const {models} = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    phoneNumber:{
        type:String,
        default: ""
    },
    address:{
        type:String,
        default: ""
    },
    
    isActive:{
        type:Boolean,
        default:false
    },
    vaccines: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Vaccine'
        }
    ],
    testReports: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'testReports'

        }
    ],
    certificate:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Certificate'
    }
],

},
{
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});



module.exports = User = mongoose.model("user", userSchema);

