import { Container } from "react-bootstrap";
import { Item } from "./Item"

export const ItemList = ({ items }) => {
    return (
        <Container className="d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {items.map((item) => (
                    <div key={item.id} className="col">
                        <Item item={item} />
                    </div>
                ))}
            </div>
        </Container>
    );
};