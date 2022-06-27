const multer = require('multer');
const { addCandidate, getCandidate, deleteCandidate,getCandidateById,addCandExel } = require('../services/candidates.services');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

const router=require('express').Router()
router.route('/').post(addCandidate)
.delete(deleteCandidate)
.get(getCandidate)
router.get('/:NID',getCandidateById)
router.post('/excel',upload.single('cand'),addCandExel)



module.exports=router;