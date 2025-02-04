import { BellRing, ShoppingCart, Tags } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-5/6 flex justify-between py-5 px-8 absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#202127] rounded-xl">
      <ShoppingCart color="white" size={25} className="stroke-[#F7C841]" />
      <Tags color="white" size={25} className="hover:stroke-[#F7C841]" />
      <BellRing color="white" size={25} className="hover:stroke-[#F7C841]" />
    </div>
  );
};

export default Footer;
