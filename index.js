const express = require('express');
const app = express();
const port = 8000;

const express = require('express');
const router = express.Router();
module.exports=router;

//use exxpress router
app.use( '/' , require('./routes/index' ));

app.listen( port , function( err ){
    if(err){
        console.log('Error:' , err );
    }

 console.log(`Server is up and running on Port: ${port} `);
});