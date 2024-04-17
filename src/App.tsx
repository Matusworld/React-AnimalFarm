import "./App.css";
import { useEffect, useState } from "react";

// Define the Animal interface
interface Animal {
  id: number;
  name: string;
  type: string;
  age: number;
}

function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery || "");
  }, []);

  const search = async (q: string) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );

    const data = await response.json();
    // print the data to the console
    console.log(data);
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };

  return (
    <main>
      <h1>Animal Farm Search</h1>

      <input
        type="text"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
      />

      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length === 0 && "No animals found"}
      </ul>
    </main>
  );
}

function Animal({ name, type, age }: Animal) {
  return (
    <li>
      <strong>{type}</strong> {name} {age}
    </li>
  );
}

export default App;
