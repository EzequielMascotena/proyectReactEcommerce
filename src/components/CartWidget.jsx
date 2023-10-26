import Carrito from "../assets/cart.png";

export const CartWidget = () => {
    return (
        <>
            <img src={Carrito} alt="Carrito de compras" width={30} />
            <span>0</span>
        </>
    );
};
