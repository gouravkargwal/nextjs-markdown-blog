import Head from "next/head";
import React from "react";
import SocialLink from "../../components/SocialLink";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="p-5 w-9/12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p>
          Are you troubled by any of life’s troubles? Are you seeking a solution
          to it? If yes, you have come to the right place. Just give us a call,
          and we will help you out with all kinds of issues. We are available
          24*7 to help you with anything and everything.
        </p>
      </div>
      <div className="p-5">
        <div className="flex p-2">
          <h3 className="font-bold mr-2">Email :-</h3>
          <a href="mailTo:a@gmail.com">a@gmail.com</a>
        </div>
        <div className="flex p-2 mr-2">
          <h3 className="font-bold">Call Us :-</h3>
          <a href="tel:+9172237823">+9131312121</a>
        </div>
        <div className="flex p-2 mr-2">
          <h3 className="font-bold">Chat with Us :-</h3>
          <a href="https://wa.me/7023074548">Whatsapp</a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
