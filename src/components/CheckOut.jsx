import { useState, useContext } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { getFirestore, collection, addDoc, serverTimestamp  } from 'firebase/firestore';

import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
    name: "",
    phone: "",
    email: "",
    emailConfirm: ""
};

export const CheckOut = () => {
    const { clear, items, total, setTotal } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value
            }
        });
    };

    const sendOrder = () => {
        if (validateForm()) {
            const order = {
                buyer,
                items,
                total,
                timestamp: serverTimestamp()
            };

            const db = getFirestore();
            const orderCollection = collection(db, "orders");

            addDoc(orderCollection, order).then(({ id }) => {
                if (id) {
                    alert(`Su orden: ${id} ha sido completada!
                    El total a pagar es de $${total}.-
                    Muchas gracias por su compra!!`);
                    setBuyer(initialValues);
                    setTotal (0);
                    clear();
                }
            });
        }
    };

    const validateForm = () => {
        const { email, emailConfirm } = buyer;

        if (email !== emailConfirm) {
            alert("Los campos de correo electrónico no coinciden.");
            return false;
        }

        return true;
    };

    const isBuyButtonDisabled = () => {
        const { name, phone, email, emailConfirm } = buyer;
        return !name.trim() || !phone.trim() || !email.trim() || !emailConfirm.trim();
    };

    return (
        <Container className="d-flex justify-content-start mt-4 fs-5">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Nombre y Apellido"
                        value={buyer.name}
                        onChange={handleChange}
                        name="name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                        type="phone"
                        placeholder="15 1111 2222"
                        value={buyer.phone}
                        onChange={handleChange}
                        name="phone"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        value={buyer.email}
                        onChange={handleChange}
                        name="email"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirmar Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="reingrese su email"
                        value={buyer.emailConfirm}
                        onChange={handleChange}
                        name="emailConfirm"
                    />
                </Form.Group>
                <div className="d-flex justify-content-start gap-5 mt-3">
                    <Button variant="dark" onClick={() => navigate("/Cart")} >Atras</Button>
                    <Button variant="dark" onClick={sendOrder} disabled={isBuyButtonDisabled()}>
                        Comprar
                    </Button>
                </div>
            </Form>
        </Container>
    );
};