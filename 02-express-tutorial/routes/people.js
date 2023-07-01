const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  getPeopleId,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);
router.get("/:peopleID", getPeopleId);

router.post("/", addPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

//router.route("/").get(getPeople).post(addPerson);

module.exports = router;
