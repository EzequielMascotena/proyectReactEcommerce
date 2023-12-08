import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const itemRef = doc(db, 'items', id);

            try {
                const snapshot = await getDoc(itemRef);

                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setError('El artículo no existe.');
                }
            } catch (error) {
                setError('Error al cargar el artículo. Inténtelo de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <Container className='mt-4'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {item && <ItemDetail item={item} />}
        </Container>
    );
};