import { useContext } from 'react';

import { Container, Card, Badge } from 'react-bootstrap';

import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
    const { onAdd } = useContext(CartContext);

    const add = (quantity) => {
        onAdd(item, quantity);
    };

    return (
        <Container className='mt-3'>
            <div className="d-flex flex-row justify-content-between mb-2">
                <h1 className='fw-bold'>{item.title}</h1>
                <Badge className='fs-3' bg="dark">${item.price}.-</Badge>
                <Badge className='fs-3' bg="dark">Stock:{item.stock}</Badge>
            </div>

            <Card>
                <Card.Img variant="top" src={item.pictureUrl} alt={item.alt} />
                <Card.Body>
                    <Card.Text className='fs-3'>
                        {item.description}
                    </Card.Text>
                    <ItemCounter onAdd={add} stock={item.stock} initial={1} />
                </Card.Body>
            </Card>
        </Container>
    );
};


