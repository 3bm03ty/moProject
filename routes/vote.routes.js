const {addVote, getVotes, getTotalVotes, getVotesDate, getCandidatesData} = require("../services/vote.services");
const router = require("express").Router();
router.route("/").post(addVote).get(getVotes)
router.get("/count", getTotalVotes);
router.get("/time", getVotesDate);
router.get("/data", getCandidatesData);

module.exports = router;
