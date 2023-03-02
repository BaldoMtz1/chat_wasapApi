
//TODO ***Vamos a determinar que varibles de entorno se usaran en la app***

const configs = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost3000',
        nodeEnv: process.env.NODE_ENV || 'development',

    },
    db: {
        development : {
            //? Aqui deberan estas las configuraciones para la conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true,//? Obliga que las tablas tengan la propiedad createdAd y updateAt
                underscored: true, //? transforma de camelCase a snake_case 
                underscoredAll: true //? de calmel a snake todos los datos
            }

        },
        production : {
            //? Aqui deberan estas las configuraciones para la conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true,//? Obliga que las tablas tengan la propiedad createdAd y updateAt
                underscored: true, //? transforma de camelCase a snake_case 
                underscoredAll: true //? de calmel a snake todos los datos
            },
            dialectOptions: {  //? Configuraciones de seguridad
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }

            }

        },
        testing: {
            //? Aqui deberan estas las configuraciones para la conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'chat-db',
            define: {
                timestamps: true,//? Obliga que las tablas tengan la propiedad createdAd y updateAt
                underscored: true, //? transforma de camelCase a snake_case 
                underscoredAll: true //? de calmel a snake todos los datos
            }

        }

    }
}

module.exports = configs