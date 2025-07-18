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
        '<b>👶 Bebek ve Çocuklar İçin</b></br>•Konuşma gecikmesi olan çocuklar (yaşıtlarına göre daha az veya hiç konuşmayan)</br>•Dil gelişim bozukluğu yaşayan çocuklar (gramer, kelime dağarcığı veya cümle kurmada sorun yaşayanlar)</br•Artikülasyon (sesletim) bozukluğu olanlar (örneğin: “r” yerine “y” demek)</br>•Akıcılık bozukluğu (kekemelik, hızlı bozuk konuşma) yaşayan çocuklar</br>•Otizm spektrum bozukluğu olan bireyler (sosyal iletişim ve dil gelişimi desteği için)</br>•Yarık damak-dudak gibi yapısal sorunlara bağlı konuşma güçlüğü çekenler</br>•Down sendromu, serebral palsi gibi gelişimsel bozukluklarla birlikte dil-konuşma sorunları yaşayanlar</br></br><b>🧑‍🎓 Ergenler ve Gençler İçin</b></br>•Dil becerilerinde gerilik (akademik başarıyı etkileyen anlama, anlatım sorunları)</br>•Sosyal iletişim sorunları (diyalog başlatma, sürdürme, uygun dil kullanımı gibi)</br>•Ses problemleri (örneğin ses kısıklığı, çatallanma, bağırma sonucu oluşan ses tahribatları)</br></br><b>🧑‍🦳 Yetişkinler İçin</b></br>•Afazi (inme, beyin hasarı sonrası ortaya çıkan dil kaybı)</br>•Dizartri (kas kontrolü bozukluğu nedeniyle konuşma anlaşılmazlığı)</br>•Apraksi (motor planlamada sorunlar nedeniyle ses ve kelimeleri üretmede güçlük)</br>•Ses bozuklukları (mesleki ses kullanımı nedeniyle ortaya çıkan problemler, örn: öğretmenler, tiyatrocular)</br>•Yutma bozuklukları (nörolojik hastalıklar sonrası yutma güçlüğü yaşayanlar)</br>•Kekemelik (erişkin dönemde de devam eden ya da sonradan başlayan akıcılık bozuklukları)</br>',
    },
    {
      question: 'Terapiler ne kadar sürer?',
      answer:
        'Dil ve konuşma terapilerinin süresi kişiye, sorunun türüne ve şiddetine göre büyük ölçüde değişir. Kesin bir süre vermek mümkün değildir, çünkü her bireyin gelişim hızı ve terapiye yanıtı farklıdır.</br></br><b>🕒 Terapi Süresi Nelere Bağlıdır?</b></br>1.Bozukluğun türü ve şiddeti (örneğin ses bozukluğu genellikle daha kısa sürede ilerleme gösterirken, afazi veya otizmde süreç daha uzun olabilir)</br>2.Kişinin yaşı (erken yaşta başlanan terapiler genelde daha hızlı ilerler)</br>3.Terapiye düzenli katılım (devamsızlık veya düzensizlik süreci uzatabilir)</br>4.Aile desteği ve ev çalışmaları (aile ile yapılan tekrarlar terapiye büyük katkı sağlar)</br>5.Bireysel farklılıklar (öğrenme hızı, dikkat süresi, motivasyon vb.)</br>',
    },
    {
      question: 'Dil ve konuşma bozukluklarının sebepleri nelerdir?',
      answer:
        'Dil ve konuşma bozukluklarının sebepleri çok çeşitli olabilir. Bu bozukluklar doğuştan gelebileceği gibi, sonradan gelişen durumlar sonucu da ortaya çıkabilir. Sebepler genel olarak aşağıdaki ana başlıklarda toplanabilir:</br></br><b>🔹 1. Gelişimsel Nedenler</b></br>Çocuğun yaşına uygun dil ve konuşma gelişimini tamamlayamaması:</br>•Gelişimsel dil bozukluğu (sebebi bilinmeyen özgül dil gelişim sorunları)</br>•Zihinsel yetersizlikler</br>•Otizm spektrum bozukluğu</br>•Öğrenme güçlükleri</br>•Dikkat eksikliği ve hiperaktivite bozukluğu (DEHB)</br></br><b>🔹 2. Nörolojik Nedenler</b></br>Beynin dil ve konuşma merkezlerini etkileyen durumlar:</br>•Serebral palsi</br>•Afazi (inme, beyin travması sonrası)</br>•Apraksi (motor planlama bozukluğu)</br>•Dizartri (kas kontrol bozukluğu)</br>•Nörodejeneratif hastalıklar (Parkinson, ALS gibi)</br></br><b>🔹 3. İşitme Kaybı</b></br>İşitme, dil gelişimi için temel bir duyu olduğundan işitme kayıpları dil ve konuşmayı doğrudan etkiler:</br>•Doğuştan işitme kaybı</br>•Sonradan gelişen işitme problemleri (enfeksiyon, travma, genetik)</br></br><b>🔹 4. Anatomik ve Fizyolojik Nedenler</b></br>Konuşma organlarının yapısal sorunları:</br>•Dudak damak yarığı</br>•Dişsel bozukluklar (örneğin underjet, çapraşık dişler)</br>•Geniş bademcikler/adenoid (rezonans ve artikülasyon etkilenebilir)</br>•Dil bağı (ankyloglossi)</br></br><b>🔹 5. Çevresel ve Psikososyal Faktörler</b></br>Çocuğun içinde bulunduğu çevresel koşulların etkisi:</br>•Dilsel yoksunluk (yeterli konuşma girdisinin olmaması)</br>•Travma, stres, ihmal</br>•Bilingual (iki dilli) ortamda dil gelişiminde gecikmeler</br>•Model eksikliği (çevrede düzgün konuşma modellerinin olmaması)</br></br><b>🔹 6. Genetik ve Kalıtsal Etkenler</b></br>Bazı dil ve konuşma bozuklukları ailesel geçiş gösterebilir:</br>•Ailede gecikmiş konuşma öyküsü</br>•Genetik sendromlar (Down sendromu, Rett sendromu, Fragile X vb.)</br></br><b>🔹 7. Psikojenik Nedenler</b></br>Nadir görülmekle birlikte psikolojik sebeplerle ortaya çıkan konuşma bozuklukları:</br>•Selektif mutizm (çocuğun bazı ortamlarda konuşmayı reddetmesi)</br>',
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
                  {/* {faq.answer} */}
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
