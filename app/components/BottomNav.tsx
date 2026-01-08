import React from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoCompassOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


type NavItem = {
  key: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { key: "explore", label: "Explore", Icon: IoIosSearch },
  { key: "offers", label: "Offers", Icon: BiSolidOffer },
  { key: "bookings", label: "Bookings", Icon: IoCompassOutline },
  { key: "wishlist", label: "Wishlist", Icon: AiOutlineHeart },
  { key: "signin", label: "Sign In", Icon: CgProfile },
];

export default function BottomNav(): React.ReactNode {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-[390px] bg-white border-t border-gray-200 flex justify-around py-6 text-xs">
      {navItems.map(({ key, label, Icon }) => {
        const isActive = key === "offers";
        return (
          <button
            key={key}
            aria-label={label}
            className={`flex flex-col items-center gap-1.5 text-xs focus:outline-none ${
              isActive ? "text-[#C56A3A]" : "text-gray-500"
            }`}
          >
            <Icon className={`text-2xl`} />
            <span className="leading-none">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
