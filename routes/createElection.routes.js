const { addElection, getElectionById, deleteElection, getElections, UpdateElection } = require("../services/createElection.service");

const router = require("express").Router();
router.route("/").post(addElection).get(getElections).put(UpdateElection).delete(deleteElection)
router.get("/:id", getElectionById);

module.exports = router;
