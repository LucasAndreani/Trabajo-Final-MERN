const mongoose = require('mongoose')


const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'products', {
  /* useNewUrlParser: true, */
})
.then(() => {
console.log('conexion exitosa')
})
.catch((err) => {
  console.error(err)
})

module.exports = mongoose