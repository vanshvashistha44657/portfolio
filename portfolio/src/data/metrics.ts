// ---------------------------------------------------------------------------
// METRICS / IMPACT DATA
// These are placeholder figures in the exact format the site expects
// (e.g. "50+", "10M+", "₹2Cr+"). Replace `value` with your real numbers —
// do not publish this section until the placeholders below are replaced.
// ---------------------------------------------------------------------------

export type Metric = {
  value: string; // e.g. "50+"
  label: string; // e.g. "Creators Collaborated With"
};

export const metrics: Metric[] = [
  { value: "[50]+", label: "Creators Collaborated With" },
  { value: "[10M]+", label: "Cumulative Reach" },
  { value: "[₹XX L]+", label: "Campaign Budget Managed" },
  { value: "[XX]+", label: "Campaigns Delivered" },
];
