"use client";

import { MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function WhatsAppFloat() {
  return (
    <WhatsAppLink
      message="Olá! Vim pelo site da 3 HouseHub e gostaria de conversar."
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </WhatsAppLink>
  );
}
