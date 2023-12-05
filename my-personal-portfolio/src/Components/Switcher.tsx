import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "dark" ? true : false
	);
	console.log("🚀 ~ file: Switcher.tsx:10 ~ Switcher ~ darkSide:", darkSide)

	const toggleDarkMode = (checked:boolean) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				checked={darkSide}
				onChange={toggleDarkMode}
				size={18}
                moonColor="black"
                sunColor="white"
			/>
		</>
	);
}
