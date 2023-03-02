
//TODO ESTE ARCHIVO SE ENCARGARA DE LA CONEXION CON LA BASE DE DATOS REAL

//?Utilizaremos usaremos SEQUELIZE ( solo para bd relacionales )

//? Este es el comando para utilizar la dependencia sequelize con possgres  " npm i sequelize pg pg-hstore "

//? Se necesita installar la dependencia princial y ORM para conectar con al Base de Datos

//? Sequelize = Crear conexion
//? sequelize = conexion ya creada para uso

const {Sequelize} = require('sequelize')

const config = require('../../config')

const db = new Sequelize(config.db.development)

module.exports = db