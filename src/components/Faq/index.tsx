import { useState } from "react";
import { AddOutline, RemoveOutline } from "react-ionicons";
import { questions } from "../../data";

const Faq = () => {
	const [items, setItems] = useState(questions);

	const toggleItem = (id: number) => {
		setItems(items.map((item) => (item.id === id ? { ...item, open: !item.open } : item)));
	};

	return (
		<div
			id="FAQS"
			className="w-full lg:py-32 py-8 lg:px-0 px-5 flex flex-col gap-10 items-center justify-center"
		>
			<span className="font-Mirza text-primary text-[72px]">FAQs Section</span>
			<div className="flex flex-col gap-3 w-fit">
				{items.map((item) => (
					<div
						className="w-full pb-3 border-b"
						key={item.id}
					>
						<div
							className="flex items-center justify-between w-full lg:gap-[250px] cursor-pointer"
							onClick={() => toggleItem(item.id)}
						>
							<span className="text-[25px] font-Lora text-primary">{item.question}</span>
							{item.open ? (
								<RemoveOutline cssClasses={"cursor-pointer !text-primary !fill-primary"} />
							) : (
								<AddOutline cssClasses={"cursor-pointer !text-primary !fill-primary"} />
							)}
						</div>
						{item.open && (
							<div className="text-lg font-Lora text-primary mt-2">{item.answer}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
