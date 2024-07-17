import Image from "next/image";
import logo from "../public/images/twitte.webp";
import { SearchIcon } from "lucide-react";

function Header() {
  return (
    <div>
      {/* <Image
        className="rounded-xl"
        alt="logo"
        height={60}
        width={60}
        src={logo}
      /> */}
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
      />
      <div>
        <form>
          <SearchIcon className="" />
        </form>
      </div>
    </div>
  );
}

export default Header;
