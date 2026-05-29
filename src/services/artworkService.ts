// Cleveland Museum of Art — free Open Access API, no key needed
// Docs: https://openaccess-api.clevelandart.org/
// ~60k+ artworks, real pagination, hotlinking allowed.

const BASE_URL = "https://openaccess-api.clevelandart.org/api/artworks";

export interface Artwork {
  id: number;
  title: string;
  artist_title: string | null;
  date_display: string | null;
  medium_display: string | null;
  image_id: string | null;
  imageUrl: string | null;
  dimensions: string | null;
  place_of_origin: string | null;
}

interface CMACreator {
  description?: string;
  role?: string;
}

interface CMAImageVariant {
  url?: string;
}

interface CMAArtwork {
  id: number;
  title: string;
  creators?: CMACreator[];
  creation_date?: string;
  technique?: string;
  measurements?: string;
  culture?: string[];
  creation_place?: string;
  images?: {
    web?: CMAImageVariant;
    print?: CMAImageVariant;
    full?: CMAImageVariant;
  };
}

interface CMAListResponse {
  info: { total: number; parameters: Record<string, unknown> };
  data: CMAArtwork[];
}

// "John Singleton Copley (American, 1738–1815)" -> "John Singleton Copley"
function cleanArtistName(raw: string | undefined): string | null {
  if (!raw) return null;
  return raw.split("(")[0].trim() || null;
}

function normalize(a: CMAArtwork): Artwork {
  const imageUrl =
    a.images?.web?.url ?? a.images?.print?.url ?? a.images?.full?.url ?? null;

  const culture = a.culture && a.culture.length > 0 ? a.culture[0] : null;

  return {
    id: a.id,
    title: a.title || "Untitled",
    artist_title: cleanArtistName(a.creators?.[0]?.description),
    date_display: a.creation_date || null,
    medium_display: a.technique || null,
    image_id: String(a.id),
    imageUrl,
    dimensions: a.measurements || null,
    place_of_origin: a.creation_place || culture,
  };
}

export async function fetchArtworks(page = 1, limit = 20): Promise<Artwork[]> {
  const skip = (page - 1) * limit;
  const url =
    `${BASE_URL}` +
    `?has_image=1&limit=${limit}&skip=${skip}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`CMA fetch failed: ${res.status}`);

  const json: CMAListResponse = await res.json();
  return (json.data ?? [])
    .map(normalize)
    .filter((a) => !!a.imageUrl);
}

export async function searchArtworks(
  query: string,
  limit = 20,
  page = 1
): Promise<Artwork[]> {
  const skip = (page - 1) * limit;
  const url =
    `${BASE_URL}` +
    `?q=${encodeURIComponent(query)}&has_image=1&limit=${limit}&skip=${skip}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);

  const json: CMAListResponse = await res.json();
  return (json.data ?? [])
    .map(normalize)
    .filter((a) => !!a.imageUrl);
}
