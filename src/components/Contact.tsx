import { ContactType } from "../types";

interface ContactProps {
  contact: ContactType;
}

const Contact = (props: ContactProps) => {
  return (
    <div className="border-solid border-gray-600 border-2 rounded-full p-1">
      <a>
        <img className="md:w-[5vh]" src={props.contact.imagePath} />
      </a>
    </div>
  );
};

export default Contact;
