import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const social = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/aniket-thakre-b8a632165/",
  },
  { icon: <FaGithub />, path: "https://github.com/AniketThakre" },
  { icon: <FaTwitter />, path: "https://x.com/AniketThakre8" },
  // {icon: <FaYoutube />, path: ""},
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
