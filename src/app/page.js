import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/Home";
import DarkVeil from "@/components/DarkVeil";
import AboutMe from "@/components/AboutMe";
import NavBar from "@/components/NavBar";
import AccordionGallery from "@/components/AccordionGallery";
import SkillsPage from "@/components/Skills";
import ContactsPage from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function portfolio() {
  return (
    <div className={styles.page}>

      <div className={styles.background}>
        <DarkVeil
          scanlineFrequency={0.5}
          warpAmount={1.5}
          hueShift={41}
        />
      </div>

      <div className={styles.content}>
        <NavBar/>
        <HomePage />
        <AboutMe/>
        <AccordionGallery/>
        <SkillsPage/>
        <ContactsPage/>
        <Footer/>
      </div>

    </div>
  );
}
