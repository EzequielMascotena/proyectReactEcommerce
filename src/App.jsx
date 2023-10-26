import {NavBar} from "./components/NavBar";
import { ItemListContainer }   from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Welcome to my Ecommerce"/>
    </>
  );
};

export default App
