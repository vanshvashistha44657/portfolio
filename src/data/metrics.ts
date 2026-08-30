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
  { value: "[1000]+", label: "Creators Collaborated With" },
  { value: "[50M]+", label: "Cumulative Reach" },
  { value: "[₹50L]+", label: "Campaign Budget Managed" },
  { value: "[50]+", label: "Campaigns Delivered" },
];
