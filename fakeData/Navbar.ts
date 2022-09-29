export const FAKE_NAV_DATASOURCE = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Destinations",
    path: "#",
    children: [
      {
        label: "France",
        children: [
          {
            label: "Paris",
            path: "/destinations/paris",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
          },
          {
            label: "Lyon",
            path: "/destinations/lyon",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
          },
          {
            label: "Lille",
            path: "/destinations/lille",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
          },
          {
            label: "Nice",
            path: "/destinations/nice",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
          },
        ],
      },
      {
        label: "USA",
        children: [
          {
            label: "Austin",
            path: "/destinations/austin",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
          },
        ],
      },
      {
        label: "Australia",
        children: [
          {
            label: "Sydney",
            path: "/destinations/sydney",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
          },
        ],
      },
    ],
  },
  {
    label: "About us",
    path: "/about",
  },
  {
    label: "Partners",
    path: "/partners",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
