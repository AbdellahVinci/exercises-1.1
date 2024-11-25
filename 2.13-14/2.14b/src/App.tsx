import {  useState } from "react";
import RandomDog from "./RandomDog";



const App = () => {
  const [refresh] = useState(false);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog key={`${refresh}1`} />
        <RandomDog key={`${refresh}2`} />
        <RandomDog key={`${refresh}3`} />
      </div>

     
    </>
  );
};

export default App;