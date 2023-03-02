

//TODO Archivo para manejar los posibles errores y respuestas exitosas


//* {
//*     error: false,
//*    status: 201,
//*     message: 'user create succesfully',
//*     data: {
//*         id: 5,
//*         firstName : 'Oswaldo'
//*     }
//* }



//?PARA RESPUESTAS EXITOSAS
const success = ({res, status, data, message}) => {
    res.status(status).json({
        error: false,
        status: status,
        message: message,
        data: data

    })

}


//?PARA RESPUESTAS DE ERRORES
const error = ({res, status, message,fields}) => {
    res.status(status).json({
        error: true,
        status: status,
        message: message,
        fields: fields
    })

}

module.exports = {
    success,
    error
}


