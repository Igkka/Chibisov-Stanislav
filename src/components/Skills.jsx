import LogoLoop from "./LogoLoop";
import HoverText from "./HoverText";
import TechCards from "./TechCards";
import "@/components/Skills.css"

export default function SkillsPage(){
    return(
        <section className="skillspage" >
            
            <div className="skillscontent">

                <div className="skillsgreet" id="skills">
                    <p>MY SKILLS</p>
                    <HoverText>
                        <h1>Tools I Use To Create</h1>
                    </HoverText>
                </div>

                <div className="descskills">
                    I work with modern web technologies to build responsive, interactive, and visually polished applications. From React and Next.js to JavaScript, TypeScript, and modern UI techniques, I constantly expand my toolkit and explore new ways to turn ideas into functional digital experiences.
                </div>


                <LogoLoop/>
                
                <TechCards/>

            </div>

        </section>
    )
}