import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import MobileLinks from "./MobileLinks";
import { Button } from "../ui/button";
import { useAuthProvider } from "@/provider/AuthProvider";

function NavBar() {
  const { setAuth } = useAuthProvider();

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("authToken");
  };
  return (
    <div className="border-b-2 border-b-blue-950 py-6 ">
      <div className="container flex items-center justify-between">
        <span className="tracking-tight text-xl md:text-3xl">
          UPSX Cargo & Shipping
        </span>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <MobileLinks />
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden md:block">
            <span className="text-blue-950">
              <CircleUserRound size={30} className="text-blue-950" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link to="/" className="font-bold text-xl hover:text-blue-950">
                Shippment
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={logout}
                className="font-bold text-xl  hover:text-blue-950"
              >
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavBar;
