import { useState, useContext } from 'react';
import { Container, Button, Form, Alert, Modal } from 'react-bootstrap';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

import Brewmaster from "../assets/brewmaster.png";

const initialValues = {
    name: "",
    phone: "",
    email: "",
    emailConfirm: ""
};

export const CheckOut = () => {
    const { clear, items, total, setTotal } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);

    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [orderId, setOrderId] = useState(null);
    const [orderTotal, setOrderTotal] = useState(null);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value
            }
        });
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate("/");
    }

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
                    setShowModal(true);
                    setBuyer(initialValues);
                    setTotal(0);
                    clear();
                    setOrderId(id);
                    setOrderTotal(total);
                }
            });
        }
    };

    const validateForm = () => {
        const { email, emailConfirm } = buyer;

        if (email !== emailConfirm) {
            setError("Los campos de correo electrónico no coinciden.");
            return false;
        }

        setError(null);
        return true;
    };

    const isBuyButtonDisabled = () => {
        const { name, phone, email, emailConfirm } = buyer;
        return !name.trim() || !phone.trim() || !email.trim() || !emailConfirm.trim();
    };

    return (
        <Container className="d-flex justify-content-between mt-4 fs-5">
            <Form className='bg-dark-subtle p-4 ms-5'>
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
                {error && <Alert key="danger" variant="danger">{error}</Alert>}
                <div className="d-flex justify-content-start gap-5 mt-3">
                    <Button variant="dark" onClick={() => navigate("/Cart")} >Atras</Button>
                    <Button variant="dark" onClick={sendOrder} disabled={isBuyButtonDisabled()}>
                        Finalizar Compra
                    </Button>
                </div>
            </Form>
            <img src={Brewmaster} alt="imagen maestro cervecero" height="450px" className='ms-5' />

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header>
                    <Modal.Title>Muchas gracias por su compra!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Su orden: {orderId} ha sido completada! <hr />El total a pagar es de ${orderTotal}.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};