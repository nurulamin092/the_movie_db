"use client";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ShareSection = ({ movie }) => {
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `http://localhost:3000//api/movie/${movie.id}`;

  const title = `${movie.title} | Movie BD`;
  const description = movie.overview;
  // const [shareButtonsVisible, setShareButtonsVisible] = useState(false);
  // const handleClickShare = () => {
  //   setShareButtonsVisible(!shareButtonsVisible);
  // };

  return (
    <div className="flex gap-4">
      <FacebookShareButton url={shareUrl} quote={description}>
        <FaFacebook size={32} />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <FaTwitter size={32} />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <FaWhatsapp size={32} />
      </WhatsappShareButton>

      <EmailShareButton url={shareUrl} subject={title} body={description}>
        <FaEnvelope size={32} />
      </EmailShareButton>
    </div>
  );
};

export default ShareSection;
