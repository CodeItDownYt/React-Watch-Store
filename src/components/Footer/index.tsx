import {
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
	LogoYoutube,
	MailOutline,
} from "react-ionicons";

const Footer = () => {
	return (
		<div className="w-full flex flex-col">
			<div className="w-full flex items-center justify-center lg:gap-40 gap-5 lg:py-24 py-8 lg:px-0 px-5 lg:flex-row flex-col">
				<div className="flex flex-col gap-5">
					<span className="text-primary font-Mirza text-[72px]">Get In Touch</span>
					<div className="flex flex-col gap-3 lg:w-[660px] w-full">
						<div className="flex flex-col gap-2 w-full">
							<span className="font-Lora text-lg text-primary">Your name</span>
							<input
								type="text"
								placeholder="Write your name here"
								className="w-full bg-[#F8F8F8] h-[51px] border border-[#EAEAEA] outline-none px-5 font-Lora placeholder:text-[#9C948E]"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<span className="font-Lora text-lg text-primary">Your Email</span>
							<input
								type="text"
								placeholder="Write your email here"
								className="w-full bg-[#F8F8F8] h-[51px] border border-[#EAEAEA] outline-none px-5 font-Lora placeholder:text-[#9C948E]"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<span className="font-Lora text-lg text-primary">Your message</span>
							<input
								type="text"
								placeholder="Write message"
								className="w-full bg-[#F8F8F8] h-[51px] border border-[#EAEAEA] outline-none px-5 font-Lora placeholder:text-[#9C948E]"
							/>
						</div>
						<button className="uppercase w-fit outline-none bg-secondaryButton rounded-[90px] font-semibold mt-8 text-white h-[72px] px-14 text-[20px] font-Lora">
							order now
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-5">
						<span className="text-primary font-Mirza text-[72px]">Stay Connected</span>
						<div className="flex items-center gap-3">
							<MailOutline cssClasses={"!text-icons !fill-icons"} />
							<span className="text-primary font-Lora text-lg">Youremail@example.com</span>
						</div>
						<div className="flex flex-col gap-3">
							<span className="text-primary font-Mirza text-[72px]">Social Info</span>
							<div className="flex items-center gap-4">
								<LogoFacebook cssClasses={"!text-icons !fill-icons"} />
								<LogoInstagram cssClasses={"!text-icons !fill-icons"} />
								<LogoTwitter cssClasses={"!text-icons !fill-icons"} />
								<LogoLinkedin cssClasses={"!text-icons !fill-icons"} />
								<LogoYoutube cssClasses={"!text-icons !fill-icons"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-[#F8F8F8] h-[80px] flex items-center justify-center">
				<span className="text-primary font-Lora text-lg font-medium">
					© 2024 Reddy. Developed By CodeItDown
				</span>
			</div>
		</div>
	);
};

export default Footer;
