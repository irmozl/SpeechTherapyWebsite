
const services = [
  {
    id: 1,
    title: "Dil ve Konuşma Terapisi",
    description:
      "Konuşma bozuklukları, gecikmiş konuşma, kekemelik ve artikülasyon problemleri için bireysel terapi hizmeti sunuyoruz.",
  },
  {
    id: 2,
    title: "Ses Terapisi",
    description:
      "Ses kısıklığı, nodül gibi ses problemleri için kişiye özel değerlendirme ve terapi programları oluşturuyoruz.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    title: "Yutma Terapisi",
    description:
      "Yutma güçlüğü (disfaji) yaşayan bireyler için güvenli beslenmeyi destekleyen terapiler sağlıyoruz.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 4,
    title: "Gelişimsel Dil Bozuklukları",
    description:
      "Otizm, Down Sendromu, dikkat eksikliği gibi gelişimsel durumlara yönelik özel iletişim desteği veriyoruz.",
  },
  {
    id: 5,
    title: "Gelişimsel Dil Bozuklukları",
    description:
      "Otizm, Down Sendromu, dikkat eksikliği gibi gelişimsel durumlara yönelik özel iletişim desteği veriyoruz.",
  },
  {
    id: 6,
    title: "Gelişimsel Dil Bozuklukları",
    description:
      "Otizm, Down Sendromu, dikkat eksikliği gibi gelişimsel durumlara yönelik özel iletişim desteği veriyoruz.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 7,
    title: "Gelişimsel Dil Bozuklukları",
    description:
      "Otizm, Down Sendromu, dikkat eksikliği gibi gelişimsel durumlara yönelik özel iletişim desteği veriyoruz.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 8,
    title: "Gelişimsel Dil Bozuklukları",
    description:
      "Otizm, Down Sendromu, dikkat eksikliği gibi gelişimsel durumlara yönelik özel iletişim desteği veriyoruz.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];
import React from "react";
export default function About() {
  return (
    <section className=" py-12 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-customGreen-darkest mb-10">
          Hizmetlerimiz
        </h2>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-customGreen-dark mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
