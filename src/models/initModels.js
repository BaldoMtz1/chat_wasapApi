
//TODO En este archivo se importaran todos los modelos y se generaran las relaciones entre ellos



const Conversations = require('../models/conversation.models')
const Messages = require('../models/message.models')
const Participants = require('../models/participanst.models')
const Users = require('../models/users.models')

const initModels = () => {

    //? User --> Participants
    Users.hasMany(Participants)
    Participants.belongsTo(Users)
    
    //? Conversations --> Participants
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)

    //? Participants --> Messages
    Participants.hasMany(Messages)
    Messages.belongsTo(Participants)
}

module.exports = initModels

