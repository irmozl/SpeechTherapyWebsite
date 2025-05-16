import { MessageCircle } from 'lucide-react';

export default function DKTExplanation() {
	return (
		<section className="py-16 px-6 sm:px-12 lg:px-24 ">
		<div className="max-w-5xl mx-auto rounded-2xl shadow-lg p-8 sm:p-12 dark:bg-customDarkGray bg-customGreen-lightest hover:shadow-xl transition">
		  <div className="flex flex-col items-center text-center">
			<div className="bg-customGreen-light dark:bg-darkCustomGreen-light p-4 rounded-full shadow mb-6">
			  <MessageCircle className="h-10 w-10 text-customGreen-darkest dark:text-customGreen-light" />
			</div>
			<h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-customGreen-light mb-4">
			  Dil ve Konuşma Terapisi Nedir?
			</h2>
			<p className="text-lg sm:text-xl text-gray-700 leading-relaxed dark:text-gray-300">
			  Dil ve konuşma terapisi, bireylerin iletişim becerilerini geliştirmeyi amaçlayan
			  profesyonel bir hizmettir. Konuşma bozuklukları, ses problemleri, akıcılık sorunları
			  (örneğin kekemelik) ve dil gelişimi geriliklerinde etkili çözümler sunar.
			  Terapistler kişiye özel planlarla iletişimdeki zorlukları aşmaya yardımcı olur.
			</p>
			<button className="mt-8 bg-customGreen-dark text-customWhite px-6 py-3 rounded-full text-sm sm:text-base shadow hover:bg-customGreen-darkest transition duration-300">
			  Daha fazla bilgi al
			</button>
		  </div>
		</div>
	  </section>
	);
  }