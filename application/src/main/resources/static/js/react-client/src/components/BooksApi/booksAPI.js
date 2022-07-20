import React, { useEffect, useState } from "react";

import style from "./style.module.scss"

export default function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://api.lib.harvard.edu/v2/collections.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <div className={style.booksstyle}>
      <h1>Harvard Library Recomendations</h1>
      {collections.map((collection) => (
        <div key={collection.systemId}>{collection.setName}</div>
      ))}
    </div>
  );
}