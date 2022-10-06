const express = require('express');
const app = express(); 

const authenRoute = require('./router/authentication')

const session = require('express-session');



app.use(session ({
    secret: 'Momomegha',
    resave:false,
    saveUninitialized:false}));
    
    app.use(authenRoute);


    app.listen(3000, () => {
        console.log("running on port 3000");
});


