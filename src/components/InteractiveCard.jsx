"use client";

import "./InteractiveCard.css";

export default function InteractiveCard() {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = ((y / rect.height) - 0.5) * -14;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);

    // Положение блика
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
    <div
      className="interactive-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <img
        src="/profile.png"
        alt="Stanislav"
        draggable="false"
      />
    </div>
  );
}