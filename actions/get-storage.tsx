import { Storage } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/storages`;

const getStorage = async (id: string): Promise<Storage> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getStorage;
