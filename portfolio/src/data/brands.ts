// ---------------------------------------------------------------------------
// BRANDS / CLIENTS DATA
// Optional "Worked With" marquee. Put logo files in public/images/logos/
// and reference them below. Leave the array empty to hide the section
// entirely. Do not add a brand name here unless you actually worked with them.
// ---------------------------------------------------------------------------

export type Brand = {
  name: string;
  logo: string; // "/images/logos/your-logo.svg" — leave "" to show a text placeholder
};

export const brands: Brand[] = [
  { name: "[Dabur]", logo: "public/images/logos/dabur_logo.png" },
  { name: "[Ultraviolette Automotive]", logo: "public/images/logos/ultraviolette_logo.png" },
  { name: "[Vedaoils]", logo: "public/images/logos/vedaoils_logo.png" },
  { name: "[Thums Up]", logo: "public/images/logos/thums-up_logo.png" },
  { name: "[Foxtale]", logo: "public/images/logos/foxtale_logo.png" },
  { name: "[Revoue]", logo: "public/images/logos/revoue_logo.png" },
  { name: "[Bacardi]", logo: "public/images/logos/bacardi_logo.png" },
  { name: "[1xbet]", logo: "public/images/logos/1xbet_logo.png" },
];
