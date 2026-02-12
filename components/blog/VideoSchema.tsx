/* eslint-disable @typescript-eslint/no-explicit-any */
// components/blog/VideoSchema.tsx
export default function VideoSchema({ post }: { post: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: post.title,
    description: post.excerpt,
    thumbnailUrl: `https://img.youtube.com/vi/${post.youtubeId}/maxresdefault.jpg`,
    uploadDate: post.date,
    contentUrl: `https://www.youtube.com/watch?v=${post.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${post.youtubeId}`,
    publisher: {
      "@type": "Organization",
      name: "JSONDreams",
      logo: {
        "@type": "ImageObject",
        url: "https://jsondreams.vercel.app/logo.jpeg",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
