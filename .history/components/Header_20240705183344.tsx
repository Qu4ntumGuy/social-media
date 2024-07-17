import Image from "next/image";
import logo from "../public/images/LinkedIn.webp";

function Header() {
  return (
    <div>
      <Image
        className=" rounded-lg"
        alt="logo"
        height={100}
        width={100}
        src={logo}
      />
    </div>
  );
}

export default Header;
