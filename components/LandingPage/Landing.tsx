'use client';
import Image from 'next/image';

const Landing = () => {
  return (
    <section className="flex items-center px-6 sm:px-12 lg:px-24 lg:py-36 sm:py-16 py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Görsel - Sol taraf */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/kid-undergoing-speech-therapy.jpg"
            alt="Konuşma terapisi alan çocuk"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Metin - Sağ taraf */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-customGreen-darkest dark:text-customGreen-light mb-6">
            Dil ve konuşma terapisi alanında uzmanlaşmış bir ekip ile çalışın
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-8">
            Hemen bizimle iletişime geçin ve tedaviye başlayın.
          </p>
          <a
            href="#iletisim"
            className="inline-block bg-customGreen-midDark dark:bg-customGreen-darkest text-customWhite px-6 py-3 rounded-lg text-lg font-medium hover:bg-customGreen-dark transition duration-300"
          >
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
