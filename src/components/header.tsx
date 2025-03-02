import { useTheme } from "../context/theme-provider";
import Logo from "./elements/logo";
import ThemeToggle from "./elements/theme-toggle";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-12">
        <Logo isDark={isDark} />
        <ThemeToggle isDark={isDark} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Header;
