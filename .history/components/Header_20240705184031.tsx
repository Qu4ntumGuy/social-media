import Image from "next/image";
import logo from "../public/images/twitte.webp";

function Header() {
  return (
    <div>
      <Image
        className="rounded-xl"
        alt="logo"
        height={40}
        width={40}
        src={logo}
      />
    </div>
  );
}

export default Header;
