import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { audioTracks } from "../data/gallery";
import "../styles/Gallery.css";

function Gallery() {
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const handlePlayClick = (track) => {
    const audio = audioRef.current;

    if (currentTrackId === track.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      // New track
      audio.pause();
      audio.src = track.file;
      audio.play().catch(() => {});
      setCurrentTrackId(track.id);
      setIsPlaying(true);
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery & Sounds</h2>
      <p className="gallery-subtitle">
        A collection of sights and sounds from our town
      </p>

      <div className="gallery-grid">

        {/* Main image */}
        {audioTracks[0] && (
          <div className="gallery-item main-image">
            <img src={audioTracks[0].image} alt={audioTracks[0].alt} />
            <div className="image-caption">
              <h3>{audioTracks[0].title}</h3>
              <p>{audioTracks[0].description}</p>
              <button
                className={`play-button ${
                  currentTrackId === audioTracks[0].id && isPlaying
                    ? "playing"
                    : ""
                }`}
                onClick={() => handlePlayClick(audioTracks[0])}
                aria-pressed={currentTrackId === audioTracks[0].id && isPlaying}
                aria-label={
                  currentTrackId === audioTracks[0].id && isPlaying
                    ? "Pause audio for Coastal Views"
                    : "Play audio for Coastal Views"
                }
              >
                <FontAwesomeIcon
                  icon={
                    currentTrackId === audioTracks[0].id && isPlaying
                      ? faPause
                      : faPlay
                  }
                />
                <span>
                  {currentTrackId === audioTracks[0].id && isPlaying
                    ? "Pause Audio"
                    : "Play Audio"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Other Images */}
        {audioTracks.slice(1).map((track) => (
          <div key={track.id} className="gallery-item">
            <div className="image-container">
              <img src={track.image} alt={track.alt} />
            </div>
            <div className="item-audio-control">
              <button
                className={`icon-play-btn ${
                  currentTrackId === track.id && isPlaying ? "playing" : ""
                }`}
                onClick={() => handlePlayClick(track)}
                aria-label={
                  currentTrackId === track.id && isPlaying
                    ? `Pause ${track.title}`
                    : `Play ${track.title}`
                }
                aria-pressed={currentTrackId === track.id && isPlaying}
              >
                <FontAwesomeIcon
                  icon={
                    currentTrackId === track.id && isPlaying ? faPause : faPlay
                  }
                />
              </button>
              <div className="track-info-mini">
                <span className="track-name">{track.title}</span>
                <span className="track-desc">{track.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
