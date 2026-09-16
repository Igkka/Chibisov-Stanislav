import {
  ChevronsLeftRightEllipsis,
  Bot,
  AppWindow,
  GlobeCode,
} from "lucide-react";

import "@/components/ServicesCards.css";

const services = [
  {
    name: "Web Development",
    desc: "Modern, responsive websites built from scratch with clean code, smooth interactions, and a focus on performance.",
    icon: AppWindow,
  },

  {
    name: "Website From Scratch",
    desc: "Complete website development from the first idea and structure to the final design, functionality, and launch.",
    icon: ChevronsLeftRightEllipsis,
  },

  {
    name: "Telegram Bots",
    desc: "Custom Telegram bots for automation, notifications, user interaction, and simplifying everyday tasks.",
    icon: Bot,
  },

  {
    name: "Web Application",
    desc: "Interactive web applications with dynamic functionality, modern interfaces, and a smooth user experience.",
    icon: GlobeCode,
  },
];
export default function ServicesCards() {
  return (
    <div className="servicescards" >
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div className="servicecard" key={service.name}>
            <div className="servicon">
              <Icon size={28} strokeWidth={1.8} />
            </div>

            <div className="servdesc">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}