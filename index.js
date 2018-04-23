// express laden
const express = require('express');
const morgan = require('morgan');
var fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')

// router holen
const router = require('./todo');




// app objekt erzeugen
const app = express();
app.use(express.static(__dirname + '/public'));

//body parser
// create application/json parser
let jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
// routing funktion auf http://localhost:8080/
/*app.get('/', (req, res) => {
  // expliziter Breakpoint mit debugger;
  res.json('Hello World');
});*/
app.set('view engine', 'ejs');


app.use('/todo', router);

// an einen port binden
app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
