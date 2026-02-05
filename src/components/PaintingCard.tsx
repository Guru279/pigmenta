

interface PaintingCardProps {
  imageUrl: string;
  artistName: string;
  location: string;
}

const PaintingCard = ({ imageUrl, artistName, location }: PaintingCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <img src={imageUrl} alt={artistName} className="w-full h-48 object-cover" />
      <div className="p-3">
        <p className="font-medium">{artistName}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default PaintingCard;
