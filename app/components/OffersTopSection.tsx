"use client";

import Image from "next/image";
import logo from "@/public/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "@/app/providers/AuthProvider";
import { toast } from "sonner";

export default function OffersTopSection() {
  const { signedIn, setSignedIn } = useAuth();

  return (
    <>
      {/* center fixed header using left-1/2 + transform */}
      <section className="fixed left-1/2 -translate-x-1/2 top-0 z-30 shadow-md w-full max-w-97.5">
        {/* center the fixed header to the page max width */}
        <div className="w-full mx-auto bg-white">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
            <div className="flex items-center">
              <Image src={logo} alt="spacez logo" width={120} height={32} />
            </div>
            <button className="text-2xl text-[#9A5632]" aria-label="menu">
              <GiHamburgerMenu />
            </button>
          </div>

          {/* Title + Sign In Banner */}
          <div className={`px-6 pt-6 ${signedIn ? "pb-2" : "pb-6"}`}>
            <h1 className="text-2xl font-bold text-[#4B4E4B] mb-3">Offers</h1>

            <p className="text-sm mb-4 text-[#4B4E4B]">
              Sign in to unlock exclusive additional rewards
            </p>

            {!signedIn && (
              <button
                onClick={() => {
                  setSignedIn(true);
                  toast.success("Signed in");
                }}
                className="w-full bg-[#C56A3A] text-white py-3 rounded-sm font-medium text-base cursor-pointer"
              >
                Sign in
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex bg-white px-4 border-b border-gray-200">
            {["Coupons", "Giftcards", "Payment Offers"].map((tab, index) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-sm font-medium ${
                  index === 1 ? "border-b-2" : "text-gray-500"
                }`}
                onClick={() => toast.success(`${tab} selected`)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* spacer (matches fixed header height) so page content doesn't go under the fixed header */}
      <div
        aria-hidden
        className={`max-w-97.5 w-full mx-auto ${signedIn ? "h-52.5" : "h-67.5"}`}
      />
    </>
  );
}
