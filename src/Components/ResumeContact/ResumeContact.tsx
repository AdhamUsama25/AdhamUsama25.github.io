import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type IContact from "../../Types/contacts.types";

interface ContactButtonProps {
  contact: IContact;
}

const ResumeContact = ({ contact }: ContactButtonProps) => {
  return (
    <div>
      <FontAwesomeIcon icon={contact.icon} />
      
      <a
        href={contact.url}
        target="_blank"
        rel="noreferrer"
        title={`View me at ${contact.name}`}
      >
        {contact.value}
      </a>
    </div>
  );
};

export default ResumeContact;
