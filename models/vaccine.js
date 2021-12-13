const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({

    type:{
        type:String,
        required:true,
    },
    efficacy:{
        type: Number
    },
    doses: {
        type:Number,
        required:true,
        max:2,
        min:0,
        default:0
    },
    boosterShot:{
        type:Boolean,
        required:true,
        default:false
    },
    id:{
        type:Object,
        required:true
    }
});

module.exports = Vaccine = mongoose.model("vaccine", vaccineSchema);

