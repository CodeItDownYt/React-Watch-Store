import promo from "../../assets/images/promo.png";
import play from "../../assets/images/play.svg";

const Video = () => {
	return (
		<div
			id="Video"
			className="w-full bg-primary pt-10 pb-24 flex flex-col items-center justify-center gap-14"
		>
			<div className="flex flex-col gap-6">
				<span className="text-white text-[72px] font-Mirza text-center">Video Promo</span>
				<p className="font-Lora text-lg text-white text-center max-w-[700px] px-5">
					Condimentum amet quam venenatis nulla sed sem lacus cursus sit. Sed nulla felis
					aliquet elementum egestas suspendisse nisl faucibus nulla.
				</p>
			</div>
			<div
				className="relative bg-center bg-cover lg:w-[80%] w-full lg:h-[800px] h-[450px]"
				style={{ backgroundImage: `url(${promo})` }}
			>
				<img
					src={play}
					alt="play"
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Video;
