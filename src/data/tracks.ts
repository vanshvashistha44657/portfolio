// ---------------------------------------------------------------------------
// MUSIC TRACK DATA
// Add a song by pushing another object onto the array below.
//
// 1. Drop your audio file into public/audio/  (e.g. public/audio/night-drive.mp3)
// 2. Reference it here as "/audio/night-drive.mp3"
// 3. Both .mp3 and .aac are supported — just point `src` at whichever file
//    you have. If you have BOTH formats of the same song, list the mp3 in
//    `src` and the aac in `srcFallback` for wider browser compatibility.
// 4. cover: optional. Put an image in public/images/music/ and reference it
//    the same way, or leave "" to use the generated placeholder art.
// ---------------------------------------------------------------------------

export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: string; // "MM:SS" — shown before the file has loaded metadata
  src: string; // "/audio/your-file.mp3" | ".m4a" | ".wav" | ".aac"
  srcFallback?: string; // optional second format of the same track
  cover: string; // "/images/music/your-cover.jpg" or ""
  tag?: string; // short label, e.g. "Original" · "Remix" · "Demo"
};

const baseUrl = import.meta.env.BASE_URL;

export const tracks: Track[] = [
    {
    id: "track-01",
    title: "wafa ne bewafai ",
    artist: "Vansh Vashistha",
    duration: "0:58",
    src: `${baseUrl}audio/wafa_ne_bewafai.mp3`,
    cover: `${baseUrl}images/profile/music_cover.jpg`,
    tag: "Cover",
  },
  
  {
    id: "track-02",
    title: "Stay ",
    artist: "Vansh Vashistha",
    duration: "1:32",
    src: `${baseUrl}audio/stay.mp3`,
    cover: `${baseUrl}images/profile/music_cover.jpg`,
    tag: "Cover",
  },

{
    id: "track-03",
    title: "Its you ",
    artist: "Vansh Vashistha",
    duration: "2:11",
    src: `${baseUrl}audio/its_you.mp3`,
    cover: `${baseUrl}images/profile/music_cover.jpg`,
    tag: "Cover",
  },

  {
    id: "track-04",
    title: " Give Me Some Sunshine",
    artist: "Vansh Vashistha",
    duration: "2:11",
    src: `${baseUrl}audio/give_me_some_sunshine.mp3`,
    cover: `${baseUrl}images/profile/music_cover.jpg`,
    tag: "Cover",
  },
  {
    id: "track-05",
    title: "Stero Hearts x Daru Desi",
    artist: "Vansh Vashistha",
    duration: "0:57",
    src: `${baseUrl}audio/stereo_hearts_x_daru_desi.mp3`,
    cover: `${baseUrl}images/profile/music_cover.jpg`,
    tag: "Cover",
  },
  // Add more tracks here — copy the shape above.
];
