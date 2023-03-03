const responses = require('../utils/handleResponses')
const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUser()
      .then(data => {
        responses.success({
            status: 200,
            data: data,
            message: 'Getting all users',
            res
        })
      })
      .catch(err => {
        responses.error({
            status: 400,
            data: err,
            message: 'Something bad getting all users',
            res
        })
      })
}

const getUserById = (req, res) => {
    const id = req.params.id 
    userControllers.findUserById(id)
      .then(data => {
        if(data) {
            responses.success({
                status: 400,
                data: data,
                message: `Getting user with ID ${id} succesfully`,
                res
            })
        }else{
            responses.error({
                status: 404,
                message: `Getting user ID ${id}, not found`
            })
        }
      })
      .catch(err => {
        responses.error({
            status: 400,
            data: err,
            message: 'Somthing bad getting the user'
        })
      })
}

const postNewUser = (req, res) => {
    const userObj = req.body
    userControllers.createNewUser(userObj)
        .then(data => {
            responses.success({
                status: 201,
                data,
                message: `User created succesfully with id: ${data.id}`,
                res
            })
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: 'Error ocurred trying to create a new user',
                res,
                fields: {
                    firstName : 'String',
                    lastName : 'String',
                    email: 'example@example.com',
                    password: 'String',
                    profileImage: 'example.com/image.png',
                    phone : '+52 1234 123 123'
                }
            })
        })
}

const patchUser = (req, res) => {
    const id = req.params.id 
    const userObj = req.body 

    userControllers.updateUser(id, userObj)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data, 
                    message: `User with id: ${id} modified successfully`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    message: `The user with ID ${id} not found`,
                    res,
                    fields: {
                        firstName : 'String',
                        lastName : 'String',
                        email: 'example@example.com',
                        password: 'String',
                        profileImage: 'example.com/image.png',
                        phone : '+52 1234 123 123'
                    }
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: `Error ocurred trying to update user with id ${id}`,
                res,
                fields: {
                    firstName : 'String',
                    lastName : 'String',
                    email: 'example@example.com',
                    password: 'String',
                    profileImage: 'example.com/image.png',
                    phone : '+52 1234 123 123'
                }
            })
        })
}

const deleteUser = (req, res) => {
    const id = req.params.id 

    userControllers.deleteUser(id)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data, 
                    message: `User with id: ${id} deleted successfully`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    data: err,
                    message: `The user with ID ${id} not found`,
                    res
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: `Error ocurred trying to delete user with id ${id}`,
                res
            })
        })
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUserById,
    patchUser,
    postNewUser
}