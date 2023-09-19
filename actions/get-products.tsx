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
  conditionId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      brandId: query.brandId,
      storageId: query.storageId,
      conditionId: query.conditionId,
      carrierId: query.carrierId,
      networkId: query.networkId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  return res.json();
};

export default getProducts;
