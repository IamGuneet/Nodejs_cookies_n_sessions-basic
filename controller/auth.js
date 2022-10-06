const { log } = require('console');
const path = require('path');

exports.getLogin = (req, res) => {
    // console.log(req.get('Cookie'));
    res.sendFile(path.join(__dirname, '../views', 'auth.html'));
}


//assuming authenctication was succesfull we redirect to a sucess page and set a cookie to the header
exports.postLogin = (req, res) => {
    // res.setHeader('Set-Cookie', 'loggedIn=true')
    req.session.isLoggedIn= true;
    res.sendFile(path.join(__dirname, '../views', 'postLogin.html'));
}

//deleting session on server 
exports.logOut = (req,res) => {
req.session.destroy(err =>{
    console.log(err);
    res.redirect('/login')
})
}