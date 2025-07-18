import { MessageCircle } from "lucide-react";

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
            Dil ve konuşma terapisi, bireylerin dil, konuşma, ses, yutma ve
            genel iletişim becerilerini desteklemek amacıyla uygulanan uzmanlık
            alanına dayalı bir müdahaledir. Bu terapi, bireyin yaşına ve
            ihtiyacına göre şekillendirilerek hem çocuklarda hem de
            yetişkinlerde etkili sonuçlar sağlar.
            <br />
            <br />
            Çocuklarda dil ve konuşma terapisi; gelişimsel gecikmeler,
            artikülasyon bozuklukları, dil anlama ve ifade etme güçlükleri gibi
            durumlarda devreye girer. Yetişkinlerde ise inme sonrası dil kaybı
            (afazi), travmatik beyin hasarı, nörolojik hastalıklar ve yaşa bağlı
            iletişim zorlukları gibi durumlarda önemli bir rol oynar.
            <br />
            <br />
            Terapistler, kişiye özel hedefler belirleyerek bireysel terapi
            planları oluşturur. Terapide; oyun temelli yaklaşımlar,
            bilişsel-dilsel teknikler, artikülasyon çalışmaları ve alternatif
            iletişim yöntemleri gibi farklı yöntemler kullanılır.
            <br />
            <br />
            Erken dönemde başlanan terapi, bireyin sosyal ilişkilerini, akademik
            başarısını ve yaşam kalitesini olumlu yönde etkiler. Dil ve konuşma
            terapisi, bireyin kendini daha etkili ifade etmesini sağlayarak,
            günlük yaşamda daha bağımsız ve doyumlu bir şekilde yer almasına
            katkı sunar.
          </p>
          <a href="/contact" className="mt-8 bg-customGreen-dark text-customWhite px-6 py-3 rounded-full text-sm sm:text-base shadow hover:bg-customGreen-darkest transition duration-300">
            Daha fazla bilgi al
          </a>
        </div>
      </div>
    </section>
  );
}
