import { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
    const {onAdd} = useContext(CartContext);

    const add = () => {
        onAdd(item);
    };

    return (
        <>
            <h1>{item.title}</h1>
            <Card>
                <Card.Img variant="top" src={item.pictureUrl} alt={item.alt} />
                <Card.Body>
                    <Card.Text className='fs-3'>
                        Descripcion: {item.description}.
                    </Card.Text>
                    <h2>
                        <Badge bg="dark">${item.price}.-</Badge>
                    </h2>
                    <ItemCounter onAdd={add} />
                </Card.Body>
            </Card>
        </>
    );
};


