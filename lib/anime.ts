export type Anime = {
  slug: string;
  title: string;
  punchline: string;
  tags: string[];
  summary: string;
  image: string;
  backgroundImage: string;
  accent: string;
  glow: string;
};

export const animeList: Anime[] = [
  {
    slug: "boruto",
    title: "Boruto",
    punchline: "Legacy is only the beginning.",
    tags: ["Ninja", "Legacy", "Sci-fi"],
    summary:
      "The story follows Boruto Uzumaki, son of Naruto, as he grows up in a more peaceful ninja world shaped by technology and legacy. He must find his own path while facing threats that challenge everything inherited from the previous generation.",
    image: "https://myanimelist.net/images/anime/1091/99847l.jpg",
    backgroundImage: "https://images6.alphacoders.com/817/thumb-1920-817360.png",
    accent: "#34d399",
    glow: "rgba(52, 211, 153, 0.42)",
  },
  {
    slug: "my-hero-academia",
    title: "My Hero Academia",
    punchline: "Power is earned before it is inherited.",
    tags: ["Heroes", "School", "Superpowers"],
    summary:
      "In a world where most people are born with superpowers called Quirks, Izuku Midoriya dreams of becoming a hero despite being born powerless. His journey begins when he inherits a legendary power and enters a school built to train the next generation of heroes.",
    image: "https://myanimelist.net/images/anime/10/78745l.jpg",
    backgroundImage: "https://images8.alphacoders.com/817/thumb-1920-817884.png",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.42)",
  },
  {
    slug: "death-note",
    title: "Death Note",
    punchline: "Justice becomes the perfect crime.",
    tags: ["Psychological", "Mystery", "Supernatural"],
    summary:
      "Light Yagami discovers a mysterious notebook that can kill anyone whose name is written inside. As he tries to reshape the world according to his own sense of justice, a brilliant detective known as L begins a psychological battle to stop him.",
    image: "https://myanimelist.net/images/anime/1079/138100l.jpg",
    backgroundImage: "https://images8.alphacoders.com/806/thumb-1920-806525.jpg",
    accent: "#ef4444",
    glow: "rgba(239, 68, 68, 0.42)",
  },
  {
    slug: "spy-x-family",
    title: "Spy x Family",
    punchline: "Every secret needs a home.",
    tags: ["Espionage", "Comedy", "Family"],
    summary:
      "A master spy must build a fake family to complete a critical mission, unaware that his new wife is an assassin and his adopted daughter can read minds. The result is a mix of espionage, comedy, action and unexpectedly wholesome family moments.",
    image: "https://myanimelist.net/images/anime/1441/122795l.jpg",
    backgroundImage: "https://images.alphacoders.com/133/thumb-1920-1336935.jpeg",
    accent: "#f472b6",
    glow: "rgba(244, 114, 182, 0.42)",
  },
  {
    slug: "demon-slayer",
    title: "Demon Slayer",
    punchline: "Compassion sharpened into a blade.",
    tags: ["Dark Fantasy", "Action", "Historical"],
    summary:
      "Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon. His journey is driven by compassion, discipline and the hope of finding a way to make her human again.",
    image: "https://myanimelist.net/images/anime/1286/99889l.jpg",
    backgroundImage: "https://images2.alphacoders.com/106/thumb-1920-1065611.png",
    accent: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.42)",
  },
];
