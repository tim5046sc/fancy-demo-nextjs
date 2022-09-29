import logoVariantDark from "../assets/logoVariantDark.svg";

export const FAKE_FOOTER_DATASOURCE = {
  logo: logoVariantDark,
  description:
    "With Play Adventure you can experience new travel and the best tourist destinations that we have to offer",
  sitemap: [
    {
      label: "Destination",
      path: "#",
      children: [
        {
          label: "Paris",
          path: "#",
        },
        {
          label: "Lyon",
          path: "#",
        },
        {
          label: "Lille",
          path: "#",
        },
      ],
    },
    {
      label: "About",
      path: "#",
      children: [
        {
          label: "Contact Us",
          path: "#",
        },
        {
          label: "Testimonials",
          path: "#",
        },
        {
          label: "Rating",
          path: "#",
        },
      ],
    },
    {
      label: "Follow Us",
      path: "#",
      children: [
        {
          label: "Facebook",
          path: "#",
        },
        {
          label: "Twitter",
          path: "#",
        },
        {
          label: "Instagram",
          path: "#",
        },
      ],
    },
  ],
};
