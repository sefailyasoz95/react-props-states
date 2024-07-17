import React, { useState } from "react";
import FirstChildComponent from "./FirstChildComponent";
import SecondChildComponent from "./SecondChildComponent";
import { generateRandomColor } from "../Utils/helperFunctions";

type Props = {};

const ParentComponent = (props: Props) => {
	const [bgColor, setBgColor] = useState(generateRandomColor());
	const handleBackgroundChange = () => {
		setBgColor(generateRandomColor());
	};
	return (
		<>
			<FirstChildComponent name='First Child' bgColor={bgColor} onBgColorChange={handleBackgroundChange} />
			<SecondChildComponent name='Second Child' />
		</>
	);
};

export default ParentComponent;
