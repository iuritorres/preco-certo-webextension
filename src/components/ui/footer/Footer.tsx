import { BellRing, LucideIcon, ShoppingCart, Tags } from "lucide-react";
import { NavLink, To } from "react-router-dom";

export interface FooterLinks {
  icon: LucideIcon;
  path: To;
}

const footerIcons: FooterLinks[] = [
  { icon: ShoppingCart, path: "/" },
  { icon: Tags, path: "/vouchers" },
  { icon: BellRing, path: "/notifications" },
];

interface FooterProps {
  activeRoute: To;
  onRouteChange: (path: To) => void;
}

const Footer = ({ activeRoute, onRouteChange }: FooterProps) => {
  return (
    <footer className="w-6/7 flex justify-between py-5 px-8 absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#36383f] rounded-xl">
      {footerIcons.map(({ icon: Icon, path }) => (
        <NavLink
          key={path as string}
          to={path}
          onClick={() => onRouteChange(path)}
        >
          <Icon
            size={25}
            color={activeRoute === path ? "#F7C841" : "white"}
            cursor="pointer"
          />
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
