const { addMatching, deleteMatching, getMatching } = require('../services/matching.services');

const router=require('express').Router()
router.route('/').post(addMatching)
.delete(deleteMatching)
.get(getMatching)




module.exports=router;