const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");   // Require EJS After install   (npm i ejs)

const app=express();
app.set('view engine','ejs');  //  app will set EJS:- It will check views files for EJS


app.get("/",function(req,res){

    var date=new Date();
    var currDay= date.getDay();
    var day="";
    if(currDay==0 || currDay==6){
        day="WeekEnd";
    }else{
        day="WeekDay";
    }
    res.render("list",{kindOfday:day});

});


const PORT=4000;
app.listen(PORT,function(){
    console.log(`Server is Started on PORT ${PORT}.....`);
})

