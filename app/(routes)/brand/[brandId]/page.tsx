import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import getProducts from "@/actions/get-products";
import getColors from "@/actions/get-colors";
import getStorages from "@/actions/get-storages";
import getConditions from "@/actions/get-conditions";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import HomeSlider from "@/components/ui/home-slider";
import getCarriers from "@/actions/get-carriers";
import getNetworks from "@/actions/get-networks";

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
  };
}

const BandPage: React.FC<BrandPageProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    brandId: params.brandId,
    colorId: searchParams.colorId,
    storageId: searchParams.storageId,
    conditionId: searchParams.conditionId,
    carrierId: searchParams.carrierId,
    networkId: searchParams.networkId,
  });
  const colors = await getColors();
  const storages = await getStorages();
  const conditions = await getConditions();
  const carriers = await getCarriers();
  const networks = await getNetworks();

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
            />
            <div className="hidden lg:block">
              <Filter valueKey="colorId" name="Colors" data={colors} />
              <Filter valueKey="storageId" name="Storages" data={storages} />
              <Filter
                valueKey="conditionId"
                name="Conditions"
                data={conditions}
              />
              <Filter valueKey="carrierId" name="Carriers" data={carriers} />
              <Filter valueKey="networkId" name="Networks" data={networks} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BandPage;
