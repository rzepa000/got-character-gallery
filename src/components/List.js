import React from "react";

function List(groceries) {
  return (
    <ul className="list-group">
      {groceries.map((name) => (<li>hi {name.name}</li>))}
    </ul>
  );
}

export default List;
