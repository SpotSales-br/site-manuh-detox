"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const ROTATE_MS = 4000;

export function AnnouncementBar() {
  const messages = site.announcements;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % messages.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [messages.length]);

  return (
    <div className="sticky top-0 z-[60] bg-brand px-4 py-2 text-center text-[12px] font-medium tracking-[0.5px] text-white sm:px-6 sm:py-2.5 sm:text-[13px]">
      <div className="grid mx-auto">
        {messages.map((msg, i) => (
          <span
            key={msg}
            aria-hidden={i !== index}
            style={{ gridArea: "1 / 1" }}
            className={`flex items-center justify-center transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
