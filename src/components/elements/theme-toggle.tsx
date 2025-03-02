import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  setTheme: (theme: "light" | "dark") => void; // ini pake union type agar sesuai dengan `theme`
}

const ThemeToggle = ({ isDark, setTheme }: ThemeToggleProps) => (
  <div
    className={`flex items-center cursor-pointer transition-transform duration-500 ${
      isDark ? "rotate-180" : "rotate-0"
    }`}
    onClick={() => setTheme(isDark ? "light" : "dark")}
  >
    {isDark ? (
      <Sun className="size-6 text-yellow-500" />
    ) : (
      <Moon className="size-6 text-blue-500" />
    )}
  </div>
);

export default ThemeToggle;
