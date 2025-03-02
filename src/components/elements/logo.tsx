import { Link } from "react-router";
import { Cloud } from "lucide-react";

interface LogoProps {
  isDark: boolean;
}

const Logo = ({ isDark }: LogoProps) => (
  <Link
    to="/"
    className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 flex items-center gap-1 ${
      isDark
        ? "bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300"
        : "bg-gradient-to-r from-yellow-500 to-amber-200 hover:from-yellow-400 hover:to-amber-300"
    }`}
  >
    <Cloud
      className={`size-7 ${isDark ? "text-blue-500" : "text-yellow-500"}`}
    />
    SkyCast
  </Link>
);

export default Logo;
