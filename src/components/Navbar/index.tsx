import { MenuOutline } from "react-ionicons";
import { navItems } from "../../data";

const Navbar = () => {
	return (
		<div className="w-full bg-white h-[97px] flex items-center justify-between lg:px-14 px-5">
			<div className="text-primary font-Mirza text-[50px] mt-[-15px]">Reddy.</div>
			<div className="lg:flex items-center gap-14 hidden">
				{navItems.map((item) => (
					<a
						href={item.path}
						key={item.title}
						className="text-primary font-Lora uppercase cursor-pointer"
					>
						{item.title}
					</a>
				))}
			</div>
			<div className="block lg:hidden">
				<MenuOutline
					cssClasses={"cursor-pointer !text-primary !fill-primary"}
					width={"35px"}
					height="35px"
				/>
			</div>
		</div>
	);
};

export default Navbar;
