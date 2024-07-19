import bg from "../../assets/images/bg.png";

const Header = () => {
	return (
		<div
			className="w-full h-screen relative bg-cover lg:bg-center bg-left"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="absolute top-1/2 lg:left-[100px] left-5 -translate-y-1/2 flex flex-col gap-8">
				<div className="text-primary font-Mirza lg:text-[100px] text-[90px] max-w-[700px] leading-[100px]">
					Perfect <span className="text-secondary">Watch</span> For Perfect People.
				</div>
				<div className="text-primary font-Lora text-lg max-w-[550px] text-[22px] leading-10">
					Discover Captivating Stories, Expand Your Knowledge, And Embark On New Adventures.
				</div>
				<button className="uppercase w-fit outline-none bg-white rounded-[90px] font-semibold border border-primary text-primary h-[72px] px-14 text-[20px] font-Lora">
					Order now
				</button>
			</div>
		</div>
	);
};

export default Header;
