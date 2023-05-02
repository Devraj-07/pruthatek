import React from "react";
import imgCard1 from "../img/imgCard1.svg";
import imgCard2 from "../img/imgCard2.svg";
import imgCard3 from "../img/imgCard3.svg";
import imgCard4 from "../img/imgCard4.svg";
import "../style.css";
import GrothCard from "./GrothCard";

const data = [
	{
		no: 1,
		title: "Method Management",
		content:
			"At PruthaTek, we have a standardized and reliable methodology for efficient project management. We combine our technical expertise with proven project management methods to deliver exceptional results and build long-term relationships with our clients.",
		img: imgCard1,
		gradient: {
			start: "#FF63F9",
			mid: "#E41EAD",
			end: "#FF008D",
		},
	},
	{
		no: 2,
		title: "Quality Management",
		content:
			"At PruthaTek, we prioritize quality in all aspects of our work. We ensure the safety and security of our web and mobile solutions by rigorously testing and validating our products. Our focus on quality extends to usability, performance, and security, so that our clients can trust in the reliability of our solutions.",
		img: imgCard2,
		// gradient: {
		// 	start: "#833ab4",
		// 	mid: "#fd1d1d",
		// 	end: "#5DB98E",
		// },
		gradient: {
			start: "#FF63F9",
			mid: "#E41EAD",
			end: "#FF008D",
		},
	},
	{
		no: 3,
		title: "Business Continuity",
		content:
			"At PruthaTek, we are committed to helping your business grow and succeed with our reliable IT solutions. Our team of experts works closely with you to understand your unique business needs and develop customized strategies to achieve your goals. Trust us to be your partner in success.",
		img: imgCard3,
		gradient: {
			start: "#FF63F9",
			mid: "#E41EAD",
			end: "#FF008D",
		},
	},
	{
		no: 4,
		title: "Engagement Models",
		content:
			"Choose the perfect engagement model for your business needs with PruthaTek. Our tailored and flexible engagement models ensure that we align with your goals and requirements to deliver optimal results.",
		img: imgCard4,
		gradient: {
			start: "#D400A5",
			mid: "#1F7ECB",
			end: "#2ED6E3",
		},
	},
];

function GrowthJourney() {
	return (
		<div className="flex flex-col px-20 sm:gap-[150px] gap-20 py-8 bg-black">
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
