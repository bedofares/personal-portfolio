import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "dark" ? true : false
	);

	const toggleDarkMode = (checked:boolean) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				checked={darkSide}
				onChange={toggleDarkMode}
				size={25}
                moonColor="black"
                sunColor="white"
			/>
		</>
	);
}
