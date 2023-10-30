import { useParams } from "react-router-dom"
import { Item, get } from "../services/fakeservice";
import { useEffect, useState } from "react";

const useGetDetails = (id: string) => {

    const [details, setDetails] = useState<Item | undefined>(undefined);

    useEffect(() => {
        setDetails(get(id));
    }, [id]);

    return details;
}

export const Details = () => {
    const params = useParams();

    const item = useGetDetails(params.id as string);

    if (item === undefined) return <div>No item found</div>

    return (
        <div>
            <div className="font-bold">Name</div><div>{item.title}</div>
            <div className="font-bold">Description</div><div>{item.description}</div>
            <div className="font-bold">Maximum fuel</div><div>{item.maximumFuel}</div>
        </div>
    );
};