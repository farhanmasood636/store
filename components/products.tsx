"use client";

import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductProps {
  products: Product[];
}

const Products: React.FC<ProductProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const maxDisplayedPages = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    let pageNumbers = [];
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxDisplayedPages / 2)
    );
    let endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageClick(i)}
          className={`max-md:mx-3 max-sm:text-sm max-sm:mx-2 text-lg cursor-pointer mx-5 p-2 ${
            i === currentPage ? "text-[#FB6D11]" : ""
          }`}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      {currentProducts.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-[#FB6D11] p-3 rounded-full"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <div className="flex mx-2">{generatePageNumbers()}</div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-[#FB6D11] p-3 rounded-full"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Products;
