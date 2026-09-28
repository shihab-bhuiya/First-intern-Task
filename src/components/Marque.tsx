"use client";

import { useEffect, useState } from "react";

const MarquePage = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/marque.json");
      const result = await res.json();

      setItems(result.items);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-hidden bg-[#FFEDE2]/10 py-2">
      <div className="flex w-max animate-marquee items-center gap-10">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-10"
          >
            <span className="whitespace-nowrap font-inter text-xs font-semibold text-white">
              {item}
            </span>

            <span className="shrink-0 text-lime-400">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarquePage;