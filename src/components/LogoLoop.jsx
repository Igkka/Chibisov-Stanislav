"use client";

import { useEffect, useRef } from "react";
import "./LogoLoop.css";

const logos = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

function LogoGroup() {
  return (
    <div className="logoloop-group">
      {logos.map((logo) => (
        <div className="logoloop-item" key={logo.name}>
          <img src={logo.src} alt={logo.name} />
        </div>
      ))}
    </div>
  );
}

export default function LogoLoop() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    if (!track || !container) return;

    let position = 0;
    let speed = 0;
    const maxSpeed = 0.45;

    let targetSpeed = maxSpeed;
    let animationId;

    const animate = () => {
      // Плавно приближаем текущую скорость к нужной
      speed += (targetSpeed - speed) * 0.035;

      position -= speed;

      // После полного прохода возвращаемся в начало
      if (Math.abs(position) >= window.innerWidth) {
        position = 0;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationId = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      targetSpeed = 0;
    };

    const handleLeave = () => {
      targetSpeed = maxSpeed;
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationId);

      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="logoloop" ref={containerRef}>
      <div className="logoloop-track" ref={trackRef}>
        <LogoGroup />
        <LogoGroup />
      </div>
    </div>
  );
}