// Home component — same content as your Vite src/pages/Home.tsx
// No router code here, so this is a direct copy.
// This component itself has no useState/useEffect, so it does NOT need "use client".
// The child components (Herosection, Explore) are already marked "use client" themselves.
import Herosection from "./Herosection";
import Explore from "./Explore";

const Home = () => {
  return (
    <main className="relative bg-[#F6F4F1] ">

      {/* HERO */}
      <section className="sticky top-17">
        <Herosection />
      </section>

      {/* EXPLORE OVERLAY */}
      <section className="relative z-10 -mt-16 md:-mt-20 rounded-t-[40px] bg-transparent backdrop-blur-nonept-5 md:pt-6 ">
        <Explore />
      </section>

    </main>
  );
};

export default Home;
