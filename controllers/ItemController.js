const Item = require('../models/Item')


module.exports = {
    create: async (req, res) => {
        /** 
         * Opcion 1: Generar una instancia con "new"
        */
        //const newUser = new Item(req.body);
        //const response = await newUser.save();
        try {
            const newUser = Item.create(req.body);
            res.status(201).json({ message: 'item created successfully' });
        } catch (error) {
            res.status(400).json({ message: 'error creating users' });
        }
    },
    findAll: async (req, res) => {
        try {
            const users = await Item.find({is_active: true});
            res.status(200).json({ message: 'item list obtained', users });
        } catch (error) {
            res.status(400).json({ message: 'error fetching users', error });

        }
    },
    findOne: async (req, res) => {
            try {
                const idItem = req.params.idItem;
                const item = await Item.findById(idItem);
                return res.status(200).json({ message: 'item found', item })
            }
            catch (error) {
                return res.status(500).json({ error });
            }
    },
    update: async (req, res) => {
        try {
            const idItem = req.params.idItem;
            const item = await Item.findByIdAndUpdate(idUser, req.body, { new: true });
            return res.status(200).json({ message: 'item updated', item: updateUser })
        } catch (error) {
            return res.status(500).json({ error})
        }
    },
    delete: async (req, res) => {
        try {
            const idItem = req.params.idItem;
            await Item.deleteOne(idItem, {is_active: false}, { new:true });
            return res.status(204).json()
        } catch (error) {
            return res.status(500).json({ error})
        }
    },

    }

