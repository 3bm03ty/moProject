const { addTemplate, deleteTemplate, getTemplate } = require('../services/template.services');

const router=require('express').Router()
router.route('/').post(addTemplate)
.delete(deleteTemplate)
.get(getTemplate)




module.exports=router;