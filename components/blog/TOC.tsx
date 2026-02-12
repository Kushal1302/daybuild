/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";

export default function TOC({ selector }: { selector: string }) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(`${selector} h2`));
    const data = elements.map((el) => ({
      id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
      text: el.textContent || "",
    }));
    setHeadings(data);
  }, [selector]);

  return (
    <div className="space-y-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
        Contents
      </p>
      <ul className="space-y-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="text-sm text-zinc-400 hover:text-accent transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
