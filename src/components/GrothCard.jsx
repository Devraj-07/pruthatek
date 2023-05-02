import React from "react";

const GrothCard = ({ data }) => {
	return (
		<div className="flex w-full sm:flex-row flex-col justify-between items-center sm:gap-0 gap-20">
			<div className="sm:w-[50%] grid grid-flow-col grid-cols-[64.14px_auto] gap-6">
				<div className="w-[64.14px] h-[64.14px]">
					<div
						className={`box-border rounded-[50%] flex items-center justify-center text-center font-medium text-[35px] ${data.linearGradient} p-[1px]`}
					>
						<span className="box-border w-[62px] h-[62px] flex justify-center items-center bg-black rounded-[50%] text-white">
							{data.no}
						</span>
					</div>
				</div>

				<div className="flex flex-col gap-6 items-start">
					<p
						className={`font-medium text-[35px] text-transparent bg-clip-text ${data.linearGradient}`}
					>
						{data.title}
					</p>
					<p className="text-justify capitalize text-white leading-8">
						{data.content}
					</p>
					<button className="mt-6 text-white flex gap-8 justify-center items-center border-[1px] border-white px-[38px] py-2 rounded-md">
						<span>Explore</span>
						<span>
							<svg
								width="18"
								height="15"
								viewBox="0 0 18 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.2197 14.0303C10.5126 14.3232 10.9874 14.3232 11.2803 14.0303L17.5303 7.78033C17.8232 7.48744 17.8232 7.01256 17.5303 6.71967L11.2803 0.46967C10.9874 0.176777 10.5126 0.176777 10.2197 0.46967C9.92678 0.762563 9.92678 1.23744 10.2197 1.53033L15.1893 6.5L0.75 6.5C0.335786 6.5 0 6.83579 0 7.25C0 7.66421 0.335786 8 0.75 8L15.1893 8L10.2197 12.9697C9.92678 13.2626 9.92678 13.7374 10.2197 14.0303Z"
									fill="white"
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div className="relative sm:max-w-[45%] flex justify-center items-center">
				<div className="absolute top-[-200px] right-[-125px] w-[175%] h-[175%]">
					<img src={data.bg} alt="." />
				</div>
				<img className="z-1 w-[80%]" src={data.img} alt="." />
			</div>
		</div>
	);
};

export default GrothCard;
