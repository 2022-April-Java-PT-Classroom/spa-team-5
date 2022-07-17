const Fish = () => {
  const Fish = document.querySelector("#fish");

  fetch("https://www.fishwatch.gov/api/species", {
    mode: "cors",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      const species = jsonData.results;

      species.forEach((fish) => {
        const speciesNameElem = document.createElement("p");
        speciesNameElem.innerText = fish.speciesName;
        // app.appendChild(speciesNameElem);
      });
    });
};

export default Fish;
