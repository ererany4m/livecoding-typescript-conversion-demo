
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { query } from "../services/fakeservice";

const useQueryItems = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        (async () => {
            setItems(await query());
        })
    })
}

export const Start = () => {
    const items = useQueryItems;
    return (
        <div>
            {items.map(item => (
                <div>
                    {item.name}
                    <Link className="" to={`/details/${item.eid}`}>Details</Link>
                </div>
            ))}
        </div>
    );
};