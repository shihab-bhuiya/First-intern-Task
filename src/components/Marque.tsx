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
    <div className="overflow-hidden bg-[#FFEDE2]/10 py-2    ">
      <div className="flex w-max animate-marquee gap-8">
        {items.map((item, key) => (
          <div key={key} className="flex items-center  gap-6">
            <span className="whitespace-nowrap font-mono text-xs font-semibold text-white">
              {item}
            </span>

            <span className="text-lime-400">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarquePage;