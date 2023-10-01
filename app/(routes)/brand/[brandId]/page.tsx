import Products from "@/components/products";
import HomeSlider from "@/components/ui/home-slider";
import Container from "@/components/ui/container";

import getAllProducts1 from "@/actions/get-all-products-1";
import getColors from "@/actions/get-colors";
import getStorages from "@/actions/get-storages";
import getConditions from "@/actions/get-conditions";
import getCarriers from "@/actions/get-carriers";
import getNetworks from "@/actions/get-networks";
import getMemories from "@/actions/get-memories";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface BrandPageProps {
  params: {
    brandId: string;
  };
  searchParams: {
    colorId: string;
    storageId: string;
    conditionId: string;
    carrierId: string;
    networkId: string;
    memoryId: string;
  };
}

const BrandPage: React.FC<BrandPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getAllProducts1({
    brandId: params.brandId,
    colorId: searchParams.colorId,
    storageId: searchParams.storageId,
    conditionId: searchParams.conditionId,
    carrierId: searchParams.carrierId,
    networkId: searchParams.networkId,
    memoryId: searchParams.memoryId,
  });
  const colors = await getColors();
  const storages = await getStorages();
  const conditions = await getConditions();
  const carriers = await getCarriers();
  const networks = await getNetworks();
  const memories = await getMemories();

  return (
    <div className="bg-white">
      <Container>
        <div className="mb-20">
          <HomeSlider />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters
              colors={colors}
              storages={storages}
              conditions={conditions}
              carriers={carriers}
              networks={networks}
              memories={memories}
            />
            <div className="hidden lg:block">
              <Filter valueKey="colorId" name="Colors" data={colors} />
              <Filter valueKey="storageId" name="Storages" data={storages} />
              <Filter valueKey="memoryId" name="Memory" data={memories} />
              <Filter
                valueKey="conditionId"
                name="Conditions"
                data={conditions}
              />
              <Filter valueKey="carrierId" name="Carriers" data={carriers} />
              <Filter valueKey="networkId" name="Networks" data={networks} />
            </div>
            <Products products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandPage;
