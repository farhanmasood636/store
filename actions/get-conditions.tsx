import { Condition } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/conditions`;

const getConditions = async (): Promise<Condition[]> => {
  const res = await fetch(URL);
  const conditions: Condition[] = await res.json();

  // Define the desired order of conditions
  const desiredOrder = ["Fair", "Good", "Excellent"];

  // Create a mapping object to associate conditions with order
  const conditionToOrder = Object.fromEntries(
    desiredOrder.map((condition, index) => [condition, index])
  );

  // Sort the conditions array based on the mapping
  const sortedConditions = [...conditions].sort((a, b) => {
    const orderA = conditionToOrder[a.name];
    const orderB = conditionToOrder[b.name];
    return orderA - orderB;
  });

  return sortedConditions;
};

export default getConditions;
