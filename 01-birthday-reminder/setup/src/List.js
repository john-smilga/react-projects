import React from 'react';

const List = ({friends}) => {

  return (
    <>
      {friends.map((friend)=>{
        const {id,name,age,image} = friend
        return(
          <article key={id} className="person">
            <img src={image} alet={name}/>
            <div>
              <h4>
                {name}
              </h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
