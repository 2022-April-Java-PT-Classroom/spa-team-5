import React, { useEffect, useState } from "react";

import style from "./booksApiStyle.module.scss"

export default function App() {
  const [collections, setCollections] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.lib.harvard.edu/v2/collections.json")
  //     .then((res) => res.json())
  //     .then((data) => setCollections(data));
  // }, []);

  return (
    <body className={style.body}>
    <div className={style.booksStyle}>
      {/* <h1>Harvard Library Recomendations</h1> */}
      {/* {collections.map((collection) => (
        <div key={collection.systemId}>{collection.setName}</div> */}
      {/* ))} */}
    </div>
    </body>
  );
}