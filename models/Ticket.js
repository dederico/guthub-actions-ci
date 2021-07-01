const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        required: true,
        default: 20
    },
    
    total: {
        type: Number,
        default: 0,
    },
    tax: {
        type: Number,
        default: 0,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
       required: true
    }],
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
    is_active: {
        type: Boolean,
        default: true,
    },
}, {
        collection: 'tickets',
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
const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;