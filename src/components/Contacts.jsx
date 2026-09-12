import HoverText from "./HoverText";
import ContactForm from "./ContactForm";
import "@/components/Contacts.css";

export default function ContactsPage() {
  return (
    <section className="contactspage" id="contacts">
      <div className="contactscontent" >
        <div className="contacts-layout">
          <div className="contactsgreet">
            <p>CONTACTS</p>

            <HoverText>
              <h1>Write to me!</h1>
            </HoverText>

            <h2>
              Feel free to reach out if you want to discuss a project, share an
              idea, or simply get in touch.
            </h2>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}