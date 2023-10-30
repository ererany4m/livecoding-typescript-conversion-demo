
import { v4 as uuidv4 } from "uuid"

export const save = async (item) => {
    return new Promise(r => {
        const items = localStorage.getItem("items") ?? [];
        item.id = uuidv4();
        items.push(item);
        r();
    });
}

export const query = async () => {
    return new Promise(r => {
        r([{
            eid: "test",
            name: "hejsan"
        }])
    })
}

export const get = async (id) => {
    
};
