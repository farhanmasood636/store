import { Storage } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/storages`;

const getStorages = async (): Promise<Storage[]> => {
  const res = await fetch(URL);
  const storages: Storage[] = await res.json();

  // Define the desired order of storage sizes
  const desiredOrder = ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"];

  // Create a mapping object to associate storage sizes with order
  const sizeToOrder = Object.fromEntries(
    desiredOrder.map((size, index) => [size, index])
  );

  // Sort the storages array based on the mapping
  const sortedStorages = [...storages].sort((a, b) => {
    const orderA = sizeToOrder[a.name];
    const orderB = sizeToOrder[b.name];
    return orderA - orderB;
  });

  return sortedStorages;
};

export default getStorages;
