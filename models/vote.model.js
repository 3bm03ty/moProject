const mongoose = require('mongoose')


const CandidateSchema =mongoose.Schema({
    CID: { type: mongoose.Types.ObjectId,ref:'candidate',maxlength:14, required: [true, "CID required."],},
    VID: { type: mongoose.Types.ObjectId,ref:'votar',maxlength:14, required: [true, "CID required."],},
    
   
}, { timestamps: true })

module.exports =mongoose.model('vote',CandidateSchema)
//add votes
//get voters elly ent5bt candidate mo3yan
