"use client";

import { Product } from "@/types";
import { useState, useEffect } from "react";

interface SearchBarProps {
  data: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const matched = data.filter((product) =>
      product?.productInfo?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    const shuffledProducts = matched.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 4);

    setMatchedProducts(selectedProducts);
  }, [searchTerm, data]);

  return (
    <div className="sm:flex border border-black items-center rounded-full overflow-hidden px-2 py-4 justify-between w-full">
      <input
        className="bg-transparent text-base text-black flex-grow outline-none px-2"
        type="text"
        placeholder="Search your product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <div className="w-full mt-4 absolute top-11 left-0 bg-white rounded-md z-20 px-5 py-10 shadow-2xl max-h-[400px] overflow-auto">
          {matchedProducts.length > 0 ? (
            <>
              <div className="text-black">
                {matchedProducts.map((product) => (
                  <a
                    key={product?.id}
                    href={`/product/${product?.id}`}
                    className="flex gap-5 items-center mb-5"
                  >
                    <div className="flex justify-center items-center h-10 w-10">
                      <img
                        src={product.images?.[0]?.url}
                        alt={product?.productInfo?.name}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex-col">
                      <p className="text-lg">{product?.productInfo?.name}</p>
                      <div className="flex gap-5">
                        <p className="text-sm">{product?.condition?.name}</p>
                        <p className="text-sm">{product?.storage?.name}</p>
                        <p className="text-sm">{product?.carrier?.name}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <p className="text-black">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
