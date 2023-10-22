import "./App.css";
import Header from "./components/Layout/Header";
import Flowers from "./components/Flowers/Flowers";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <div className="main">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Flowers />
      </div>
    </CartProvider>
  );
}

export default App;
