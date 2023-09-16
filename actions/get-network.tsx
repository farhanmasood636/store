import { Network } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/networks`;

const getNetwork = async (id: string): Promise<Network> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getNetwork;
