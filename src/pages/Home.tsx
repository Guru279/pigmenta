// pages/Home.tsx
import { artists } from "../data/artistinfo";
import PaintingCard from "../components/PaintingCard";

const Home = () => {

  // flatten all paintings
  const allPaintings = artists.flatMap((artist) =>
    artist.artworks.map((art) => ({
      id: art.id,
      imageUrl: art.imageUrl,
      artistName: artist.name,
      location: artist.location,
    }))
  );

  // pick random 5
  const randomFive = allPaintings
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Discover Artists</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {randomFive.map((item) => (
          <PaintingCard
            key={item.id}
            imageUrl={item.imageUrl}
            artistName={item.artistName}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
