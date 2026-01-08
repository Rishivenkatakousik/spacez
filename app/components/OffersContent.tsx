"use client";

import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { coupons as couponsData } from "@/constants";
import { toast } from "sonner";

type Coupon = {
  id: number;
  code: string;
  discount: string;
  description: string;
};

export default function OffersContent(): React.ReactNode {
  const coupons = couponsData as Coupon[];
  const [copied, setCopied] = useState<Record<number, boolean>>({});

  const handleCopy = async (id: number, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied((s) => ({ ...s, [id]: true }));
      toast.success(`${code} copied`);
      setTimeout(() => setCopied((s) => ({ ...s, [id]: false })), 1800);
    } catch {
      toast.error("Copy failed");
    }
  };

  return (
    <section>

      {/* Coupons */}
      <div className="px-6 py-4 bg-white">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Sitewide coupons:
        </h3>

        <div className="space-y-4">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="h-40 flex bg-[#FEF8F6] rounded-sm overflow-hidden border border-transparent"
            >
              {/* Discount strip */}
              <div className="w-16 bg-[#C56A3A] text-white flex items-center justify-center text-3xl">
                <div className="transform -rotate-90 whitespace-nowrap">
                  {coupon.discount}
                </div>
              </div>

              {/* Perforation / separator (updated) */}
              <div className="w-0.5 relative shrink-0">
                {/* base brown strip */}
                <div className="absolute inset-0 bg-[#C56A3A]" />
                {/* repeating "cutout" blocks showing page bg (#FEF8F6) to simulate perforation */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, #FEF8F6 0 8px, transparent 8px 18px)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-4 bg-[#FDF9F7]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-semibold text-gray-800">
                    {coupon.code}
                  </h4>

                  <button
                    onClick={() => handleCopy(coupon.id, coupon.code)}
                    className="flex items-center gap-2 text-sm text-[#9A5632] font-medium cursor-pointer"
                    aria-label={`Copy ${coupon.code}`}
                  >
                    <FiCopy />
                    <span>{copied[coupon.id] ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {coupon.description}
                </p>

                <div className="mt-3 border-t border-[#EEE6E2] pt-3">
                  <button
                    onClick={() => toast.success("Read more")}
                    className="text-xs text-[#9A5632] font-medium"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
