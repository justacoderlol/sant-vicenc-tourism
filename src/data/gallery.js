import mainImage from "../assets/images/gallery/frontal-view.jpg";
import beachImage from "../assets/images/gallery/beach-view.jpg";
import mountainImage from "../assets/images/gallery/mountain-view.jpg";
import villageImage from "../assets/images/gallery/village-view.jpg";

import mediterraneanWaves from "../assets/audio/mediterranean-waves.mp3";
import villageMorning from "../assets/audio/village-morning.mp3";
import mountainWalk from "../assets/audio/mountain-walk.mp3";
import beachVibes from "../assets/audio/beach-vibes.mp3";

export const audioTracks = [
  {
    id: 1,
    title: "Coastal Views",
    description: "Ambient sounds from our local beach here in Maresme",
    file: mediterraneanWaves,
    image: mainImage,
    alt: "A panoramic look at our coastline",
  },
  {
    id: 2,
    title: "Village Morning",
    description: "Birds singing and church bells",
    file: villageMorning,
    image: villageImage,
    alt: "View of the historic village center",
  },
  {
    id: 3,
    title: "Mountain Walk",
    description: "Sounds of the forest",
    file: mountainWalk,
    image: mountainImage,
    alt: "Mountain views",
  },
  {
    id: 4,
    title: "Beach Vibes",
    description: "Sunny day at the beach",
    file: beachVibes,
    image: beachImage,
    alt: "Sant Vicenç Beach",
  },
];
