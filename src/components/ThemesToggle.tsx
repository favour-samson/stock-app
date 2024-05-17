import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <MdOutlineLightMode size={25} />
    </button>
  );
};

export default ThemeToggle;
