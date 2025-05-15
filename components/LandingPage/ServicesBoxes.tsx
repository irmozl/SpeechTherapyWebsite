import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthCapsule } from "react-icons/gi";
import { GiHealthDecrease } from "react-icons/gi";

const features = [
	{
	  icon: <MdHealthAndSafety />,
	  title: 'Gecikmiş Konuşma',
	  description: 'sıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgjk.',
	},
	{
	  icon: <GiHealthCapsule />,
	  title: 'kekemelik terapisi',
	  description: 'Yıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgj.',
	},
	{
	  icon: <GiHealthDecrease />,
	  title: 'Artikülasyon ve Ses Bozuklukları',
	  description: 'ıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgj.',
	},
	{
		icon: <MdHealthAndSafety />,
		title: 'Gecikmiş Konuşma',
		description: 'sıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgjk.',
	  },
	  {
		icon: <GiHealthCapsule />,
		title: 'kekemelik terapisi',
		description: 'Yıuhderhbrıjugheqbıuherasdfasdasddfgggfgjksfdgj.',
	  },
	  {
		icon: <GiHealthDecrease />,
		title: 'Artikülasyon ve Ses Bozuklukları',
		description: 'ıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnksfdgj.', 
	},
	
  ];
  
  const ServicesBoxes = () => {
	return (
	  <div className="container mx-auto px-4 py-16 lg:py-32">
		<p className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-7">Hizmetlerimiz</p>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
			
		  {features.map((feature, index) => (
			<div
			  key={index}
			  className="flex flex-col justify-between items-center text-center h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-white max-w-full"
			>
			  <div className="text-5xl mb-4 text-customGreen-light">
				{feature.icon}
			  </div>
			  <h2 className="text-xl font-semibold mb-2 break-words w-full">
				{feature.title}
			  </h2>
			  <p className="text-gray-600 text-sm sm:text-base break-words w-full mb-4">
				{feature.description}
			  </p>
			  <button className="mt-4 px-4 py-2 bg-customGreen-midDark text-white rounded hover:bg-customGreen-dark text-sm sm:text-base">
				Bilgi Alın
			  </button>
			</div>
		  ))}
		</div>
	  </div>
	);
  };

  export default ServicesBoxes;

  
