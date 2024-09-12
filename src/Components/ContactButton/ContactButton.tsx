import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type IContact from "../../Types/contacts.types";

interface ContactButtonProps {
  contact: IContact;
}

const ContactButton = ({ contact }: ContactButtonProps) => {
  return (
    <a href={contact.url} target="_blank" rel="noreferrer" title={`View me at ${contact.name}`}>
      <FontAwesomeIcon icon={contact.icon} />
    </a>
  );
};

export default ContactButton;
