import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";
import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Email } from "../../assets/svg/Gmail.svg";
import "../../assets/css/user-components/SocialBadge.css";

const icons = {
  Linkedin: Linkedin,
  Github: Github,
  Email: Email,
};

export default function SocialBadge({ svg }) {
  let TagName = icons[svg];
  return <TagName className="socialBadge" />;
}
