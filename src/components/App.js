// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network error");
        }
        return r.json();
      })
      .then((data) => {
        console.log(data);
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
