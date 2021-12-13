const mongoose = require('mongoose');

let resultDecider = () => {
    var test = (Math.random() * 1);
    if (test > 0.5) return true
    
    return false

}

const testReportSchema = new mongoose.Schema({

    type:{
        type:String,
        default: "Test Report"
    },

    hospital:{
        type:String,
        enum:["Hospital1", "Hospital2", "Hospital3", "Hospital4"]
    },

    latestDate:{
        type:String
    },

    result:{
        type:Boolean,
        default:resultDecider
        
    },
    id:{
        type:Object,
        required:true
    }
});

module.exports = testReport = mongoose.model("testReport", testReportSchema);

