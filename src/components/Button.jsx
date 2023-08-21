// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { click } from "../features/estado/estadoSlice";

// export function getActive() {
//     return active;
// };

export const Button = () => {
	const setLanguage = useSelector((state) => state.estado.value);
	const dispatch = useDispatch();

	// const [active, setActive] = useState(false);

	// const handleClick = () => {
	//     setActive(!active);
	// };
	return (
		<button className="buttonLanguage" onClick={() => dispatch(click())}>
			{/* { active ? "English" : "Português"} */}
			{setLanguage ? "English" : "Português"}
		</button>
	);
};
