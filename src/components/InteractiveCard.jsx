"use client";

import { useState } from "react";
import "./InteractiveCard.css";

export default function InteractiveCard() {
  const [open, setOpen] = useState(false);

  const handleMove = (e) => {
    // На мобильном 3D-эффект не нужен
    if (window.innerWidth <= 768) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = ((y / rect.height) - 0.5) * -14;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);

    card.style.setProperty(
      "--mouse-x",
      `${(x / rect.width) * 100}%`
    );

    card.style.setProperty(
      "--mouse-y",
      `${(y / rect.height) * 100}%`
    );
  };

  const handleLeave = (e) => {
    const card = e.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return (
    <div className={`interactive-card ${open ? "is-open" : ""}`}>
      
      <div
        className="photo-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <img
          src="/profile.png"
          alt="Profile"
          draggable="false"
        />

        <div className="photo-glow" />
      </div>
      
      <button
        className="photo-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Открыть фотографию"
      >
        <span />
        <span />
      </button>

    </div>
  );
}