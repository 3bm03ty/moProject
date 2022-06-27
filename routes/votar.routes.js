const multer = require("multer");
const {
  addUser,
  getUserById,
  UpdateUser,
  deleteUser,
  UpdateUserById,
  addVoterExel,
} = require("../services/votar.service");


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


const router = require("express").Router();
router.route("/").post(addUser).put(UpdateUser).delete(deleteUser);
router.post('/excel',upload.single('voter'),addVoterExel)
router.get("/:NID", getUserById);
router.post("/:id",UpdateUserById)

module.exports = router;
