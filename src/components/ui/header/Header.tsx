import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Home Screen!</h1>

        <div className="hover:bg-[#36383f] p-1 rounded-sm">
          <Menu color="white" size={25} className="cursor-pointer" />
        </div>
      </div>

      <hr className="mt-2 mb-4 border-white" />
    </header>
  );
};

export default Header;
