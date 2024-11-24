export default function GameFrame(props: { id: string }) {
  return (
    <div className="w-full aspect-[16/9] bg-black/10 rounded-lg overflow-hidden shadow-xl relative">
      <iframe
        src={`https://turbowarp.org/${props.id}/embed`}
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
