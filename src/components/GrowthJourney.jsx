import React from "react";
import imgCard1 from "../imgs/imgCard1.svg";
import imgCard2 from "../imgs/imgCard2.svg";
import imgCard3 from "../imgs/imgCard3.svg";
import imgCard4 from "../imgs/imgCard4.svg";
import cardBg1 from "../imgs/cardBg1.svg";
import cardBg2 from "../imgs/cardBg2.svg";
import cardBg3 from "../imgs/cardBg3.svg";
import cardBg4 from "../imgs/cardBg4.svg";
import "../style.css";
import GrothCard from "./GrothCard";

const data = [
	{
		no: 1,
		title: "Method Management",
		content:
			"At PruthaTek, we have a standardized and reliable methodology for efficient project management. We combine our technical expertise with proven project management methods to deliver exceptional results and build long-term relationships with our clients.",
		img: imgCard1,
		bg: cardBg1,
		linearGradient:
			"bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
	},
	{
		no: 2,
		title: "Quality Management",
		content:
			"At PruthaTek, we prioritize quality in all aspects of our work. We ensure the safety and security of our web and mobile solutions by rigorously testing and validating our products. Our focus on quality extends to usability, performance, and security, so that our clients can trust in the reliability of our solutions.",
		img: imgCard2,
		bg: cardBg2,
		linearGradient: "bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]",
	},
	{
		no: 3,
		title: "Business Continuity",
		content:
			"At PruthaTek, we are committed to helping your business grow and succeed with our reliable IT solutions. Our team of experts works closely with you to understand your unique business needs and develop customized strategies to achieve your goals. Trust us to be your partner in success.",
		img: imgCard3,
		bg: cardBg3,
		linearGradient:
			"bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]",
	},
	{
		no: 4,
		title: "Engagement Models",
		content:
			"Choose the perfect engagement model for your business needs with PruthaTek. Our tailored and flexible engagement models ensure that we align with your goals and requirements to deliver optimal results.",
		img: imgCard4,
		bg: cardBg4,
		linearGradient:
			"bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3]",
	},
];

function GrowthJourney() {
	return (
		<div className="flex flex-col px-20 sm:gap-[250px] gap-20 py-20 bg-black overflow-hidden">
			{/* first card */}
			{data ? (
				<>
					{data.map((p) => {
						return <GrothCard key={p.no} data={p} />;
					})}
				</>
			) : (
				<></>
			)}
		</div>
	);
}

export default GrowthJourney;
