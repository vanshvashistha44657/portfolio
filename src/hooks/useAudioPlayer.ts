import { useCallback, useEffect, useRef, useState } from "react";
import type { Track } from "../data/tracks";

export function useAudioPlayer(tracks: Track[]) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [loading, setLoading] = useState(false);

  const track = tracks[trackIndex];

  // Wire the analyser graph once, on first user-triggered play (AudioContext
  // must be created/resumed from a user gesture in every modern browser).
  const ensureAudioGraph = useCallback(() => {
    if (!audioRef.current) return;
    if (!audioCtxRef.current) {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new Ctx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.82;
      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);
      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      sourceRef.current = source;
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, []);

  const play = useCallback(async () => {
    ensureAudioGraph();
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [ensureAudioGraph]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const selectTrack = useCallback(
    (index: number) => {
      setTrackIndex(((index % tracks.length) + tracks.length) % tracks.length);
      setCurrentTime(0);
      // Autoplay the newly selected track for a responsive feel.
      requestAnimationFrame(() => play());
    },
    [tracks.length, play]
  );

  const next = useCallback(() => selectTrack(trackIndex + 1), [trackIndex, selectTrack]);
  const prev = useCallback(() => selectTrack(trackIndex - 1), [trackIndex, selectTrack]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onTime = () => setCurrentTime(el.currentTime);
    const onLoaded = () => {
      setDuration(el.duration || 0);
      setLoading(false);
    };
    const onWaiting = () => setLoading(true);
    const onPlaying = () => setLoading(false);
    const onEnded = () => next();

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("waiting", onWaiting);
    el.addEventListener("playing", onPlaying);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("waiting", onWaiting);
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close();
    };
  }, []);

  return {
    audioRef,
    analyserRef,
    track,
    trackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    loading,
    play,
    pause,
    toggle,
    next,
    prev,
    seek,
    selectTrack,
    setVolume,
  };
}
