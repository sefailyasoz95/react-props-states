import React, { useState } from "react";
import { generateRandomColor } from "../Utils/helperFunctions";

type Props = {
	name: string;
};

const SecondChildComponent = ({ name }: Props) => {
	const [bgColor, setBgColor] = useState(generateRandomColor());
	const handleBgChange = () => {
		setBgColor(generateRandomColor());
	};
	return (
		<div className='child' style={{ backgroundColor: bgColor }}>
			{name}
			<button onClick={handleBgChange}>Change Color</button>
		</div>
	);
};

export default SecondChildComponent;
