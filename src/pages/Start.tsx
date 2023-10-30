
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Item, query } from "../services/fakeservice";

const useQueryItems = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        setItems(query());
    });

    return items;
}

export const Start = () => {
    const items = useQueryItems();

    return (
        <div>
            <div>
                <Link to="/create">Create</Link>
            </div>

            {items?.map(item => (
                <div className="border p-4 flex">
                    <span className="font-bold">{item.title}</span>
                    <Link className="text-blue-200 " to={`/details/${item.id}`}>Details</Link>
                </div>
            ))}
        </div>
    );
};