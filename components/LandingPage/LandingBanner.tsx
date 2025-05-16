export default function LandingBanner() {
	return (
	  <div className="bg-gradient-to-r from-customGreen-light dark:to-darkCustomGreen-light dark:from-darkCustomGreen-lightest to-customGreen-lightest py-10 flex items-center justify-center sm:my-10 md:my-20 lg:my-30">
		<div className="text-center px-4">
		  <h1 className="text-4xl sm:text-5xl font-bold text-customGreen-dark dark:text-customGreen-light ">
			Terapilerden Yararlanmak için geç klamayın
		  </h1>
		  <p className="text-xl sm:text-2xl mt-4 text-customGreen-midDark dark:text-customWhite">
			Çocuklarınızın gelişimi için en iyi tedavi yöntemlerini sunuyoruz.
		  </p>
		  <div className="mt-8">
			<a
			  href=""
			  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-customGreen-midDark rounded-full shadow-lg hover:bg-customGreen-dark transition duration-300"
			>
			  Daha Fazlası
			  <svg
				className="ml-3 w-5 h-5 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			  >
				<path
				  strokeLinecap="round"
				  strokeLinejoin="round"
				  strokeWidth="2"
				  d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			  </svg>
			</a>
		  </div>
		</div>
	  </div>
	);
  }