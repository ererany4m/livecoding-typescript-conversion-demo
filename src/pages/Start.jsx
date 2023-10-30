
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { query } from "../services/fakeservice";

const useQueryItems = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        (async () => {
            setItems(await query());
        })
    });

    return items;
}

export const Start = () => {
    const items = useQueryItems();
    return (
        <div>
            {items.map(item => (
                <div className="border p-4 flex ">
                    <span className="font-bold">{item.name}</span>
                    <Link className="text-blue-200 " to={`/details/${item.eid}`}>Details</Link>
                </div>
            ))}
        </div>
    );
};