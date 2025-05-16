"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQ() {
  // Her bir FAQ öğesi için ayrı bir state tutacağız
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'Dil ve konuşma terapisi kimler için uygundur?',
      answer:
        'Dil ve konuşma terapisi; konuşma bozukluğu, kekemelik, ses problemleri veya dil gelişim geriliği yaşayan bireyler için uygundur.',
    },
    {
      question: 'Terapiler ne kadar sürer?',
      answer:
        'Seans süresi ve sayısı bireyin ihtiyaçlarına göre değişkenlik gösterir. Genellikle haftalık seanslar halinde ilerlenir.',
    },
    {
      question: 'Seanslarda neler yapılır?',
      answer:
        'Seanslarda bireyin iletişim becerilerini destekleyen çeşitli konuşma, oyun ve dil etkinlikleri uygulanır.',
    },
	{
		question: 'Seanslasdfasdf- yapılır?',
		answer:
		  'Seanslarda bireyin iletişim becerilerini destekleyen çeşitli konuşmdfghdfg hdfhertyıojbemr otıyhjeıor uthyıuwr hnıuyrhnı nu89tyuw bn4589bn7ytw89syt80b9q vy3a489q3984y tbnqvw8 9034a, oyun ve dil etkinlikleri uygulanır.',
	  },
	  {
		question: 'Seansasdgfasdfgrteuyer yapılır?',
		answer:
		  'Seanslarda bireyin iletişim becerilerini destekleyen çeşitli konuşma, oyun ve dil etkinlikleri uygulanır.',
	  },
  ];

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question);
  };

  return (
    <section className=" py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-customGreen-darkest dark:text-customGreen-light text-center mb-10">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question} // Her soruya özgü bir key kullanıyoruz
              className="bg-white border border-customGreen-light rounded-xl shadow-sm dark:bg-customDarkGray dark:border-none"
            >
              <button
                onClick={() => toggleFAQ(faq.question)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 dark:text-gray-300 font-medium text-lg  transition duration-200 rounded-t-xl"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300  ${
                    openFAQ === faq.question ? ' rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === faq.question && (
                <div className="px-6 pb-4 text-gray-700 dark:text-gray-300  ">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
