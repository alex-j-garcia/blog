import { useContext } from 'react';
import { ThemeContext } from "../components/ThemeContext";

export default function useThemeContext() {
  return useContext(ThemeContext);
}
