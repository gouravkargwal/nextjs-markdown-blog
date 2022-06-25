import NavBar from "../components/Navbar";
import { BiPhoneCall } from "react-icons/bi/index";
import { BsWhatsapp } from "react-icons/bs";
import SocialLink from "../components/SocialLink";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <div className="p-5 fixed bottom-0 flex justify-between w-full">
        <a
          href="tel:+917023074548"
          className="rounded-2xl overflow-hidden bg-red-800 p-3"
        >
          <BiPhoneCall size="2rem" className="text-gray-300" />
        </a>
        <a
          href="https://wa.me/7023074548"
          className="rounded-2xl overflow-hidden bg-green-800 p-3"
        >
          <BsWhatsapp size="2rem" className="text-gray-300" />
        </a>
      </div>
      <footer className="bg-black text-white flex-col flex items-center p-3">
        <div>Made with Love ♥ For People</div>
        <div className="flex p-2">
          <SocialLink />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
