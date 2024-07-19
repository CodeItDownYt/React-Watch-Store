import { features } from "../../data";

const Features = () => {
	return (
		<div
			id="Features"
			className="w-full bg-[#F8F8F8] lg:py-24 py-8 lg:px-0 px-5 flex flex-col items-center justify-center gap-14"
		>
			<span className="font-Mirza text-primary text-[72px]">Features Of Watches</span>
			<div className="flex items-center justify-center gap-8 w-fit flex-wrap lg:px-20">
				{features.map((item) => (
					<div
						className="flex flex-col gap-4"
						key={item.title}
					>
						<img
							src={item.image}
							alt={item.title}
						/>
						<span className="font-Lora text-[28px] text-primary">{item.title}</span>
						<span className="font-Lora text-lg text-primary max-w-[420px] leading-7">
							{item.description}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
