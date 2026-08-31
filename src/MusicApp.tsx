import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, ArrowLeft } from "lucide-react";
import { tracks } from "./data/tracks";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { Visualizer } from "./components/music/Visualizer";
import { VinylArt } from "./components/music/VinylArt";
import { ProgressBar } from "./components/music/ProgressBar";
import { TrackList } from "./components/music/TrackList";
import { MagneticButton } from "./components/MagneticButton";
import { CustomCursor } from "./components/CustomCursor";
import { personal } from "./data/personal";
import { socials } from "./data/personal";
import { brandIcons } from "./components/BrandIcons";


function getAudioMime(src: string) {
  const ext = src.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "aac":
      return "audio/aac";
    case "m4a":
      return "audio/mp4";
    case "wav":
      return "audio/wav";
    case "mp3":
    default:
      return "audio/mpeg";
  }
}

function MusicApp() {
  const {
    audioRef,
    analyserRef,
    track,
    trackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    loading,
    toggle,
    next,
    prev,
    seek,
    selectTrack,
    setVolume,
  } = useAudioPlayer(tracks);

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;
  const instagram = socials.find((social) => social.icon === "instagram");
  const InstagramIcon = instagram ? brandIcons[instagram.icon] : null;

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] grain">
      <CustomCursor />

      {/* audio element — src updates when the track changes */}
      <audio ref={audioRef} preload="metadata" key={track.id}>
        <source src={track.src} type={getAudioMime(track.src)} />
        {track.srcFallback && <source src={track.srcFallback} type={getAudioMime(track.srcFallback)} />}
      </audio>

      {/* ambient grid, consistent with the main site */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 85%)",
        }}
      />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <a
          href={import.meta.env.BASE_URL}
          data-cursor="hover"
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-ink)]"
        >
          <ArrowLeft size={14} /> BACK TO PORTFOLIO
        </a>
        <div className="flex items-center gap-5">
          {instagram && InstagramIcon && (
            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={instagram.label}
              data-cursor="hover"
              className="text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-accent)]"
            >
              <InstagramIcon size={19} />
            </a>
          )}
          <span className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
            {personal.initials} / MUSIC
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-40 pt-14 md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]"
        >
          SOUND
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 max-w-2xl text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[0.98] text-[var(--color-ink)]"
        >
          A few things I've made with sound.
        </motion.h1>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <VinylArt track={track} isPlaying={isPlaying} />

            <div className="mt-10 text-center lg:text-left">
              <p className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                {String(trackIndex + 1).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
                {loading ? " · LOADING…" : ""}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-[var(--color-ink)] sm:text-3xl">
                {track.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{track.artist}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] sm:h-56">
              <Visualizer analyser={analyserRef.current} isPlaying={isPlaying} className="h-full w-full" />
            </div>

            <div className="mt-8">
              <ProgressBar currentTime={currentTime} duration={duration} onSeek={seek} />
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
              <MagneticButton
                as="button"
                onClick={prev}
                aria-label="Previous track"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-dim)]"
              >
                <SkipBack size={18} />
              </MagneticButton>

              <MagneticButton
                as="button"
                onClick={toggle}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)]"
              >
                {isPlaying ? <Pause size={22} /> : <Play size={22} className="translate-x-0.5" />}
              </MagneticButton>

              <MagneticButton
                as="button"
                onClick={next}
                aria-label="Next track"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-dim)]"
              >
                <SkipForward size={18} />
              </MagneticButton>

              <div className="ml-2 hidden items-center gap-2 sm:flex">
                <VolumeIcon size={16} className="text-[var(--color-ink-faint)]" />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  aria-label="Volume"
                  className="h-1 w-24 cursor-pointer accent-[var(--color-accent)]"
                  data-cursor="hover"
                />
              </div>
            </div>

            <div className="mt-14">
              <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                ALL TRACKS
              </p>
              <TrackList
                tracks={tracks}
                activeIndex={trackIndex}
                isPlaying={isPlaying}
                onSelect={selectTrack}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MusicApp;
