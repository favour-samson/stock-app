import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <button onClick={handleToggle}>
      <MdOutlineLightMode size={25} />
    </button>
  );
};

export default ThemeToggle;
