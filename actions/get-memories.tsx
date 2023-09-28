import { Memory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/memories`;

const getMemories = async (): Promise<Memory[]> => {
  const res = await fetch(URL);
  const memories: Memory[] = await res.json();

  // Define the desired order of memories
  const desiredOrder = ["3 GB", "4 GB", "6 GB", "8 GB", "12 GB"];

  // Create a mapping object to associate memories with order
  const sizeToOrder = Object.fromEntries(
    desiredOrder.map((size, index) => [size, index])
  );

  // Sort the memories array based on the mapping
  const sortedMemories = [...memories].sort((a, b) => {
    const orderA = sizeToOrder[a.name];
    const orderB = sizeToOrder[b.name];
    return orderA - orderB;
  });

  return sortedMemories;
};

export default getMemories;
