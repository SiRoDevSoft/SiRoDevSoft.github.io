const express = require('express');
const app = express();
const path = require('path');


// vamos a entender los datos que se reciben del formulario
app.use(express.urlencoded({extended: false}));


// En caso de recibir informacion de aplicaciones SPA 
app.use(express.json()),

// Recibimos los datos del formulario proveniente de una ruta
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')))

// configuar
app.listen(3000, ()=>{
  console.log('Server on port 3000')
})
