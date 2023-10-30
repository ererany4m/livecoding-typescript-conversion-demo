
import { v4 as uuidv4 } from "uuid"

export interface Item {
    id?: string;
    title: string;
    description: string;
    maximumFuel: number | null;
}

const getItemsFromLocalStorage = (): Item[] => JSON.parse(localStorage.getItem("items") ?? "[]") ?? [];

export const save = async (item: Item) => {
    return new Promise(r => {
        const items = getItemsFromLocalStorage();
        item.id = uuidv4();
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items))
        r(null);
    });
}

export const query = () => {
    return getItemsFromLocalStorage();
}

export const get = (id: string) => {
    const items = getItemsFromLocalStorage();

    return items.find(i => i.id === id);
};
