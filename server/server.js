//import express
let express = require('express');

//import body parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//initialise app
let app = express();
const cors = require('cors');
app.use(cors());

//import routes
let apiRoutes = require("./api-routes");

//configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json)

//connect to mongoose and set connection variable
mongoose.connect('mongoose://localhost/teebo', {
useNewUrlParser: true});
var db = mongoose.connection;

//aded check for db connection
if(!db){
  console.log("Error connecting to db");
} else {
  console.log("Db connected successfully")
}

//setup server port
var port = process.env.PORT || 8080;

//send m,essage for default url
app.get('/', (req, res) => res.send('Hello World with Express'));

//Use API routes in the App
app.use('/api', apiRoutes);

//Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running pycp on port " + port);
});
