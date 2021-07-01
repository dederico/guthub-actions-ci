const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController')

// Create
router.post('/tickets', TicketController.create);

//Read(All)
router.get('/tickets', TicketController.findAll);

// Read(One)
router.get('/tickets/:idTicket', TicketController.findOne);

// Update (One)
// PUT -> VAMOS A REEMPLAZAR TODO EL OBJETO
router.patch('/tickets/:idTicket', TicketController.update)

// Delete(Logical, One)
router.delete('./tickets/:idTicket', TicketController.delete)

// Calcular subtotal, iva y totall
router.put('/tickets/:idTicket/calculate',TicketController.calculate)
module.exports = router;