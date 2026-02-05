// src/data/artistinfo.ts
export interface Artwork {
  id: string;
  imageUrl: string;
}

export interface ArtistInfo {
  id: string;
  name: string;
  location: string;
  artworks: Artwork[];
}

export const artists: ArtistInfo[] = [
  {
    id: "a1",
    name: "Aarav Mehta",
    location: "Mumbai, India",
    artworks: [
      { id: "p1", imageUrl: "/art/1.jpg" },
      { id: "p2", imageUrl: "/art/2.jpg" },
    ],
  },
  {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  }, {
    id: "a2",
    name: "Ishita Rao",
    location: "Bengaluru, India",
    artworks: [
      { id: "p3", imageUrl: "/art/3.jpg" },
    ],
  },
];
