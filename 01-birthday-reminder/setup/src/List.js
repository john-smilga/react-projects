import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const List = ({name,age,image,id}) => {
  function handleDeleteClick(){
    
  }
  return (
    <div className="list-container">
      <div className="list-image">
        <img src={image} alt="person"></img>
      </div>
      <div className="list-details">
            <h2>{name}</h2>
            <p>{age}</p>
      </div>
      <div className="delete-icon">
        <DeleteIcon onClick={handleDeleteClick} className="d-icon" style={{ fontSize: 15 , color:'gray' }}/>
      </div>
      
    </div>
  );
};

export default List;
