import React from "react";

const ExpertAnalysisCard = ({ data }) => {
	return (
		<div className="text-white  w-[360px] p-[2px] h-[280px] rounded-2xl bg-gradient-to-t from-[#F05225] to-[#eea92000]">
			<div className="bg-black w-full h-full rounded-2xl">
				<div className="bg-[#3a3a3a4d] p-4 w-full h-full flex flex-col justify-between">
					<div>
						<p className="text-sm font-medium">{data.title}</p>
					</div>
					<div>
						<img src={data.img} alt="." />
					</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<div>
								<img src={data.userImg} alt="." />
							</div>
							<div>
								<p className="text-xs capitalize">
									{data.authorName}
								</p>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<p className="border-[1px] text-[12px] border-[#ffffff80] rounded-full px-2">
								{data.date}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExpertAnalysisCard;
