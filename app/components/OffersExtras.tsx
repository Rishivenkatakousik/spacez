"use client";

import Image from "next/image";
import cards from "@/public/images/cards.png";
import qr from "@/public/images/qr.png";
import { useAuth } from "../providers/AuthProvider";
import { coupons as couponsData, bonusGiftCards,paymentOffers } from "@/constants";
import { FiCopy } from "react-icons/fi";
import { toast } from "sonner";
import React from "react";

type Coupon = {
  id: number;
  code: string;
  discount: string;
  description: string;
};

function SignedOutExtras() {
  return (
    <div className="space-y-4">
      {/* Gift Cards */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Bonus gift cards:
        </h3>

        <div className="bg-[#FEF8F6] relative rounded-sm p-2 overflow-visible">
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                Assured vouchers up to <br />
                <span className="text-[#C56A3A]">₹1000✨</span>
              </p>
              <p className="text-xs text-gray-600 mb-3">of trending brands</p>
            </div>

            <div className="absolute -right-2 -top-1 z-10 w-26.5 h-23 pointer-events-none">
              <Image
                src={cards}
                alt="gift cards"
                width={105}
                height={91}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => toast.success("Gift cards claimed")}
          className="mt-2 w-full bg-[#C56A3A] text-white py-2 rounded text-sm"
        >
          Claim gift cards »
        </button>
      </div>

      {/* Payment Offers */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Payment offers:</h3>

        <div className="bg-[#FEF8F6] relative rounded-sm p-2 overflow-visible">
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0 pr-4">
              <p className="text-sm text-gray-700 mb-1">Save more on your bookings</p>
              <p className="text-2xl font-extrabold text-[#9A5632] leading-snug">
                upto <span className="text-3xl">15% Off</span>
              </p>
              <p className="text-sm font-semibold text-[#9A5632]">on select payment methods</p>
            </div>

            <div className="h-15 w-15 rounded-md bg-[#f7ece5]"></div>

            <div className="absolute right-2 z-20 w-18 h-15 pointer-events-none">
              <Image src={qr} alt="payment promo" width={71} height={60} className="object-contain" priority />
            </div>
          </div>
        </div>

        <button
          onClick={() => toast.success("Payment offers unlocked")}
          className="mt-2 w-full bg-[#C56A3A] text-white py-2 rounded text-sm"
        >
          Unlock offers »
        </button>
      </div>
    </div>
  );
}

function SignedInCoupons() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-1">Bonus gift cards:</h3>
        <p className="text-xs font-semibold">Collect multiple of these</p>
      </div>

      {bonusGiftCards.map((c) => (
        <div
          key={c.id}
          className="h-40 flex bg-[#FEF8F6] rounded-sm overflow-hidden border border-transparent"
        >
          {/* use inline style for dynamic color */}
          <div
            className="w-16 text-white flex items-center justify-center text-xs"
            style={{ backgroundColor: c.themeColor }}
          >
            <div className="transform -rotate-90 whitespace-nowrap text-3xl">
              {c.value}
            </div>
          </div>

          <div className="w-0.5 relative shrink-0">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: c.themeColor }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #FEF8F6 0 8px, transparent 8px 18px)",
              }}
            />
          </div>

          <div className="flex-1 p-3 bg-[#FDF9F7]">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 rounded">
                <Image src={c.logo} alt={c.code} width={36} height={36}/>
              <h4 className="text-sm font-semibold text-gray-800">{c.code}</h4>
              </div>
              <button 
                onClick={() => toast.success(`${c.code} Gift card claimed`)}
               className="flex items-center gap-2 text-sm text-[#9A5632] font-medium cursor-pointer">
                Collect
              </button>
            </div>
            <p className="text-xs text-gray-600">{c.condition}</p>
            <div className="mt-3 border-t border-[#EEE6E2] pt-3">
              <button 
              onClick={() => toast.success("Read more")}
               className="text-xs text-[#9A5632] font-medium">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}

      <div>
        <h3 className="text-sm font-semibold mb-1">Payment offers:</h3>
      </div>

      {paymentOffers.map((c) => (
        <div
          key={c.id}
          className=" h-40 flex bg-[#FEF8F6] rounded-sm overflow-hidden border border-transparent"
        >
          {/* use inline style for dynamic color */}
          <div
            className="w-16 text-white flex items-center justify-center text-xs"
            style={{ backgroundColor: c.themeColor }}
          >
            <div className="transform -rotate-90 whitespace-nowrap text-2xl">
              {c.discount}
            </div>
          </div>

          <div className="w-0.5 relative shrink-0">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: c.themeColor }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #FEF8F6 0 8px, transparent 8px 18px)",
              }}
            />
          </div>

          <div className="flex-1 p-3 bg-[#FDF9F7]">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2 rounded">
                <Image src={c.logo} alt={c.bank} width={36} height={36}/>
              <h4 className="text-sm font-semibold text-gray-800">{c.bank}</h4>
              </div>
              <button 
                onClick={() => toast.success(`${c.bank} Gift card claimed`)}
              className="flex items-center gap-2 text-sm text-[#9A5632] font-medium">
                Collect
              </button>
            </div>
            <p className="text-xs text-gray-600">{c.condition}</p>
            <div className="mt-3 border-t border-[#EEE6E2] pt-3">
              <button
              onClick={() => toast.success("Read more")}
               className="text-xs text-[#9A5632] font-medium">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OffersExtras(): React.ReactNode {
  const { signedIn } = useAuth();

  return <section className="px-6 space-y-6 bg-white">{signedIn ? <SignedInCoupons /> : <SignedOutExtras />}</section>;
}
