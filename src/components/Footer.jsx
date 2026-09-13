import Link from "next/link";
import "@/components/Footer.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/#aboutme" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contacts", href: "/#contacts" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__intro">
            <a className="footer__logo" href="#home" aria-label="Go to home">
              <span>Chibisov Stanislav</span>
            </a>

            <p className="footer__text">
              Frontend developer creating modern, responsive and meaningful web
              experiences.
            </p>
          </div>

          <nav className="footer__navigation" aria-label="Footer navigation">
            <p className="footer__title">Navigation</p>

            <div className="footer__links">
              {navigation.map((item) => (
                <Link className="footer__link" href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="footer__contact">
            <p className="footer__title">Get in touch</p>

            <a className="footer__mail">
              chibisovstanislav7@gmail.com
            </a>

            <div className="footer__socials">
              <a
                href="https://github.com/Igkka"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/stanislav-chibisov-9395b5436/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://t.me/Gykkozz"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Chibisov Stanislav. All rights reserved.</p>

          <a href="#home" className="footer__to-top" aria-label="Back to top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}