import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Park River Dental",
    short_name: "Park River Dental",
    description:
      "Gentle family and cosmetic dentistry in Park River, North Dakota.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#111225",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
