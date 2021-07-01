const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 50,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
}, {
        collection: 'items',
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
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;