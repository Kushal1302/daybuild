// components/blog/VideoEmbed.tsx
export default function VideoEmbed({ id }: { id: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}