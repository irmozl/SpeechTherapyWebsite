import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthCapsule } from "react-icons/gi";
import { GiHealthDecrease } from "react-icons/gi";

const features = [
	{
	  icon: <MdHealthAndSafety />,
	  title: 'Gecikmiş Konuşma',
	  description: 'sıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgjk.',
	  id:1,
	},
	{
	  icon: <GiHealthCapsule />,
	  title: 'Konuşma Sesi Bozuklukları: Fonolojik ve Artikülasyon Bozuklukları',
	  description: 'Yıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgj.',
	  id:2,
	},
	{
	  icon: <GiHealthDecrease />,
	  title: 'Akıcılık Bozuklukları: Kekemelik ve Hızlı Bozuk Konuşma',
	  description: 'ıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgj.',
	  id:3,
	},
	{
		icon: <MdHealthAndSafety />,
		title: 'Gelişimsel Sorunlara Bağlı Dil Bozuklukları',
		description: 'sıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgjk.',
		id:4,
	  },
	  {
		icon: <GiHealthCapsule />,
		title: 'İşitme Kaybına Bağlı Dil ve Konuşma Bozuklukları',
		description: 'Yıuhderhbrıjugheqbıuherasdfasdasddfgggfgjksfdgj.',
		id:5,
	  },
	  {
		icon: <GiHealthDecrease />,
		title: 'Afazi: Beyin Hasarına Bağlı Dil Bozukluğu',
		description: 'ıuhderhbrıjugheqbıuherasdfasdfasddfgggffdgj.', 
		id:6,
	},
	{
		icon: <GiHealthCapsule />,
		title: 'Motor Konuşma Bozuklukları: Apraksi ve Dizartri',
		description: 'Yıuhderhbrıjugheqbıuherasdfasdasddfgggfgjksfdgj.',
		id:7,
	  },
	  {
	  icon: <MdHealthAndSafety />,
	  title: 'Ses bozuklukları',
	  description: 'sıuhderhbrıjugheqbıuherasdfasdfasddfgggfgjksfdgjk.',
	  id:8,
	},
	
	
  ];
  
  const ServicesBoxes = () => {
	return (
	  <div className="container mx-auto px-4 py-16 lg:py-32">
		<p className="text-center text-3xl sm:text-4xl font-bold text-gray-800 dark:text-customGreen-light mb-7">Hizmetlerimiz</p>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
			
		  {features.map((feature, index) => (
			<div
			  key={index}
			  className="flex flex-col justify-between items-center text-center h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-white dark:bg-customDarkGray max-w-full"
			>
			  <div className="text-5xl mb-4 text-customGreen-light">
				{feature.icon}
			  </div>
			  <h2 className="text-xl font-semibold mb-2 break-words w-full dark:text-customGreen-light">
				{feature.title}
			  </h2>
			  {/* <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-words w-full mb-4">
				{feature.description}
			  </p> */}
			  <a href="/servicesTherapy" className="mt-4 px-4 py-2 bg-customGreen-midDark text-white rounded hover:bg-customGreen-dark text-sm sm:text-base">
				Bilgi Alın
			  </a>
			</div>
		  ))}
		</div>
	  </div>
	);
  };

  export default ServicesBoxes;

  
