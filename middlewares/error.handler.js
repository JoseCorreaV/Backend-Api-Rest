// metodo global para capturar el error
function logErrors(err, req, res, next) {
 console.error(err);
  // ejecutar el middleware de tipo error
  next(err);
}

// los cuatros paremetros deben de ir, para detertar que el Middleware es de tipo error
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function BoomerrorHandler(err, req, res, next) {
  // si existe las propiedad Boom
  if (err.isBoom) {
    const { output } = err;
    // para que el statusCode sea dinamico y para mostrar la info en el json usar .playload
    res.status(output.statusCode).json(output.playload);
  }
  // para evitar el erro comun y continuar con el siguiente error
  else{
    next(err);
  }
}


module.exports = { logErrors ,errorHandler, BoomerrorHandler }
