const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(ejs);

app.get("/",function(req,res){

    var date=new Date();
    var currDay= date.getDay();
    if(!currDay==0 || !currDay==6){
        res.write("Yaay Weekend");
    }else{
        res.write("Opps Workday");
    }
    res.send();

});


const PORT=4000;
app.listen(PORT,function(){
    console.log(`Server is Started on PORT ${PORT}.....`);
})

