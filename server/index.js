import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Make som Animals
import Chance from "chance";
const chance = new Chance();

const animals = [...Array(500).keys()].map((id) => {
  return {
    id,
    name: chance.animal(),
    type: chance.animal(),
    age: chance.age(),
  };
});

app.get("", (req, res) => {
  // Filter results by query
  const q = req.query.q?.toLowerCase() || "";
  const filtered = animals.filter((animal) => {
    return animal.name.toLowerCase().includes(q);
  });

  res.json(filtered);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
