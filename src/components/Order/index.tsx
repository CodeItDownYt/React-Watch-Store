import { useState } from "react";
import order from "../../assets/images/order.png";

const Order = () => {
	const [quantity, setQuantity] = useState(1);
	return (
		<div
			id="Order"
			className="w-full bg-primary flex items-center justify-center lg:gap-24 gap-5 lg:py-40 py-8 lg:px-0 px-5 mt-10 lg:flex-row flex-col"
		>
			<img
				src={order}
				alt="order"
			/>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-3">
					<span className="text-white font-Mirza text-[72px]">Order Your Choice</span>
					<p className="text-white font-Lora text-lg max-w-[520px]">
						Experience the elegance of Reddy on your wrist. Place your order today and enjoy
						free worldwide shipping.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="font-Lora text-lg font-semibold text-white">
						Watch Model: <span className="font-normal">Reddy Watch</span>
					</div>
					<div className="font-Lora text-lg font-semibold text-white">
						Price: <span className="font-normal">$2000</span>
					</div>
					<div className="font-Lora text-lg font-semibold text-white flex items-center gap-2">
						Choose Strap Color:{" "}
						<div className="flex items-center gap-[6px]">
							<div className="rounded-full bg-[#ABA194] w-[18px] h-[18px] border-2 border-white cursor-pointer"></div>
							<div className="rounded-full bg-[#812013] w-[18px] h-[18px] border-2 border-white cursor-pointer"></div>
							<div className="rounded-full bg-[#4A3937] w-[18px] h-[18px] border-2 border-white cursor-pointer"></div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="font-Lora text-lg font-semibold text-white">Quantity:</div>
						<div className="flex items-center">
							<div
								onClick={() => quantity >= 1 && setQuantity((prev) => prev - 1)}
								className="w-[40px] h-[45px] rounded-tl-[4px] rounded-bl-[4px] bg-[#e9e9e9] grid place-items-center text-primary font-Lora font-semibold text-[25px] cursor-pointer"
							>
								-
							</div>
							<div className="w-[80px] h-[45px] bg-white grid place-items-center text-primary font-Lora text-lg">
								{quantity}
							</div>
							<div
								onClick={() => quantity <= 9 && setQuantity((prev) => prev + 1)}
								className="w-[40px] h-[45px] rounded-tr-[4px] rounded-br-[4px] bg-[#e9e9e9] grid place-items-center text-primary font-Lora font-semibold text-[25px] cursor-pointer"
							>
								+
							</div>
						</div>
					</div>
					<button className="uppercase w-fit outline-none bg-white rounded-[90px] font-semibold border border-primary mt-8 text-primary h-[72px] px-14 text-[20px] font-Lora">
						order now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
