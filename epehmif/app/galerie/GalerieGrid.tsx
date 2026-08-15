"use client";

import { useMemo, useState } from "react";

type Item = { id: number; album: string; type: "photo" | "video"; big?: boolean };

const ALBUMS = ["Culte", "Baptêmes", "Jeunesse", "Événements"];

const ITEMS: Item[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  album: ALBUMS[i % ALBUMS.length],
  type: i % 5 === 0 ? "video" : "photo",
  big: i === 0 || i === 5,
}));

export default function GalerieGrid() {
  const [album, setAlbum] = useState("");

  const filtered = useMemo(
    () => (album === "" ? ITEMS : ITEMS.filter((i) => i.album === album)),
    [album]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          type="button"
          onClick={() => setAlbum("")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium border ${
            album === "" ? "bg-fill text-on-pri border-fill" : "border-line"
          }`}
        >
          Tous
        </button>
        {ALBUMS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => setAlbum(a)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border ${
              album === a ? "bg-fill text-on-pri border-fill" : "border-line"
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gridAutoRows: "200px" }}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border-2 border-dashed border-line grid place-items-center text-sm opacity-60 text-center px-3"
            style={item.big ? { gridColumn: "span 2" } : undefined}
          >
            [À FOURNIR : {item.type === "video" ? "vidéo" : "photo"} — {item.album}]
          </div>
        ))}
      </div>
    </div>
  );
}
