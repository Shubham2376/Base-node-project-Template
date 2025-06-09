// Inside this file basic server configuration is present 
const express = require('express');
const {severconfig,logger} = require('./config');
const app = express();
const apiroutes = require('./routes');
app.use('/api',apiroutes)
app.listen(severconfig.PORT,()=>{
    console.log(`Successfully started the server on port : ${severconfig.PORT}`);
    //logger.info("Successfully started the server",{});
})