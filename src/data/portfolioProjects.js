import cardSetupPix from "../images/v2/shared/card-setup-pix.png";
import cardBlueberry from "../images/v2/shared/card-blueberry.png";
import cardRestyling from "../images/v2/shared/card-restyling.png";
import cardRamengoHome from "../images/v2/shared/card-ramengo-home.png";
import cardRamengoBanner from "../images/v2/shared/card-ramengo-banner.png";
import cardMyMove from "../images/v2/shared/card-mymove.png";

const portfolioProjects = [
  {
    id: "setup-pix",
    homeOrder: 1,
    enabledOnHome: true,
    implementationStatus: "implemented",
    legacyRoute: null,
    newRoute: "/projects/setup-pix",
    title: "Setup Pix redesign",
    subtitle: "Improving the visual hierarchy for Pix Setup",
    tags: ["ui", "ux"],
    cardStyle: "large",
    homeLayout: "setup",
    cardTheme: {
      bg: "#9ceaef",
      fg: "#400039",
      border: "#400039",
    },
    source: {
      illustrationKey: "iq",
      thumbKey: "iq",
      imageUrl: cardSetupPix,
    },
  },
  {
    id: "blueberry-design-system",
    homeOrder: 2,
    enabledOnHome: true,
    implementationStatus: "implemented",
    legacyRoute: "/projects/blueberry",
    newRoute: "/projects/blueberry",
    title: "Blueberry Design System",
    subtitle: "Improving the designer's work and the front-end's development",
    tags: ["ui", "ux", "design system"],
    cardStyle: "large",
    homeLayout: "blueberry",
    cardTheme: {
      bg: "#f992d3",
      fg: "#400039",
      border: "#400039",
    },
    source: {
      illustrationKey: "blueberry",
      thumbKey: "blueberry",
      imageUrl: cardBlueberry,
    },
  },
  {
    id: "mercado-pago-restyling",
    homeOrder: 3,
    enabledOnHome: true,
    implementationStatus: "implemented",
    legacyRoute: null,
    newRoute: "/projects/mercado-pago-restyling",
    title: "Mercado Pago restyling",
    subtitle: "Standardizing the visual language from Mercado Pago app",
    tags: ["ui", "ux"],
    cardStyle: "small",
    homeLayout: "mercado",
    cardTheme: {
      bg: "#3ddc97",
      fg: "#400039",
      border: "#400039",
    },
    source: {
      illustrationKey: null,
      thumbKey: null,
      imageUrl: cardRestyling,
    },
  },
  {
    id: "ramengo",
    homeOrder: 4,
    enabledOnHome: true,
    implementationStatus: "implemented",
    legacyRoute: "/projects/ramengo",
    newRoute: "/projects/ramengo",
    title: "Ramen Go",
    subtitle: "Creating a fun and creative platform for ramen delivery",
    tags: ["ui", "illustration", "interaction design"],
    cardStyle: "small",
    homeLayout: "ramengo",
    cardTheme: {
      bg: "#ff4522",
      fg: "#fff9e9",
      border: "#fff9e9",
    },
    source: {
      illustrationKey: "ramengo",
      thumbKey: "ramengo",
      imageUrl: cardRamengoHome,
      carouselImageUrl: cardRamengoBanner,
    },
  },
  {
    id: "my-move-illustrations",
    homeOrder: 5,
    enabledOnHome: true,
    implementationStatus: "implemented",
    legacyRoute: null,
    newRoute: "/projects/my-move",
    title: "My Move illustrations",
    subtitle: "Helping a team to communicate ideas through illustrations",
    tags: ["ui", "illustration"],
    cardStyle: "large",
    homeLayout: "mymove",
    cardTheme: {
      bg: "#400039",
      fg: "#fff9e9",
      border: "#fff9e9",
    },
    source: {
      illustrationKey: null,
      thumbKey: null,
      imageUrl: cardMyMove,
    },
  },
];

export const getHomeProjects = () =>
  portfolioProjects
    .filter((project) => project.enabledOnHome)
    .sort((a, b) => a.homeOrder - b.homeOrder);

export default portfolioProjects;
