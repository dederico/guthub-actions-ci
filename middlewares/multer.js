const multer = require('multer');
const multerInstance = multer({
    storage: multer.memoryStorage(),
    limits: {
        // 5 bytes * 1024 = 5 kb
        // 5kbs * 1024 = 5 mb
        fileSize: 5 * 1024 * 1024,
    },
})

module.exports = multerInstance