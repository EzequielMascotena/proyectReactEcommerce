import { Item } from "./Item"

export const ItemList = ({ items }) => {
    return (
        <div className="d-flex flex-row justify-content-center gap-3">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};