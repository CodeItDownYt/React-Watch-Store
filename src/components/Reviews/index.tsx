import { Star } from "react-ionicons";
import { reviews } from "../../data";

const Reviews = () => {
	return (
		<div
			id="Reviews"
			className="w-full flex items-center justify-center flex-col lg:py-24 py-8 lg:px-0 px-5"
		>
			<span className="font-Mirza text-primary text-[72px]">Our Customer's Reviews</span>
			<div className="flex w-full items-center justify-center gap-5 mt-14 lg:flex-row flex-col">
				{reviews.map((review) => (
					<div
						className="flex flex-col w-fit border border-[#E4E4E4] px-[50px] py-[30px]"
						key={review.name}
					>
						<span className="font-Lora text-primary text-lg max-w-[320px] leading-8">
							{review.content}
						</span>
						<div className="flex items-center gap-2 mt-5 lg:flex-row flex-col">
							<span className="text-lg font-Lora font-semibold text-primary">
								{review.name}
							</span>
							<span className="text-lg font-Lora font-semibold text-primary">-</span>
							<span className="text-lg font-Lora font-semibold text-primary">
								{review.date}
							</span>
							<div className="flex items-center gap-1 ml-3">
								<Star cssClasses={"!text-golden !fill-golden"} />
								<Star cssClasses={"!text-golden !fill-golden"} />
								<Star cssClasses={"!text-golden !fill-golden"} />
								<Star cssClasses={"!text-golden !fill-golden"} />
								<Star cssClasses={"!text-golden !fill-golden"} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
