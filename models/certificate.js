const mongoose = require('mongoose');


const certificateSchema = new mongoose.Schema({

    type:{
        type:String,
        default: "Covid Vaccine Certificate"
    },

    hospital:{
        type:String,
        enum:["Hospital1", "Hospital2", "Hospital3", "Hospital4"]
    },

    latestDate:{
        type:String
    },

    doses: {
        type:Number,
        required:true,
        max:2,
        min:0,
        default:0
    },

    id:{
        type:Object,
        required:true
    }
});

module.exports = Certificate = mongoose.model("certificate", certificateSchema);

