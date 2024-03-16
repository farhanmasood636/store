import {
  FlipHorizontal,
  Lock,
  ShieldCheck,
  ShoppingCart,
  Wallet2,
} from "lucide-react";

const OurWorkStructure = () => {
  return (
    <div className="min-h-screen bg-white mb-20 mx-5">
      <h1 className="max-md:text-2xl max-lg:text-3xl text-4xl font-bold mb-10 text-center">
        <span className="text-[#FB6D11]">Why</span> Us
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
        <div className="flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
          <div className="flex justify-center md:justify-end">
            <div className="bg-white w-[120px] h-[120px] shadow-lg rounded-xl p-4 flex justify-center items-center">
              <ShieldCheck className="text-[#fb6d11] w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="border border-[#FB6D11] shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
            <h1 className="font-bold text-xl pb-4 max-md:text-lg">
              Product <span className="text-[#FB6D11]">Quality</span> and{" "}
              <span className="text-[#FB6D11]">Authenticity</span>{" "}
            </h1>
            <p className="text-lg max-md:text-sm">
              Shop confidently with our commitment to product quality and
              authenticity. We ensure that every item on our platform meets high
              standards, delivering genuine products you can trust.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white  md:bg-transparent  rounded-xl gap-10">
          <div className="w-full md:w-[500px] flex justify-center md:justify-end">
            <div className="w-[120px] h-[120px]  shadow-lg bg-white md: rounded-xl md:p-4 flex justify-center items-center">
              <ShoppingCart className="text-[#fb6d11] w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="border border-[#FB6D11]  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
            <h1 className="font-bold text-xl pb-4 max-md:text-lg">
              Wide Product <span className="text-[#FB6D11]">Selection</span>{" "}
            </h1>
            <p className="text-lg max-md:text-sm">
              Explore an extensive product selection that caters to all your
              needs. From mobile phones and laptops to watches, we offer a wide
              range of choices, ensuring you find the perfect fit for your
              preferences.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white md:bg-transparent   rounded-xl gap-10">
          <div className="w-full md:w-[750px] flex justify-center md:justify-end">
            <div className="w-[120px]   shadow-lg h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center">
              <Wallet2 className="text-[#fb6d11] w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="border border-[#FB6D11] shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
            <h1 className="font-bold text-xl pb-4 max-md:text-lg">
              Competitive <span className="text-[#FB6D11]">Pricing</span>{" "}
            </h1>
            <p className="text-lg max-md:text-sm">
              Benefit from our competitive pricing that guarantees value for
              your money. We strive to offer the best deals without compromising
              on quality or service, making your shopping experience
              exceptional.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
          <div className="w-full md:w-[500px] flex justify-center md:justify-end">
            <div className="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
              <Lock className="text-[#fb6d11] w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="border border-[#FB6D11] shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
            <h1 className="font-bold text-xl pb-4 max-md:text-lg">
              Secure Payment <span className="text-[#FB6D11]">Options</span>{" "}
            </h1>
            <p className="text-lg max-md:text-sm">
              Experience worry-free shopping with our customer-centric policies,
              competitive pricing, and commitment to data security. Trust in a
              reliable shopping experience, supported by clear policies and a
              user-friendly website.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
          <div className="flex justify-center md:justify-end">
            <div className="w-[120px]  h-[120px] bg-white   shadow-lg  rounded-xl p-4 flex justify-center items-center">
              <FlipHorizontal className="text-[#fb6d11] w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="border border-[#FB6D11] shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
            <h1 className="font-bold text-xl pb-4 max-md:text-lg">
              Unbeatable <span className="text-[#FB6D11]">Refurbished Deals</span>{" "}
            </h1>
            <p className="text-lg max-md:text-sm">
              Explore our one-stop tech destination for unbeatable deals on refurbished iPhones, Apple Watch Series, laptops, Bluetooth headphones, phone cases, gaming headsets, wireless earbuds, and more! Upgrade your gadgets without breaking the bank. Shop now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkStructure;
