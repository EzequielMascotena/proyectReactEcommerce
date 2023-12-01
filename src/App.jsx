import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/items/:id" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App
