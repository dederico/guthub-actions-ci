const Ticket = require('../models/Ticket')


module.exports = {
    create: async (req, res) => {
        /** 
         * Opcion 1: Generar una instancia con "new"
        */
        //const newUser = new Ticket(req.body);
        //const response = await newUser.save();
        try {
            const newUser = Ticket.create(req.body);
            res.status(201).json({ message: 'ticket created successfully' });
        } catch (error) {
            res.status(400).json({ message: 'error creating users' });
        }
    },
    findAll: async (req, res) => {
        try {
            const users = await Ticket.find({is_active: true});
            res.status(200).json({ message: 'ticket list obtained', users });
        } catch (error) {
            res.status(400).json({ message: 'error fetching users', error });

        }
    },
    findOne: async (req, res) => {
            try {
                const idTicket = req.params.idTicket;
                const ticket = await Ticket.findById(idTicket);
                return res.status(200).json({ message: 'ticket found', ticket })
            }
            catch (error) {
                return res.status(500).json({ error });
            }
    },
    update: async (req, res) => {
        try {
            const idTicket = req.params.idTicket;
            const ticket = await Ticket.findByIdAndUpdate(idTicket, req.body, { new: true });
            return res.status(200).json({ message: 'ticket updated', ticket: updateUser })
        } catch (error) {
            return res.status(500).json({ error})
        }
    },
    delete: async (req, res) => {
        try {
            const idTicket = req.params.idTicket;
            await Ticket.deleteOne(idTicket, {is_active: false}, { new:true });
            return res.status(204).json()
        } catch (error) {
            return res.status(500).json({ error})
        }
    },
    calculate: async (req, res) => {
        const id = req.params.idTicket;

        // 1) Encontrar el ticket
        const ticket = await Ticket
            .findById(id)
            .populate('items')// 2) Encontrar los items del ticket
            .populate('user');
        
        // 3) Hacer una suma de los precios de cada item, para obtener el subtotal
        const subtotal = ticket.items.reduce((subtotal, item) => subtotal + item.price, 0);
        // 4) Obteer el tax del subtotal
        const tax = (subtotal * .16);
        // 5) Obtener el total sumando subtotal + tax del
        const total = subtotal + tax;
        console.log(subtotal, tax, total);
        // 6) Actualizar los valores subtotal, tax y total del ticket dado 
        const calculateTicket = await Ticket.findByIdAndUpdate(id,{subtotal,tax,total},{new:true});
                return res.status(200).json({calculateTicket});

    }
    }

