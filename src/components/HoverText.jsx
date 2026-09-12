"use client";

import "./HoverText.css";

export default function HoverText({
  children,
  className = "",
}) {
  return (
    <span className={`hover-title ${className}`}>
      {children}
    </span>
  );
}