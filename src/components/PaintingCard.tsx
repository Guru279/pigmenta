// PaintingCard — pure presentational component, no hooks, no router.
// No "use client" needed because it doesn't use any browser APIs.
interface PaintingCardProps {
  imageUrl: string;
  artistName: string;
  location: string;
}

const PaintingCard = ({ imageUrl, artistName, location }: PaintingCardProps) => {
  return (
    <div className="rounded-xl bg-gray-200 overflow-hidden">
      <img
        src={imageUrl}
        alt={artistName}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-3">
        <p className="font-medium">{artistName}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default PaintingCard;
