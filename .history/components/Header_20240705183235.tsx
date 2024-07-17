import Image from "next/image";
import { logo } from "../public/images/LinkedIn.webp";

function Header() {
  return (
    <div>
      <Image className=" rounded-lg" src={logo} />
    </div>
  );
}

export default Header;
