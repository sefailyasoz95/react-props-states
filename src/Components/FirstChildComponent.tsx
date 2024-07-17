import React from "react";

type Props = {
	name: string;
	bgColor: string;
	onBgColorChange: () => void;
};

const FirstChildComponent = ({ name, bgColor, onBgColorChange }: Props) => {
	return (
		<div className='child' style={{ backgroundColor: bgColor }}>
			{name}
			<button onClick={onBgColorChange}>Change Color</button>
		</div>
	);
};

export default FirstChildComponent;
