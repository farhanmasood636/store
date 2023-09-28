import getProducts from "@/actions/get-products";

import ProductList from "@/components/product-list";
import CategoriesShowdown from "@/components/ui/categories-showdown";
import Container from "@/components/ui/container";
import OurWorkStructure from "@/components/ui/our-work-structure";
import HomeSlider from "@/components/ui/home-slider";
import WhyUs from "@/components/ui/why-us";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
      <Container>
        <div className="mb-20">
          <HomeSlider />
        </div>
        <WhyUs />
        <section className="container mx-auto flex flex-col justify-between items-center gap-2 mb-20">
          <h1 className="max-md:text-2xl max-lg:text-3xl text-4xl font-bold mb-10">
            Browse our <span className="text-[#FB6D11]">Categories</span>
          </h1>
          <div className="w-full px-[2.5rem]">
            <div className="about-cards flex justify-center items-center gap-10 max-lg:flex-col flex-row">
              <CategoriesShowdown data={categories} />
            </div>
          </div>
        </section>

        <h1 className="max-md:text-2xl max-lg:text-3xl text-4xl font-bold mb-10 text-center">
          Browse our <span className="text-[#FB6D11]">Featured</span> Products
        </h1>
        <div className="flex iems-start flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-20">
          <ProductList items={products} />
        </div>
        <OurWorkStructure />
      </Container>
  );
};

export default HomePage;
