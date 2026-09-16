
import HoverText from "./HoverText"
import ServicesCards from "./ServicesCards"
import "@/components/Services.css"

export default function Services(){
    return(
        <section className="servicespage">
            
            <div className="servicescontent" id="services">
                <p>SERVICES</p>
                <HoverText>
                    <h1>I build ideas into products</h1>
                </HoverText>
            </div>

            <div className="descservices">
                From landing pages to full web applications,I create modern digital products tailored to your needs.
            </div>

        <ServicesCards/>


        </section>
    )
}