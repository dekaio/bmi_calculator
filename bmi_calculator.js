const express  = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Hello there!")
})
app.get("/bmicalculator",function(req, res){
    
    res.sendFile(__dirname+'/bmiCalculator.html');    
})


app.post('/', function(req, res){

    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);
    let bmi = weight / (height * weight);
    console.log(bmi);
    res.send(" Your BMI is " + bmi);
})

//Set up listener
app.listen(3000, function(){
    console.log("Server is listening on port 3000")
})