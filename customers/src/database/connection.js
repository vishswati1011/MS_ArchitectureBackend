const mongoose = require('mongoose');
const { DB_URL } = require('../config');
require('dotenv').config();
module.exports = async() => {

    console.log(DB_URL,"DBURL")
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 