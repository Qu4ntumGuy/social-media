import Image from "next/image";
import logo from "../public/images/twitte.webp";

function Header() {
  return (
    <div>
      <Image
        className="rounded-xl"
        alt="logo"
        height={60}
        width={60}
        src={logo}
      />
    </div>
  );
}

export default Header;
