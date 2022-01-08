// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require("express");
// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port=8000;
const server=app.listen(port,serverRunning);
function serverRunning(){
    console.log(`server is running on localhost:${port}`);
}
// when a get request from client side happens on data(GET route setup)
app.get("/getdata",function(req,res){
//callback function to return the JS object created at the top of server code
    console.log(req);
    res.send(projectData);
});
// when client post data with post request
app.post("/posttdata",postData);

function postData(req,res){
//create a new entry in the apps endpoint consisting of the data received from the client side POST.
    const newData = {
        date: req.body.date, 
        temp: req.body.temperature,
        feeling: req.body.feeling
    }
    projectData=newData;
}
