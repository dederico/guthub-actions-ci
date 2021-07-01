const mongoose = require('mongoose');
const { PostSchema } = require('./Post');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'GUEST',
        enum: ['GUEST','ADMIN'],
    },
    profile_pic: {
        type: String,
        default: 'https://ca.slack,edge.com'
    },
    // user.post.push[{title:"Hola Mundo",body:"Mi primer post"}]
    // Endpoints:
    // /user/:idUser/post -> CRUD post

    posts: [PostSchema],


    is_active: {
    type: Boolean,
        default: true
    }
    }, {
        collection: 'users',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
    },
});

/**
 El modelo es el objeto que nos permite interactuar
 con una coleccion dadada
 
 en este caso, el modelo 'User' nos permitira interactuar
 con la coleccion 'Users'.

**/
const User = mongoose.model('User', UserSchema);

module.exports = {User}