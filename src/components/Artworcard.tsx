interface ArtworkCardProps {
  title: string;
  price: number;
  imageUrl?: string;
}

const ArtworkCard = ({ title, price, imageUrl }: ArtworkCardProps) => {
  return (
    <div className="bg-gray-200/60 rounded-2xl p-4 shadow-sm">

      {/* Media */}
      <div className="relative bg-gray-400/60 rounded-xl h-48 mb-4 overflow-hidden">
        
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}

        {/* Favourite button */}
        <button
          className="
            absolute top-3 right-3
            bg-white/80 backdrop-blur-md
            rounded-full p-2
            text-gray-700 hover:text-red-500
            transition
          "
        >
          ♥
        </button>

      </div>

      {/* Meta */}
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-600">₹ {price}</p>
      </div>

    </div>
  );
};

export default ArtworkCard;
