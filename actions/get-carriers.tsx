import { Carrier } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/carriers`;

const getCarriers = async (): Promise<Carrier[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getCarriers;

