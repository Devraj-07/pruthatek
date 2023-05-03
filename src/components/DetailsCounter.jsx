import React from "react";
import DetailsCounterCard from "./DetailsCounterCard";

const DetailsCounter = () => {
	const data = [
		{
			title: "Projects Completed",
			count: 15,
			linearGradient: "bg-gradient-to-r from-[#0038FF] to-[#9747FF]",
		},
		{
			title: "Active Clients",
			count: 10,
			linearGradient: "bg-gradient-to-r from-[#F05225] to-[#EEA820]",
		},
		{
			title: "Cups of Coffee",
			count: 30,
			linearGradient:
				"bg-gradient-to-r from-[#FF63F9] vai-[#E41EAD] to-[#FF008D]",
		},
		{
			title: "Happy Clients",
			count: 13,
			linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
		},
	];

	return (
		<div className="my-[100px] bg-gradient-to-r from-[#0038FF] to-[#d9d9d900] p-[1px] w-[90%] m-auto">
			<div className="w-full h-full grid place-items-center gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-black text-white px-8 py-16">
				{data ? (
					<>
						{data.map((p, index) => {
							return <DetailsCounterCard key={index} data={p} />;
						})}
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default DetailsCounter;
