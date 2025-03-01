import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];

      const [openClose, setOpenClose] = useState(true);
    return (
        <nav>
            <div className="text-4xl md:hidden">
                {
                    (openClose===true) ? 
                    <IoMdMenu onClick={() => setOpenClose(!openClose)} /> :
                    <IoClose onClick={() => setOpenClose(!openClose)} />
                }
                
            </div>
           <ul className="md:flex gap-10">
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;