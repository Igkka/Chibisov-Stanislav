import "@/components/Home.css"
import InteractiveCard from "./InteractiveCard";
import HoverText from "./HoverText";

export default function HomePage(){

    return(
        <section id="home" className="homepage">

            <div className="homecontent">

            <div className="greeting">
                <p>Hello,I'm</p>
                <HoverText>
                <h1>Chibisov Stanislav</h1>
                </HoverText>
                <p>Front-End Software Developer</p>
            </div>
            <div className="desc">
                <p>
                    I develop web applications, experiment with modern technologies, and create interfaces that combine functionality with minimalist design.
                </p>
            </div>

            <div className="homebuttons">
                <a href="#projects" className="scroll">View My Projects</a>
                <a href="#contacts" className="scroll">Contact Me</a>
            </div>


            </div>

            <InteractiveCard />

        </section>
    )
}