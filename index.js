/* ------------------------------------------------- */
const express = require('express');
// const cors = require('cors'); // sirve para unir el frontend
const routerApi = require('./routes');

const { logErrors, errorHandler, BoomerrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

//mideware para resivir información tipo Json
app.use(express.json());
/* Este code sirve para unir el frontend con heroku

// origienes en los que recibe peticiones
const whilelist = ['http:localhost:8080', 'htpps://myapp.com'];
const options = {
  origin: (origin, callback) => {
    // si el origen esta incluido
    if (whilelist.includes(origin)) {
      // no hay error => null y lo permite => true
      callback(null, true);
    } else {
      callback(new Error(' No permitido'));
    }
  }
}
app.use(cors(options)); // para habilitar a cualquier dominio */
/* -------------------------Ruta por defecto------------------------ */
// ruta por defecto
app.get('/', (req, res) => {
  res.send('Hola, servidor en express');
});

routerApi(app);

app.use(logErrors);
app.use(BoomerrorHandler);
app.use(errorHandler);


/* -------------------------para ejecutar el puerto------------------------ */
app.listen(port, () => {
  // el console.log es mala practica para producción
  console.log('Port:' + port);
});
