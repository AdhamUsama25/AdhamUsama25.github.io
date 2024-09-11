import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ISocialMedia from "../../Types/socialMedia.types";

interface SocialMediaButtonProps {
  socialMedia: ISocialMedia;
}

const SocialMediaButton = ({ socialMedia }: SocialMediaButtonProps) => {
  return (
    <a href={socialMedia.url} target="_blank" rel="noreferrer" title={`View me at ${socialMedia.name}`}>
      <FontAwesomeIcon icon={socialMedia.icon} />
    </a>
  );
};

export default SocialMediaButton;
