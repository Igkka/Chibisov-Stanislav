import "@/components/NavBar.css"

export default function NavBar(){

    return(
        <header>
        <nav className="navbar">
            <ul className="nav-links">
                <a href="#home">Home</a>
                <div className="navline"></div>
                <a href="#aboutme">About Me</a>
                <div className="navline"></div>
                <a href="#projects">Projects</a>
                <div className="navline"></div>
                <a href="#services">Services</a>
                <div className="navline"></div>
                <a href="#skills">Skills</a>
                <div className="navline"></div>
                <a href="#contacts">Contacts</a>
            </ul>
        </nav>
        <div className="nav-line"></div>
        </header>
        
    )
}