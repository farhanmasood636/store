"use client"

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4 w-[100%] h-auto">
      <div className="aspect-square rounded-xl bg-gray-100 relative w-full">
        <a href={`/product/${data?.id}`}>
          <Image
            src={data.images?.[0]?.url}
            alt=""
            fill
            className="aspect-square object-contain rounded-md w-[] cursor-pointer"
          />
        </a>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-5 rounded-xl">
        <div>
          <a href={`/product/${data?.id}`}>
            <p className="text-left cursor-pointer font-semibold text-xl max-md:text-lg mb-2">{data?.name}</p>
          </a>
          <p className="text-left text-sm text-gray-500 mb-2 h-[90px] max-lg:h-[100px]">{data?.description}</p>
        </div>
        <div className="flex items-center justify-between mb-3 font-semibold text-xl max-md:text-lg border border-b-black">
          <Currency value={data?.price} />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-white p-[10px] bg-[#FB6D11] rounded-2xl">{data?.carrier?.name}</p>
          <p className="text-sm text-white p-[10px] bg-[#FB6D11] rounded-2xl">{data?.condition?.name}</p>
          <p className="text-sm text-white p-[10px] bg-[#FB6D11] rounded-2xl">{data?.storage?.name}</p>
          <p className="text-sm text-white p-[10px] bg-[#FB6D11] rounded-2xl">{data?.network?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
