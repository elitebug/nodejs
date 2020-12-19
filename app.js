const express = require('express');
const app =express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

    res.render("home.ejs")
});

app.get('/signup',function(req, res){
    
res.render('signup.ejs')
});


app.get('/login', function(req, res){

    res.render("login.ejs");
});

app.get('/app', function(req, res){

    res.render("app.ejs");
});

app.get("*", function(req, res){

    res.render("404.ejs");

});
/*
app.post('/',function(req, res){

    const Name = (req.body.name);
    const Password = (req.body.password); 

     
        if (Name === "admin" && Password === "admin123") {
        
                res.render("app.ejs");
            
            
            
        } 
        else {
          
            res.render("404.ejs")
        }

});

*/

app.listen(3000, () => console.log('Node working'));