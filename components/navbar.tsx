import getBrands from "@/actions/get-brands";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import SearchBar from "@/components/search-bar";
import getAllProducts from "@/actions/get-all-products";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const brands = await getBrands();
  const products = await getAllProducts();
  const categories = await getCategories();

  return (
    <Container>
      <div className="flex justify-center items-center flex-col w-[100%] gap-10">
        <div className="px-4 sm:px-6 lg:px-8 flex h-28 items-center justify-between w-[100%]">
          <a href="/" className="w-40 h-40">
            <img
              src="/logos/logo.jpeg"
              alt="direct promotion logo"
              className="w-full h-full object-contain"
            />
          </a>
          <div className="max-lg:hidden w-[50%] relative">
            <SearchBar data={products} />
          </div>
          <NavbarActions data={brands} data1={categories} />
        </div>
        <div className="max-lg:hidden">
          <MainNav data={brands} data1={categories} />
        </div>
        <div className="hidden w-[80%] max-lg:block mx-5 relative">
          <SearchBar data={products} />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
