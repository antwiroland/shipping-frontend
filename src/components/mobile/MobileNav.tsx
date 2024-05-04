import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { SheetContent, SheetDescription, SheetTitle } from "../ui/sheet";

function MobileNav() {
  return (
    <SheetContent className="space-y-3">
      <SheetTitle className="text-orange-500">Welcome to USPX Cargo and Shipping</SheetTitle>
      <Separator />

      <SheetDescription className="flex flex-col gap-4">
        <Link
          to="#"
          className="flex bg-white items-start font-bold hover:text-orange-500"
        >
          Home
        </Link>
        <Separator />
        <Link
          to="#"
          className="flex bg-white items-start font-bold hover:text-orange-500"
        >
          About
        </Link>
        <Separator />
        <Link
          to="#"
          className="flex bg-white items-start font-bold hover:text-orange-500"
        >
          Service
        </Link>
        <Separator />
        <Link
          to="#"
          className="flex bg-white items-start font-bold hover:text-orange-500"
        >
          News
        </Link>
      </SheetDescription>
    </SheetContent>
  );
}

export default MobileNav;
