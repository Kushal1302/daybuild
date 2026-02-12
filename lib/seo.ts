// lib/seo.ts
import { Metadata } from "next";

export function constructMetadata({
  title = "JSONDreams | Cinematic AI Storytelling",
  description = "Geopolitical mysteries, space exploration, and historical turning points rendered in high-fidelity AI.",
  image = "/og-image.png", // Default OG image
  videoUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  videoUrl?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "article",
      ...(videoUrl && { video: videoUrl }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@JSONDreams",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
