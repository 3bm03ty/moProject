const mongoose = require('mongoose')


const userSchema =mongoose.Schema({
    template:String
})

module.exports =mongoose.model('template',userSchema)