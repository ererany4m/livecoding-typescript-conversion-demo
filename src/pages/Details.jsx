import { useParams } from "react-router-dom"
import { get } from "../services/fakeservice";

const useGetDetails = (id) => {

    const [details, setDetails] = useState(null);

    useEffect(() => {
        (async () => {
            setDetails(await get(id));
        });
    }, [id]);

    return details;
}

export const Details = () => {
    const params = useParams();

    const item = useGetDetails(params.id);

    return (
        <div>
            {item.name}
        </div>
    );
}