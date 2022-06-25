import React from "react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const SocialLink = () => {
  return (
    <>
      <a className="m-2 text-xl text-red-600">
        <FaYoutube />
      </a>
      <a className="m-2 text-xl text-green-600" href="https://wa.me/7023074548">
        <FaWhatsapp />
      </a>
      <a className="m-2 text-xl text-blue-600" href="tel:+917023074548">
        <BiPhoneCall />
      </a>
    </>
  );
};

export default SocialLink;
