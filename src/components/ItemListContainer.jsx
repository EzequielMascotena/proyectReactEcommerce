import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

import { ItemList } from './ItemList';


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, "items")
            : query(collection(db, "items"), where("categoryId", "==", id));

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, [id]);

    return (
        <Container fluid className='mt-4'>
            {items ? <ItemList items={items} /> : <>Loading..</>}
        </Container>);
}