import { Carrier } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/carriers`;

const getCarrier = async (id: string): Promise<Carrier> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getCarrier;
