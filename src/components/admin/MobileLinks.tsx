import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { SheetContent, SheetDescription } from "../ui/sheet";
import { Button } from "../ui/button";
import { useAuthProvider } from "@/provider/AuthProvider";

function MobileLinks() {
  const { setAuth } = useAuthProvider();

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("authToken");
  };
  return (
    <SheetContent className="space-y-3">
      <SheetDescription className="text-xl">Welcome</SheetDescription>
      <Separator />
      <Link to="/" className="font-bold text-md">
        Shippment
      </Link>
      <Separator />
      <Button
        onClick={logout}
        className="font-bold text-md text-white bg-orange-500"
      >
        Loguot
      </Button>
    </SheetContent>
  );
}

export default MobileLinks;
