"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Color, Condition, Storage, Carrier, Network } from "@/types";

import Filter from "./filter";

interface MobileFiltersProps {
  colors: Color[];
  conditions: Condition[],
  storages: Storage[],
  carriers: Carrier[],
  networks: Network[],
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, conditions, storages, carriers, networks }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="colorId" name="Colors" data={colors} />
              <Filter valueKey="storageId" name="Storages" data={storages} />
              <Filter valueKey="conditionId" name="Conditions" data={conditions} />
              <Filter valueKey="carrierId" name="Carriers" data={carriers} />
              <Filter valueKey="networkId" name="Carriers" data={networks} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
