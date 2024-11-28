import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <div className="max-w-7xl mx-auto flex gap-3 p-2 items-center md:mb-20 mb-10">
          <div className="w-1/5">
            <img
              className="w-full rounded-lg"
              src="https://olmaliqbmsm.uz/img/T_9_may_2.jpg"
              alt=""
            />
          </div>
          <div className="w-1/5">
            <img
              className="w-full rounded-lg"
              src="https://olmaliqbmsm.uz/img/T_taqdimot_11.jpg"
              alt=""
            />
          </div>
          <div className="w-1/5">
            <img
              className="w-full rounded-lg"
              src="https://olmaliqbmsm.uz/img/T_8_mart_1.jpg"
              alt=""
            />
          </div>
          <div className="w-1/5">
            <img
              className="w-full rounded-lg"
              src="https://olmaliqbmsm.uz/img/T_2HK_5.jpg"
              alt=""
            />
          </div>
          <div className="w-1/5">
            <img
              className="w-full rounded-lg"
              src="https://olmaliqbmsm.uz/img/T_2HK_6.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row align-center justify-between">
          <div className="md:w-1/4 w-full p-2">
            <ul className="text-center flex flex-wrap">
              <Link
                href={"/direktor"}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                BMSM direktorining taqdimoti
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Maktab ko&apos;rsatkichlari
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                O&apos;quvchilar uchun
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                O&apos;quvchilar xavfsizligi
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Mehnat muhofazasi
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Ota-onalar, Sizlar uchun!
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Bizning yutuqlar
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Hamkorlik memorandumlari
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Davlat xaridlari
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Bo&apos;sh ish o&apos;rinlari
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Ma&apos;naviyat va ma&apos;rifat
              </Link>
              <Link
                href={""}
                className="font-medium block mb-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-blue-700 p-2"
              >
                Virtual qabulxona
              </Link>
            </ul>
          </div>
          <div className="md:w-3/4 w-full p-2">
            <div className="flex flex-col md:flex-row align-center  gap-3 mb-5">
              <img
                className="md:w-56 w-full"
                src="https://olmaliqbmsm.uz/img/Tadbirlar/56_1.jpg"
                alt=""
              />
              <div>
                <h1 className="text-center text-blue-700 font-bold md:text-3xl text-xl mb-2">
                  Zarkentda uzum sayli bo&apos;lib o&apos;tdi
                </h1>
                <p className="font-normal mb-4 md:text-start text-center">
                  Joriy yilning 23-25-avgust kunlari Parkent tumaning Zarkent
                  qishlog&apos;ida uzum sayli festivali bo&apos;lib o&apos;tdi. Festivalni
                  o&apos;tkazishdan ko&apos;zlangan asosiy maqsad, nafaqat yurtimiz,
                  balki, xorijga turizm salohiyatini keng namoyish etish, milliy
                  mahsulotimiz brendini jahon bozorida munosib o&apos;ringa ega
                  bo&apos;lishini ta&apos;minlash, qadimiy uzumchilik va vinochilik
                  tajribasi hamda bog&apos;dorchilik mahsulotlarining noyob tur va
                  navlarini keng ommalashtirish bo&apos;ldi.
                </p>
                <div className="flex gap-7 items-center md:justify-start justify-center ">
                  <p>25.08.2024</p>
                  <button className="hover:underline">Batafsil</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row align-center  gap-3 mb-5">
              <img
                className="md:w-56 w-full"
                src="https://olmaliqbmsm.uz/img/Tadbirlar/56_1.jpg"
                alt=""
              />
              <div>
                <h1 className="text-center text-blue-700 font-bold md:text-3xl text-xl mb-2">
                  Zarkentda uzum sayli bo&apos;lib o&apos;tdi
                </h1>
                <p className="font-normal mb-4 md:text-start text-center">
                  Joriy yilning 23-25-avgust kunlari Parkent tumaning Zarkent
                  qishlog&apos;ida uzum sayli festivali bo&apos;lib o&apos;tdi. Festivalni
                  o&apos;tkazishdan ko&apos;zlangan asosiy maqsad, nafaqat yurtimiz,
                  balki, xorijga turizm salohiyatini keng namoyish etish, milliy
                  mahsulotimiz brendini jahon bozorida munosib o&apos;ringa ega
                  bo&apos;lishini ta&apos;minlash, qadimiy uzumchilik va vinochilik
                  tajribasi hamda bog&apos;dorchilik mahsulotlarining noyob tur va
                  navlarini keng ommalashtirish bo&apos;ldi.
                </p>
                <div className="flex gap-7 items-center md:justify-start justify-center ">
                  <p>25.08.2024</p>
                  <button className="hover:underline">Batafsil</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row align-center  gap-3 mb-5">
              <img
                className="md:w-56 w-full"
                src="https://olmaliqbmsm.uz/img/Tadbirlar/56_1.jpg"
                alt=""
              />
              <div>
                <h1 className="text-center text-blue-700 font-bold md:text-3xl text-xl mb-2">
                  Zarkentda uzum sayli bo&apos;lib o&apos;tdi
                </h1>
                <p className="font-normal mb-4 md:text-start text-center">
                  Joriy yilning 23-25-avgust kunlari Parkent tumaning Zarkent
                  qishlog&apos;ida uzum sayli festivali bo&apos;lib o&apos;tdi. Festivalni
                  o&apos;tkazishdan ko&apos;zlangan asosiy maqsad, nafaqat yurtimiz,
                  balki, xorijga turizm salohiyatini keng namoyish etish, milliy
                  mahsulotimiz brendini jahon bozorida munosib o&apos;ringa ega
                  bo&apos;lishini ta&apos;minlash, qadimiy uzumchilik va vinochilik
                  tajribasi hamda bog&apos;dorchilik mahsulotlarining noyob tur va
                  navlarini keng ommalashtirish bo&apos;ldi.
                </p>
                <div className="flex gap-7 items-center md:justify-start justify-center ">
                  <p>25.08.2024</p>
                  <button className="hover:underline">Batafsil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
