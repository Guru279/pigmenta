// Route: /
// In Vite this was <Route path="/" element={<Home />} /> inside App.tsx.
// In Next.js: this file IS the "/" route � no Route declarations needed.
import HomeContent from "@/components/Home";

export default function HomePage() {
  return <HomeContent />;
}
