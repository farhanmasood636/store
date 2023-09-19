import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 mb-5">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images[0]?.url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between max-sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-lg font-semibold text-black">{data?.name}</p>
            <Currency value={data?.price} />
          </div>
          <p className="text-black text-sm">Color: <span className="text-gray-500">{data?.color?.name}</span></p>
          <p className="text-black text-sm">
            Condition: <span className="text-gray-500">{data?.condition?.name}</span>
          </p>
          <p className="text-black text-sm">
            Carrier: <span className="text-gray-500">{data?.carrier?.name}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
