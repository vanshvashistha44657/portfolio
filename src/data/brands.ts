// ---------------------------------------------------------------------------
// BRANDS / CLIENTS DATA
// Optional "Worked With" marquee. Put logo files in public/images/logos/
// and reference them below. Leave the array empty to hide the section
// entirely. Do not add a brand name here unless you actually worked with them.
// ---------------------------------------------------------------------------

export type Brand = {
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  {
    name: "[Dabur]",
    logo: `${import.meta.env.BASE_URL}images/logos/dabur_logo.png`,
  },
  {
    name: "[Ultraviolette Automotive]",
    logo: `${import.meta.env.BASE_URL}images/logos/ultraviolette_logo.png`,
  },
  {
    name: "[Vedaoils]",
    logo: `${import.meta.env.BASE_URL}images/logos/vedaoils_logo.png`,
  },
  {
    name: "[Thums Up]",
    logo: `${import.meta.env.BASE_URL}images/logos/thums-up_logo.png`,
  },
  {
    name: "[Foxtale]",
    logo: `${import.meta.env.BASE_URL}images/logos/foxtale_logo.png`,
  },
  {
    name: "[Revoue]",
    logo: `${import.meta.env.BASE_URL}images/logos/revoue_logo.png`,
  },
  {
    name: "[Bacardi]",
    logo: `${import.meta.env.BASE_URL}images/logos/bacardi_logo.png`,
  },
  {
    name: "[1xbet]",
    logo: `${import.meta.env.BASE_URL}images/logos/1xbet_logo.png`,
  },
];
