// src/app/hakkimizda/page.tsx
import Image from 'next/image';

export default function About() {
  return (
    <main className=" min-h-screen px-4 py-10 sm:py-24 md:px-10 lg:py-36">
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center md:mb-32">
        {/* Sol: Resim */}
        <div className="w-1/2 lg:w-1/3 sm:mb-12">
          <Image
            src="/therapist.jpeg" // public klasöründe olmalı
            alt="Konuşma Terapisti"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Sağ: Tanıtım */}
        <div className="w-full lg:w-2/3 space-y-4 text-customGreen-darkest">
          <h1 className="text-3xl font-bold text-customGreen-dark">Konuşma Terapistimizle Tanışın</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus numquam magni provident temporibus ratione cumque labore, eaque, tempore aliquid rerum sed quas tempora. Totam adipisci earum consequatur natus tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa doloremque ea, alias at voluptatem deleniti, ullam qui temporibus molestiae, libero odit placeat. Facere nisi quia asperiores blanditiis non dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates amet necessitatibus consequuntur culpa aliquid. Dolorem pariatur, aliquid natus perspiciatis facere repudiandae! Iste dolorum quidem tenetur fuga rem eos, possimus veritatis!
          </p>
        </div>
      </section>

      {/* Eğitim Bilgileri ve Sertifikalar */}
      <section className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-2">
        {/* Eğitim */}
        <div className="bg-gray-100 dark:bg-customDarkGray rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-customGreen-midDark mb-4">Eğitim Bilgileri</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Ankara Üniversitesi – Dil ve Konuşma Terapisi Lisans (2015)</li>
            <li>İstanbul Üniversitesi – Klinik Psikoloji Yüksek Lisans (2019)</li>
          </ul>
        </div>

        {/* Sertifikalar */}
        <div className="bg-gray-100 dark:bg-customDarkGray rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-customGreen-midDark mb-4">Sertifikalar & Belgeler</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Oyun Terapisi Sertifikası</li>
            <li>Afazi ve Apraksi Rehabilitasyonu Eğitimi</li>
            <li>Gelişimsel Dil Bozuklukları Çalıştayı Katılım Belgesi</li>
          </ul>
        </div>

		{/* Sertifikalar */}
        <div className="bg-gray-100 dark:bg-customDarkGray rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-customGreen-midDark mb-4">Çalışma Geçmişi</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Oyun Terapisi Sertifikası</li>
            <li>Afazi ve Apraksi Rehabilitasyonu Eğitimi</li>
            <li>Gelişimsel Dil Bozuklukları Çalıştayı Katılım Belgesi</li>
          </ul>
        </div>

		{/* Sertifikalar */}
        <div className="bg-gray-100 dark:bg-customDarkGray rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-customGreen-midDark mb-4">Uzmanlık Alanları</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Oyun Terapisi Sertifikası</li>
            <li>Afazi ve Apraksi Rehabilitasyonu Eğitimi</li>
            <li>Gelişimsel Dil Bozuklukları Çalıştayı Katılım Belgesi</li>
          </ul>
        </div>


      </section>
    </main>
  );
}
