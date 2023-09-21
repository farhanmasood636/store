import {
  HeartHandshake,
  Laptop,
  Recycle,
  ShieldCheck,
  TabletSmartphone,
  Watch,
} from "lucide-react";

const whyUS = [
  {
    icon: <ShieldCheck className="h-14 w-14 text-white" />,
    heading: "Certified Quality",
    description: "All devices must pass our rigorous 30-point inspection",
  },
  {
    icon: <HeartHandshake className="h-14 w-14 text-white" />,
    heading: "Great Service",
    description: "Customer care 7 days a week Secure shopping experience",
  },
  {
    icon: <Recycle className="h-14 w-14 text-white" />,
    heading: "Positive Impact",
    description: "Buying renewed keeps eliminate waste out of landfills",
  },
];

const WhyUs = () => {
  return (
    <div className="flex justify-between items-centerm m-5 my-20 flex-wrap gap-10">
      {whyUS.map((why, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 justify-center items-center w-[320px] max-md:w-[100%] bg-[#FB6D11] p-20 rounded-lg"
        >
          <div>{why.icon}</div>
          <h1 className="text-center text-xl text-white  max-md:text-lg max-sm:text-sm font-bold">
            {why.heading}
          </h1>
          <p className="text-center text-lg max-sm:text-sm w-[250px] max-md:w-[100%] font-medium">
            {why.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
