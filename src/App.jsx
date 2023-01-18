import { useState } from "react";
import Features from "./Components/features/Features";
import MenuNav from "./Components/menuNav/MenuNav";
import Product from "./Components/product/Product";
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
      <Product />
    </div>
  );
}

export default App;
