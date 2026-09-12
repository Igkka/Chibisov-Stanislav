"use client"
import "@/components/AboutMe.css"
import { UserRound } from 'lucide-react';
import { Code } from 'lucide-react';
import { Heart } from 'lucide-react';
import { useState } from "react";
import CursorStar from "@/components/CursorStar";
import HoverText from "./HoverText";

export default function AboutMe(){

    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // -1 ... 1 относительно всего section
        const x =
        ((e.clientX - rect.left) / rect.width) * 2 - 1;

        const y =
        -(((e.clientY - rect.top) / rect.height) * 2 - 1);

        setMouse({ x, y });
    };

    return(
        <section  className="aboutpage" onMouseMove={handleMouseMove}>
          
          <CursorStar  mouse={mouse}  />

        <div className="aboutcontent" id="aboutme">

        <div className="aboutgreet">
        <p>ABOUT ME</p>
        <HoverText>
        <h1>Get To Know Me Better</h1>
        </HoverText>
        </div>

        <div className="descabout">
        <p>I’m a curious developer focused on continuous learning and experimentation. I enjoy exploring new technologies, solving problems, and turning ideas into clean and intuitive digital experiences.</p>
        </div>

        <div className="aboutskill">

        <div className="skillelem">
            <div className="skillcontent">
            <UserRound  className="skillimg"/>
            <h1>Who I Am</h1>
            </div>
            <p>A passionate developer, who loves turning ideas into real products</p>
        </div>

            <div className="skillelem">
            <div className="skillcontent">
                <Code  className="skillimg"/>
                <h1>What I Do</h1>
            </div>
            
            <p>I build modern web applications using React,Next.js and more</p>
        </div>

        <div className="skillelem">
            <div className="skillcontent">
                <Heart className="skillimg"/>
                <h1>What I Love</h1>
            </div>
            
            <p>Clean UI/UX, smooth interactions,cybersecurity and learning new things</p>
        </div>

        </div>

        </div>



        </section>



    )
}