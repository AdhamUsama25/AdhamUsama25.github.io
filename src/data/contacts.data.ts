import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import IContact from "../Types/contacts.types";

import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const contacts: IContact[] = [
  {
    name: "X",
    value: "AdhamUsama25",
    url: "https://x.com/AdhamUsama25",
    icon: faXTwitter,
  },
  {
    name: "LinkedIn",
    value: "AdhamUsama25",
    url: "https://www.linkedin.com/in/adhamusama25/",
    icon: faLinkedinIn,
  },
  {
    name: "GitHub",
    value: "AdhamUsama25",
    url: "github.com/AdhamUsama25",
    icon: faGithub,
  },
  {
    name: "Email",
    value: "adhamusama25@gmail.com",
    url: "mailto:adhamusama25@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "Phone",
    value: "+201016480880",
    url: "tel:+201027588741",
    icon: faPhone,
  }
];

export default contacts;
