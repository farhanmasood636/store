import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import {
  Battery,
  Camera,
  Cpu,
  Database,
  HardDrive,
  MemoryStick,
  PencilRuler,
  RadioTower,
  Signal,
  SwitchCamera,
  Tv2,
} from "lucide-react";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

interface SpecsCardProps {
  icon: React.ReactElement,
  label: string,
  name: string,
}

const SpecsCard: React.FC<SpecsCardProps> = ({ icon, label, name }) => (
  <div className="flex justify-center items-center flex-col gap-5 w-[33%]">
    {icon}
    <h1 className="text-xl max-md:text-lg font-medium text-center">{name}</h1>
    <p className="max-md:text-sm text-lg text-center font-light">
      {label}
    </p>
  </div>
)

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  if (!product) {
    return null;
  }

  let defaultClassName = "h-16 w-16 text-[#FB6D11] max-md:h-12 max-md:w-12 max-sm:h-8 max-sm:w-8"

  let row1 = [
    {
      icon: <Cpu className={defaultClassName} />,
      label: product?.operatingSystem,
      name: "Operating System"
    },
    {
      icon: <MemoryStick className={defaultClassName} />,
      label: product?.processor,
      name: "Processor"
    },
    {
      icon: <HardDrive className={defaultClassName} />,
      label: product?.memory,
      name: "Memory"
    }
  ]

  let row2 = [
    {
      icon: <Database className={defaultClassName} />,
      label: product?.storage?.name,
      name: "Storage",
    },
    {
      icon: <Camera className={defaultClassName} />,
      label: product?.frontCamera,
      name: "Front Camera"
    },
    {
      icon: <SwitchCamera className={defaultClassName} />,
      label: product?.rearCamera,
      name: "Rear Camera"
    }
  ]

  let row3 = [
    {
      icon: <Battery className={defaultClassName} />,
      label: product?.battery,
      name: "Battery",
    },
    {
      icon: <Tv2 className={defaultClassName} />,
      label: product?.frontCamera,
      name: "Display"
    },
    {
      icon: <RadioTower className={defaultClassName} />,
      label: product?.connectivity,
      name: "Connectivity"
    }
  ]

  let row4 = [
    {
      icon: <PencilRuler className={defaultClassName} />,
      label: product?.dimensions,
      name: "Dimensions",
    },
    {
      icon: <Signal className={defaultClassName} />,
      label: product?.network?.name,
      name: "Network"
    }
  ]

  return (
    <div className="bg-white w-full">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex max-md:flex-col gap-10">
            <Gallery images={product.images} />
            <Info data={product} />
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <h1 className="max-md:text-2xl max-lg:text-3xl text-4xl font-bold mb-5">
              Specifications
            </h1>
            <div className="flex flex-col gap-40 max-md:gap-10 justify-center items-center">
              <div className="flex justify-between items-center max-md:flex-col max-md:gap-10 w-[100%]">
                {row1.map((specs, index) => (
                  <SpecsCard key={index} icon={specs.icon} label={specs.label} name={specs.name} />
                ))}
              </div>
              <div className="flex justify-between items-center max-md:flex-col max-md:gap-10 w-[100%]">
                {row2.map((specs, index) => (
                  <SpecsCard key={index} icon={specs.icon} label={specs.label} name={specs.name} />
                ))}
              </div>
              <div className="flex justify-between items-center max-md:flex-col max-md:gap-10 w-[100%]">
                {row3.map((specs, index) => (
                  <SpecsCard key={index} icon={specs.icon} label={specs.label} name={specs.name} />
                ))}
              </div>
              <div className="flex justify-between items-center max-md:flex-col max-md:gap-10 w-[100%]">
                {row4.map((specs, index) => (
                  <SpecsCard key={index} icon={specs.icon} label={specs.label} name={specs.name} />
                ))}
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <h1 className="max-md:text-2xl max-lg:text-3xl text-4xl font-bold mb-5">
            Related Items
          </h1>
          <ProductList items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
