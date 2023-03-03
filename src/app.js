console.log('hola')

const express = require('express')
const responseHandlers = require('./utils/handleResponses')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRouter = require('./users/users.router')

initModels()


const app = express()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "user" : "http://localhost:7000/api/v1/users", 
            "conversations" : "http://localhost:7000/api/v1/conversations"
        }
    })

})

app.use('/api/v1/users', userRouter)

//? Esta debe de ser ultima ruta en mi app
app.use('*' , (req, res) => {
    responseHandlers.error({
        res,
        status: 400,
        message: 'URL not found, please try http://localhost:7000/api/v1/users '
    })

} )


app.listen(7000, () => {
    console.log('Server started at port 7000');
})