import LinkRecap from "./LinkRecap";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const NavbarRecap = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
    return (
        <div>
            <IoMenu className="text-4xl" />
            <RxCross1 className="text-3xl"/>
            <ul className="md:flex bg-gray-600 w-[200px] md:w-full rounded-xl md:rounded-none p-4 md:p-0">
            {
                routes.map(route => <LinkRecap route={route}></LinkRecap>)
            }
            </ul>
        </div>
    );
};

export default NavbarRecap;