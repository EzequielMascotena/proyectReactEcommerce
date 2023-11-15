import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { products } from '../data/products';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        mypromise.then((response) => {
            if (!id) {
                setItems(response);
            } else {
                const filterByCategory = response.filter(
                    (item) => item.category === id
                );
                setItems(filterByCategory);
            }
        })
        .catch((error) => {
            console.error("Error al cargar los productos:", error);
        });
    }, [id]);

    return (
        <Container fluid className='mt-4'>
            {items ? <ItemList items={items} /> : <>Loading..</>}
        </Container>);
}