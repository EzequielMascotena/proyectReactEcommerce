import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Badge from 'react-bootstrap/Badge';

import { Link } from "react-router-dom";
import Carrito from "../assets/cart.png";

export const CartWidget = () => {
    const {items} = useContext (CartContext);

    const total = items.reduce ((acum, valorAct) => acum + valorAct.quantity ,0);

    return (
        <Link to="/cart">
            <img src={Carrito} alt="Carrito de compras" width={35} />
            {total > 0 ? <Badge pill bg="danger" text="dark">{total}</Badge> : null}
        </Link>
    );
};
