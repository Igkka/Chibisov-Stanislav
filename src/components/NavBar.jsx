import "@/components/NavBar.css"

export default function NavBar(){

    return(
        <header>
        <nav className="navbar">
            <ul className="nav-links">
                <a href="#home">Home</a>
                <a href="#aboutme">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#services">Services</a>
                <a href="#skills">Skills</a>
                <a href="#contacts">Contacts</a>
            </ul>
        </nav>
        <div className="nav-line"></div>
        </header>
        
    )
}