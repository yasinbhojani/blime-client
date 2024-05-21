import { decodeJWT } from "../../utils/utils";

const Home = () => {
	const decodedPayload = decodeJWT();

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<section className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
			{decodedPayload && (
				<div className="text-center">
					<h1 className="text-2xl font-bold">
						Welcome,{" "}
						<span className="text-[#0B8D5E]">
							{capitalizeFirstLetter(decodedPayload.first_name)}!
						</span>
					</h1>
					<p className="mt-2 ">Happy to see you!</p>
				</div>
			)}
		</section>
	);
};

export default Home;
