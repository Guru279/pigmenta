import { useState, useEffect, useCallback } from "react";
import { fetchArtworks, searchArtworks, type Artwork } from "../services/artworkService";

interface UseArtworksResult {
  artworks: Artwork[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  loadMore: () => void;
  search: (query: string) => void;
  searchQuery: string;
}

const PAGE_SIZE = 20;

export function useArtworks(): UseArtworksResult {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loadPage = useCallback(async (pageNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchArtworks(pageNum, PAGE_SIZE);
      setArtworks((prev) => (pageNum === 1 ? data : [...prev, ...data]));
      setHasMore(data.length === PAGE_SIZE);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load artworks");
    } finally {
      setLoading(false);
    }
  }, []);

  const runSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setPage(1);
      loadPage(1);
      return;
    }
    setLoading(true);
    setError(null);
    setHasMore(false);
    try {
      const data = await searchArtworks(query, PAGE_SIZE);
      setArtworks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setLoading(false);
    }
  }, [loadPage]);

  // Initial load + load more
  useEffect(() => {
    if (!searchQuery) {
      loadPage(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore && !searchQuery) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore, searchQuery]);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
    runSearch(query);
  }, [runSearch]);

  return { artworks, loading, error, page, hasMore, loadMore, search, searchQuery };
}
