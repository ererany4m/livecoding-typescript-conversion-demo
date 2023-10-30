
import { v4 as uuidv4 } from "uuid"

const getItemsFromLocalStorage = () => localStorage.getItem("items") ?? [];

export const save = async (item) => {
    return new Promise(r => {
        const items = getItemsFromLocalStorage();
        item.id = uuidv4();
        items.push(item);
        r();
    });
}

export const query = async () => {
    return new Promise(r => {
        r(getItemsFromLocalStorage())
    });
}

export const get = async (id) => {
    const items = getItemsFromLocalStorage();

    r(items.find(i => i.eid === id));
};
