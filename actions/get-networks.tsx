import { Network } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/networks`;

const getNetworks = async (): Promise<Network[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getNetworks;

