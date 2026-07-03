"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function TeamCard({
  name,
  role,
  linkedin,
  instagram,
  initials,
}: {
  name: string;
  role: string;
  linkedin?: string;
  instagram?: string;
  initials: string;
}) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glow-card group p-6 text-center">
      <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hb-blue to-hb-orange opacity-20 blur-md transition-opacity group-hover:opacity-35" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-hb-blue/30 bg-gradient-to-br from-hb-blue/10 to-hb-orange/10 text-2xl font-bold text-hb-navy">
          {initials}
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-hb-text-muted">{role}</p>

      {(instagram || linkedin) && (
        <div className="mt-4 flex items-center justify-center gap-4">
          {instagram && (
            <Link
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-hb-orange hover:text-hb-navy"
              aria-label={`Instagram de ${name}`}
            >
              <InstagramIcon className="h-4 w-4" />
              @{instagram.split("/").pop()}
            </Link>
          )}
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-hb-orange hover:text-hb-navy"
              aria-label={`LinkedIn de ${name}`}
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
