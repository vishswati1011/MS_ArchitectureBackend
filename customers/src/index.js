const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
require('dotenv').config();
const StartServer = async() => {
    console.log("PORT",process.env.PORT)

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);
    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();