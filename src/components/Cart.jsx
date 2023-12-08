import { useContext, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";

import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { clear, items, onRemove, setTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const total = items.reduce((acum, valorAct) => acum + valorAct.quantity * valorAct.price, 0);

    useEffect(() => {
        setTotal(total);
    }, [total, setTotal]);

    if (!items.length) {
        return (
            <Container className="mt-4 text-center align-middle fs-4">
                <h2>El carrito esta Vacio</h2>
                <Button className="mt-4 fs-3" variant="dark" onClick={() => navigate("/")}>Volver a Home</Button>
            </Container>
        )
    }

    return (
        <Container className="mt-4">
            <h1>Carrito</h1>
            <Table className="table text-center align-middle fs-4" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>SubTotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                            <td width={15}>
                                <img src={item.pictureUrl} height="200px" alt={item.alt} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.quantity === 1 ? `${item.quantity} unidad` : `${item.quantity} unidades`}</td>
                            <td>${item.price}</td>
                            <td>${item.price * item.quantity}</td>
                            <td onClick={() => onRemove(item.id)}>X</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="fw-bold" colSpan={6}>Total: $ {total}</td>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-center gap-5">
                <Button variant="dark" onClick={clear} className="mt-4 fs-4">Vaciar Carrito</Button>
                <Button variant="dark" onClick={() => navigate("/CheckOut")} className="mt-4 fs-4">Comprar</Button>
            </div>
        </Container>
    );
};