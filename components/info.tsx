"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div className="w-[100%] h-auto">
      <h1 className="max-md:text-xl max-lg:text-2xl text-3xl font-bold text-gray-900 h-auto">
        {data?.productInfo?.name}
      </h1>
      <p className="max-lg:text-lg text-xl mt-5 max-xl:mt-2">
        {data?.productInfo?.description}
      </p>
      <div className="flex items-end justify-between mt-5 max-xl:mt-2">
        <p className="max-md:text-xl text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4 text-sm">
          <h3 className="font-semibold text-black">Carrier:</h3>
          <p className="border border-black w-[100px] text-black text-center rounded-md py-[5px]">
            {data?.carrier?.name}
          </p>
        </div>
        <div className="flex items-center gap-x-4 text-sm">
          <h3 className="font-semibold text-black">Storage:</h3>
          <p className="border border-black w-[100px] text-black text-center rounded-md py-[5px]">
            {data?.storage?.name}
          </p>
        </div>
        <div className="flex items-center gap-x-4 text-sm">
          <h3 className="font-semibold text-black">Condition:</h3>
          <p className="border border-black w-[100px] text-black text-center rounded-md py-[5px]">
            {data?.condition?.name}
          </p>
        </div>
        <div className="flex items-center gap-x-4 text-sm">
          <h3 className="font-semibold text-black">Color:</h3>
          <p className="text-black text-center">
            {data?.color?.name}
          </p>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 max-md:text-sm text-lg"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
