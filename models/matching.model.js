const mongoose = require('mongoose')


const userSchema =mongoose.Schema({
    matching:String
})

module.exports =mongoose.model('match',userSchema)