import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let localList = localStorage.getItem("list");
  if (localList) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    // setAlert({show:show,type:type,msg:msg})
    setAlert({ show, type, msg });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      // display Alert component
      showAlert(true, "danger", "please type value");
    } else if (name && isEditing) {
      //can edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "value updated");
    } else {
      // we can add item to list and show alert
      showAlert(true, "success", "item add to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  //for clear btn function
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  //for remove btn function, need sepecific id
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  //for edit btn function, also need sepecific id
  const editItem = (id) => {
    const sepecificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(sepecificItem.title);
  };

  //for local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert {...alert} alert={showAlert} list={list} />}
        <h3>Grocery Notes</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
