let { people } = require("../data");

const getPeople = (req, res) => {
  return res.json({ success: true, data: people });
};

const getPeopleId = (req, res) => {
  const { peopleID } = req.params;
  const idToFind = Number(peopleID);
  const person = people.find((p) => p.id === idToFind);

  if (!person) {
    return res.status(404).json({ message: "That person was not found" });
  }
  return res.status(200).json(person);
};

const addPerson = (req, res) => {
  if (req.body.name) {
    people.push({ id: people.length + 1, name: req.body.name });
    return res.status(201).json({ success: true, data: [...people] });
  }
  res.status(400).json({ success: false, message: `Please provide a name` });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  people = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: people });
};

module.exports = {
  getPeople,
  getPeopleId,
  addPerson,
  updatePerson,
  deletePerson,
};
