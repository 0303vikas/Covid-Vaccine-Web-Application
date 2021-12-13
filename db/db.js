const mongoose = require('mongoose');

const conn = () => mongoose.connect(
    process.env.MONGODB_CONN_STRING,
    (error) => {
        if(error) throw error;
        console.log("MongoDB established!");
    }
);

module.exports = conn;
