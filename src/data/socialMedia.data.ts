import ISocialMedia from "../Types/socialMedia.types";

import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const socialMedia: ISocialMedia[] = [
  {
    name: "X",
    url: "https://x.com/AdhamUsama25",
    icon: faXTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adhamusama25/",
    icon: faLinkedinIn,
  },
  {
    name: "GitHub",
    url: "github.com/AdhamUsama25",
    icon: faGithub,
  },
];

export default socialMedia;
