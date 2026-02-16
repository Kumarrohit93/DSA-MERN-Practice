const multer = require("multer");
const path = require("path")
const {MulterError} = require("./AppError.js")
// storage setup

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null, uniqueName + path.extname(file.originalname))
    }
})

//file filter only images

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(new MulterError("Only image allowed"))
    }
}

const upload = multer({
    storage, fileFilter, limits: {fileSize: 2 * 1024 * 1024}
})

module.exports = upload