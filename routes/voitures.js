const express = require('express');
const router = express.Router();

let voitures = [
  { id: 1, name: "clio" },
  { id: 2, name: "megane" },
  { id: 3, name: "range" }
];

// AJouter voiture
router.post('/', (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: "Both id and name are required" });
  }
  voitures.push({ id, name });
  res.json(voitures);
});

// tt les voitures
router.get('/', (req, res) => {
  res.json(voitures);
});

// By id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const voiture = voitures.find(car => car.id === id);
  if (!voiture) {
    return res.status(404).json({ error: "Car not found" });
  }
  res.json(voiture);
});

// Modifier by id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const index = voitures.findIndex(car => car.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }
  voitures[index].name = name;
  res.json(voitures[index]);
});

// Supprimer by id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = voitures.findIndex(car => car.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }
  voitures.splice(index, 1);
  res.json(voitures);
});

module.exports = router;

