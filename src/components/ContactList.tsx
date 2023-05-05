import fbImage from "../assets/icons8-facebook.svg";
import github from "../assets/icons8-github.svg";
import ig from "../assets/icons8-instagram.svg";
import { ContactType } from "../types";
import Contact from "./Contact";

const contacts: ContactType[] = [
  {
    imagePath: fbImage,
    link: "https://www.facebook.com/Mr.Fapoh/",
  },
  {
    imagePath: github,
    link: "https://github.com/timothyjapolinario",
  },
  {
    imagePath: ig,
    link: "https://www.instagram.com/mrfapoh/",
  },
];

const ContactList = () => {
  return (
    <div className="flex">
      {contacts.map((contact) => {
        return <Contact contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
