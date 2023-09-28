"use client";

import qs from "query-string";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Storage, Color, Condition, Carrier, Network, Memory } from "@/types";

interface FilterProps {
  data: Storage[] | Color[] | Condition[] | Carrier[] | Network[] | Memory[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);
  const [showAll, setShowAll] = useState(false);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  let visibleData = data;

  if (!showAll) {
    visibleData = data.slice(0, 8);
  }
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {visibleData.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "font-medium rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
        <br />
        {data.length > 8 && (
          <div className="flex items-center">
            <p
              className="font-medium text-sm text-[#FB6D11] cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
