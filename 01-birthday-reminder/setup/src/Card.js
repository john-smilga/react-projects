import React, { useState } from "react";

const PersonCard = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [person, setPerson] = useState(data);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    setIsEditing(false);
    alert("Updated Successfully!");
  };

  return (
    <div
      style={{
        width: "250px",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: "16px",
      }}
    >
      <img
        src={person.image}
        alt={person.name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />

      {/* Name */}
      {isEditing ? (
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={handleChange}
          style={{
            padding: "6px 10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      ) : (
        <h3 style={{ margin: "4px 0" }}>{person.name}</h3>
      )}

      {/* Age */}
      {isEditing ? (
        <input
          type="number"
          name="age"
          value={person.age}
          onChange={handleChange}
          style={{
            padding: "6px 10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      ) : (
        <p style={{ margin: "4px 0", color: "#777" }}>{person.age} years</p>
      )}

      {/* Buttons */}
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          style={{
            padding: "8px 14px",
            marginTop: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
      ) : (
        <button
          onClick={handleUpdate}
          style={{
            padding: "8px 14px",
            marginTop: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          Update
        </button>
      )}
    </div>
  );
};

export default PersonCard;
