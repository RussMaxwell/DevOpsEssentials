import { nanoid } from "nanoid";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#menu", text: "menu" },
  { id: nanoid(), href: "#aboutus", text: "about us" },
];

export const feedback = [
  {
    id: nanoid(),
    name: "Jack Johnson",
    rating: 5,
    comment: "I love this pizza! I order it every week!",
  },
  {
    id: nanoid(),
    name: "Jane Doe",
    rating: 4,
    comment: "My favorite Pizza in town!",
  },
  {
    id: nanoid(),
    name: "John Smith",
    rating: 5,
    comment: "Eating pizza here I feel like I'm in NYC.",
  },
  {
    id: nanoid(),
    name: "Jane Smith",
    rating: 5,
    comment: "Fast and super friendly service.",
  },
  {
    id: nanoid(),
    name: "John Doe",
    rating: 5,
    comment: "The sauce is so so good!",
  },
];
