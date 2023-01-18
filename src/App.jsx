import { useState } from "react";
import Features from "./Components/features/Features";
import MenuNav from "./Components/menuNav/MenuNav";
import Slider from "./Components/slider/Slider";

function App() {

  const [style, setStyle] = useState({});

  const handleClick = (index) => {
    setStyle({ transform: `translateX(${-100 * index}vw)` });
  }

  return (
    <div className="App">
      <MenuNav handleClick={handleClick} />
      <Slider style={style} />
      <Features />
    </div>
  );
}

export default App;
