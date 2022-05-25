const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');            //Importar la librería para el manejo de variables de entorno

dotenv.config({ path: './config.env' });     //Indicar la ruta donde se alojan las variables de entorno

const db = new Sequelize({
    dialect: 'postgres',      
    host: process.env.DB_HOST,        //process.env.DB_HOST
    username: process.env.DB_USERNAME,     //process.env.DB_USERNAME
    password: process.env.DB_PASSWORD,   //process.env.DB_PASSWORD
    database: process.env.DB,    //process.env.DB
    logging: false,
    dialectOptions:
        process.env.NODE_ENV === 'production'
            ? {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                }
            }
        : {}
});

module.exports = { db };