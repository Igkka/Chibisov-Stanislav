"use client";

import {
  Code2,
  Layers,
  Braces,
  GitBranch,
} from "lucide-react";

import "./TechCards.css";

const technologies = [
  {
    name: "React",
    description: "Building interactive and reusable interfaces.",
    icon: Code2,
  },
  {
    name: "Next.js",
    description: "Creating modern and optimized web applications.",
    icon: Layers,
  },
  {
    name: "JavaScript",
    description: "Developing dynamic and interactive functionality.",
    icon: Braces,
  },
  {
    name: "Git",
    description: "Managing code and tracking project changes.",
    icon: GitBranch,
  },
];

export default function TechCards() {
  return (
    <div className="techcards">
      {technologies.map((tech) => {
        const Icon = tech.icon;

        return (
          <div className="techcard" key={tech.name}>
            <div className="techicon">
              <Icon size={28} strokeWidth={1.8} />
            </div>

            <div className="techinfo">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}