import { useState } from "react";
import Features from "./Components/features/Features";
import Gallery from "./Components/gallery/Gallery";
import MenuNav from "./Components/menuNav/MenuNav";
import NewSeason from "./Components/newSeason/NewSeason";
import Product from "./Components/product/Product";
import Slider from "./Components/slider/Slider";
import { products } from "./products";

function App() {

  const [style, setStyle] = useState({});
  const [chosenProduct, setChosenProduct] = useState(products[0])

  const handleClick = (index) => {
    setStyle({ transform: `translateX(${-100 * index}vw)` });
    setChosenProduct(products[index])
  }

  return (
    <div className="App">
      <MenuNav handleClick={handleClick} />
      <Slider style={style} />
      <Features />
      <Product chosenProduct={chosenProduct} />
      <Gallery />
      <NewSeason />
    </div>
  );
}

export default App;
