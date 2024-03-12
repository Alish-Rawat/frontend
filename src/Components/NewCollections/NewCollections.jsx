import React, { useEffect, useState } from "react";
import "./NewCollecttions.css";

import Item from "../Item/Item";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((resp) => resp.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((items, i) => {
          return (
            <Item
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              new_price={items.new_price}
              old_price={items.old_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
