import { Loader2 } from "lucide-react";

function LoadingPage() {
  return (
    <div className="container h-screen flex items-center justify-center">
      <span className="flex gap-1 text-xl">
        Loading
        <Loader2 size={30} className="animate-spin" />
      </span>
    </div>
  );
}

export default LoadingPage;
