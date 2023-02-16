const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");   // Require EJS After install   (npm i ejs)

const app=express();
app.set('view engine','ejs');  //  app will set EJS:- It will check views files for EJS


app.get("/",function(req,res){

    var date=new Date();
    var currDay= date.getDay();
    var day="";

    switch(currDay){
        case 0:day="Sunday";
        break;
        case 1:day="Monday";
        break;
        case 2:day="Tuesday";
        break;
        case 3:day="Wednesday";
        break;
        case 4:day="Thursday";
        break;
        case 5:day="Friday";
        break;
        case 6:day="Saturday";
        break;
        default:day="Invalid";
    }

    res.render("list",{kindOfday:day});

});


const PORT=4000;
app.listen(PORT,function(){
    console.log(`Server is Started on PORT ${PORT}.....`);
})

