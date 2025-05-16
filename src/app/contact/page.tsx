// src/app/iletisim/page.tsx
export default function IletisimPage() {
  return (
    <main className="py-12 px-4 md:px-10 md:pt-24 lg:py-36">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* İletişim Formu */}
        <div className="w-full lg:w-1/2 dark:bg-customDarkGray dark:border-none border-customGreen-midDark border  rounded-xl shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-customGreen-dark dark:text-customGreen-light">Bizimle İletişime Geçin</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-customGreen-midDark dark:text-gray-300 mb-1">Adınız</label>
              <input
                type="text"
                className="w-full border dark:border-gray-500 border-customGreen-midDark rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customGreen-midDark "
                placeholder="Ad Soyad"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-customGreen-midDark dark:text-gray-300 mb-1">E-posta</label>
              <input
                type="email"
                className="w-full border dark:border-gray-500 border-customGreen-midDark rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customGreen-midDark"
                placeholder="ornek@eposta.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-customGreen-midDark dark:text-gray-300 mb-1">Mesajınız</label>
              <textarea
                rows={4}
                className="w-full border dark:border-gray-500 border-customGreen-midDark rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customGreen-midDark"
                placeholder="Mesajınızı yazın..."
              />
            </div>
            <button
              type="submit"
              className="bg-customGreen-dark text-white px-6 py-2 rounded-md hover:bg-customGreen-midDark transition"
            >
              Gönder
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="w-full lg:w-1/2  rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1072719189406!2d29.015406600000002!3d41.022909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1357e9165c1%3A0xdc528a3f2da82c76!2zU2lkb21hIEXEn2l0aW0sIERhbsSxxZ9tYW5sxLFrIHZlIEJpbGnFn2lt!5e0!3m2!1str!2str!4v1747296637823!5m2!1str!2str"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}

