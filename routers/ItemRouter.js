const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController')

// Create
router.post('/items', ItemController.create);

//Read(All)
router.get('/items', ItemController.findAll);

// Read(One)
router.get('/items/:idItem', ItemController.findOne);

// Update (One)
// PUT -> VAMOS A REEMPLAZAR TODO EL OBJETO
router.patch('/items/:idItem', ItemController.update)

// Delete(Logical, One)
router.delete('./items/:idItem', ItemController.delete)


module.exports = router;