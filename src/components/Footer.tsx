import SocialMedia from "./SocialMedia";
import CopyRight from "./ui/CopyRIght";

const Footer = () => {
  return (
    <div className="py-3 flex flex-col gap-5">
      <SocialMedia />
      <CopyRight />
    </div>
  );
};

export default Footer;
