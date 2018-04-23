// express laden
const express = require('express');

// router holen
const router = require('./todo');

// app objekt erzeugen
const app = express();

// routing funktion auf http://localhost:8080/
/*app.get('/', (req, res) => {
  // expliziter Breakpoint mit debugger;
  res.json('Hello World');
});*/

app.use('/todo', router);

// an einen port binden
app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
