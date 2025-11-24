import React from "react";

const PersonCard = ({ data }) => {

  



  return (
    <div
      style={{
        width: "80vh",
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
          src={data.image}
        alt={data.name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />

      <>
        <h3>{data.name}</h3>
        <h4>{data.age}</h4>
      </>

      
    
    </div>
  );
};

export default PersonCard;
