export const profileStats = [
  { id: 1, title: "Posts", price: 2400 },
  { id: 2, title: "Followers", price: 1200 },
  { id: 3, title: "Following", price: 180 },
  { id: 4, title: "Likes", price: 9400 },
  { id: 5, title: "Floksen", price: 1500000 },
];

export type PaintingCategory =
  | "Oil "
  | "Acrylic "
  | "Watercolor "
  | "Digital ";

export const PAINTING_CATEGORIES: PaintingCategory[] = [
  "Oil ",
  "Acrylic ",
  "Watercolor ",
  "Digital ",
];

export interface CategoryPainting {
  id: string;
  title: string;
  imageUrl: string | null;
}

export const initialCategoryPaintings: Record<PaintingCategory, CategoryPainting[]> = {
  "Oil ": [],
  "Acrylic ": [],
  "Watercolor ": [],
  "Digital ": [],
};
