import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
const List = ({items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="butn-container">

              {/* why are we adding a type here for btn when we know its a btn? */}
              <button type="button" className="edit-btn" onClick={()=>editItem(id)}>
                <FaEdit/>
              </button>
              <button type="button" className="delete-btn" onClick={()=> removeItem(id)}>
                <FaTrash/>
              </button>

            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
