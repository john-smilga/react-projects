import React, { useState } from "react";
import reminder from "./data";
import PersonCard from "./Card";
import Navbar from "./Navbar";

function App() {
  const [people, setPeople] = useState(reminder);
  const [search, setSearch] = useState("");
  const [editPerson, setEditPerson] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  const filteredPeople = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) return alert("Please fill all fields");

    if (editPerson) {
      setPeople(
        people.map((p) =>
          p.id === editPerson.id ? { ...p, name, age, image } : p
        )
      );
      setEditPerson(null);
    } else {
      const newPerson = {
        id: Date.now(),
        name,
        age,
        image,
      };
      setPeople([...people, newPerson]);
    }

    setName("");
    setAge("");
    setImage("");
  };

  const deletePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };

  const editHandler = (person) => {
    setEditPerson(person);
    setName(person.name);
    setAge(person.age);
    setImage(person.image);
  };

  return (
    <>
      <Navbar />

      {/* Content Wrapper */}
      <div style={{ padding: "20px", maxWidth: "600px", margin: "80px auto" }}>
        <h2>Birthday Reminder</h2>

        <input
          type="text"
          placeholder="Search person..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "8px",
              borderRadius: "8px",
            }}
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "8px",
              borderRadius: "8px",
            }}
          />

          <input
            type="text"
            placeholder="Enter image URL (any website)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              marginBottom: "8px",
              borderRadius: "8px",
            }}
          />

          <button
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "8px",
              backgroundColor: editPerson ? "#007bff" : "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            {editPerson ? "Update Person" : "Add Person"}
          </button>
        </form>

        <div style={{ marginTop: "20px" }}>
          {filteredPeople.map((person) => (
            <div key={person.id} style={{ marginBottom: "16px" }}>
              <PersonCard data={person} />

              <div style={{ marginTop: "8px", display: "flex", gap: "10px" }}>
                <button
                  onClick={() => editHandler(person)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#007bff",
                    border: "none",
                    color: "#fff",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePerson(person.id)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#dc3545",
                    border: "none",
                    color: "#fff",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {people.length > 0 && (
          <button
            onClick={() => setPeople([])}
            style={{
              marginTop: "20px",
              padding: "10px",
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
            }}
          >
            Clear All
          </button>
        )}
      </div>
    </>
  );
}

export default App;
