import React from "react";

const DetailsCounterCard = ({ data }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-7">
			<span
				className={`text-5xl font-semibold text-transparent bg-clip-text ${data.linearGradient}`}
			>
				{data.count}+
			</span>
			<span className="text-lg">{data.title}</span>
		</div>
	);
};

export default DetailsCounterCard;
