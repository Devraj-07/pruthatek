import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ExpertAnalysisCard from "./ExpertAnalysisCard";
import img from "../imgs/expertAnalysis.png";
import userImg from "../imgs/expertAnalysisUser.png";

const ExpertAnalysis = () => {
	const data = [
		{
			id: 1,
			title: "Blob Generator",
			img: img,
			userImg: userImg,
			authorName: "by Vishal Nayak",
			date: "07 Mar 2023 ",
		},
		{
			id: 2,
			title: "Blob Generator",
			img: img,
			userImg: userImg,
			authorName: "by Vishal Nayak",
			date: "07 Mar 2023 ",
		},
		{
			id: 3,
			title: "Blob Generator",
			img: img,
			userImg: userImg,
			authorName: "by Vishal Nayak",
			date: "07 Mar 2023 ",
		},
		{
			id: 4,
			title: "Blob Generator",
			img: img,
			userImg: userImg,
			authorName: "by Vishal Nayak",
			date: "07 Mar 2023 ",
		},
		{
			id: 5,
			title: "Blob Generator",
			img: img,
			userImg: userImg,
			authorName: "by Vishal Nayak",
			date: "07 Mar 2023 ",
		},
		{
			id: 6,
			title: "Blob Generator",
			img: img,
			userImg: userImg,
			authorName: "by Vishal Nayak",
			date: "07 Mar 2023 ",
		},
	];

	return (
		<div className="overflow-hidden p-2">
			<div className="flex flex-col justify-center items-center gap-4 py-20 px-4">
				<p className="text-white text-3xl font-bold text-center">
					Expert Analysis
				</p>
			</div>
			{data ? (
				<Swiper
					className="text-white overflow-x-hidden flex"
					spaceBetween={70}
					slidesPerView="auto"
					loopedSlides={8}
					freeMode={true}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{data.map((p) => {
						return (
							<SwiperSlide
								className="flex max-w-[360px]"
								key={p.id}
							>
								<ExpertAnalysisCard data={p} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<></>
			)}
		</div>
	);
};

export default ExpertAnalysis;
