import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  brandId?: string;
  storageId?: string;
  carrierId?: string;
  networkId?: string;
  memoryId?: string;
  conditionId?: string;
  isFeatured?: boolean;
}

const getAllProducts1 = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      brandId: query.brandId,
      storageId: query.storageId,
      memoryId: query.memoryId,
      conditionId: query.conditionId,
      carrierId: query.carrierId,
      networkId: query.networkId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  const products = await res.json();

  const filteredProducts = products.filter((product: any) => {
    return product.category.name === "Mobile Phones";
  });

  return filteredProducts;
};

export default getAllProducts1;
