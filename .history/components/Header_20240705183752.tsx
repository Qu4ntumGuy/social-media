import Image from "next/image";
import logo from "../public/images/twitter.webp";

function Header() {
  return (
    <div>
      <Image
        className="rounded-xl"
        alt="logo"
        height={100}
        width={50}
        src={logo}
      />
    </div>
  );
}

export default Header;
