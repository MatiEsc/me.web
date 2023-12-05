import { Navbar } from "@nextui-org/react";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
    return (
        <>
            <div>
                <NavBar />
                <Navbar />
                <ItemListContainer saludo="´Bienvenidos a mi Ecommerce´" />
            </div>
        </>
    );
}

export default App;
