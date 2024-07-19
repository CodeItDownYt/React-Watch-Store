import watch from "../../assets/images/watch.svg";
import { productOverview } from "../../data";
const Overview = () => {
	return (
		<div
			id="Overview"
			className="w-full lg:h-[720px] relative overflow-hidden flex items-center justify-center gap-8 lg:flex-row flex-col lg:py-0 pt-8 pb-16 lg:px-0 px-5"
		>
			<img
				src={watch}
				alt="watch"
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
			/>
			<div className="flex flex-col gap-10">
				<span className="font-Mirza text-primary text-[72px]">Product Overview</span>
				<p className="font-Lora text-primary text-lg max-w-[640px]">
					Welcome to the elegant world of Reddy. Our watches blend exquisite craftsmanship with
					timeless design, making them the perfect accessory for any occasion. Each timepiece
					is meticulously handcrafted to ensure superior quality and precision. Explore our
					collection and discover the artistry that defines us.
				</p>
			</div>
			<ul className="space-y-6 max-w-[640px]">
				{productOverview.map((item) => (
					<li
						className="lg:list-disc"
						key={item.title}
					>
						<div className="text-lg font-Lora text-primary font-semibold">
							{item.title} <span className="font-normal">{item.description}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Overview;
