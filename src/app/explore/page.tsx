// Route: /explore
// In Vite this was <Route path="/explore" element={<Explore />} /> inside App.tsx.
// In Next.js: just create this file and the folder name becomes the URL segment.
import ExploreContent from "@/components/Explore";

export default function ExplorePage() {
  return <ExploreContent />;
}
