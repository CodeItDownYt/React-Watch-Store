import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Overview from "./components/Overview";
import Reviews from "./components/Reviews";
import Video from "./components/Video";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Navbar />
			<Header />
			<Overview />
			<Video />
			<Reviews />
			<Features />
			<Faq />
			<Order />
			<Footer />
		</div>
	);
};

export default App;
