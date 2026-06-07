"use client";

import Image from "next/image";
import download from "@/public/images/download.gif";
import { useGetMarketListQuery } from "../redux/api/apiClient";

/* =========================
   CURRENT WEEK DATE RANGE
========================= */
function getCurrentWeekRange() {
  const today = new Date();

  // Monday = start of week
  const currentDay = today.getDay(); // 0 = Sunday
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const startDate = new Date(today);
  startDate.setDate(today.getDate() + diffToMonday);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB").replace(/\//g, "-");
  };

  return `${formatDate(startDate)} To ${formatDate(endDate)}`;
}

const currentWeekRange = getCurrentWeekRange();



const panelChart = [
  "0 => 235 460 118 334 668",
  "1 => 236 579 119 588 669",
  "2 => 147 570 228 688 200",
  "3 => 247 490 166 599 779",
  "4 => 149 356 220 455 699",
  "5 => 258 690 113 447 889",
  "6 => 178 790 277 880 600",
  "7 => 278 338 115 449 557",
  "8 => 134 378 224 477 990",
  "9 => 360 450 117 225 667",
];

const jodiChart = [
  "45 46 92 93",
  "74 75 21 28",
  "04 06 57 58",
  "14 15 62 68",
  "84 85 86 82",
  "15 16 62 68",
];

const weeklyNumbers = [
  "Mon. => 3-5-7-9",
  "Tues. => 1-4-5-7",
  "Wed. => 2-4-5-8",
  "Thur. => 3-4-6-8",
  "Fri. => 2-4-5-7",
  "Sat. => 0-1-4-7",
  "Sun. => 2-5-7-9",
];

type ChartSectionProps = {
  title: string;
  data: string[];
};

function ChartSection({ title, data }: ChartSectionProps) {
  return (
    <div className="mb-4 rounded-2xl overflow-hidden border-2 border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.5)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 py-4 px-3">
        <h2 className="text-center text-lg md:text-xl italic font-black text-white">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-black py-5">
        <div className="flex flex-col items-center gap-2">
          {data.map((item, index) => (
            <p
              key={index}
              className="text-lg md:text-xl font-black italic text-yellow-300 leading-tight"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const markets = [
  {
    name: "KHAJANA",
    result: "470-1",
  },
  {
    name: "SUPREME DAY",
    result: "180-98-189",
  },
  {
    name: "MORNING SYNDICATE",
    result: "258-50-226",
  },
  {
    name: "MAHARASHTRA NIGHT",
    result: "***-**-***",
  },
];

export default function TaraMatkaChart() {
 

  const {
    data: marketResponse,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white py-2 px-2">
      <div className="max-w-[1600px] mx-auto border-2 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="border-b-4 border-orange-500 bg-gradient-to-r from-red-900 via-orange-800 to-yellow-700 text-center py-5 px-2">
          <h1 className="text-yellow-200 text-3xl italic font-black tracking-wide animate-pulse">
            TARA MATKA PLAY
          </h1>
        </div>

        {/* Description */}
        <div className="border-b-4 border-orange-500 bg-zinc-950 px-3 py-4 text-center">
          <h1 className="text-orange-300 text-xl italic font-black tracking-wide">
            Play TARA MATKA
          </h1>

          <p className="text-[12px] italic leading-5 text-zinc-200 mt-2">
            MUMBAI DAY MATKA JODI CHART TARA In this satta matka chart page you
            get - TARA MUMBAI DAY matka, TARA MUMBAI DAY satta, TARA MUMBAI DAY
            satta matka chart, TARA MUMBAI DAY matka chart, TARA MUMBAI DAY
            satta chart, TARA MUMBAI DAY matka chart, TARA MUMBAI DAY matka jodi
            chart, TARA MUMBAI DAY matka panel chart, TARA MUMBAI DAY matka
            record, TARA MUMBAI DAY paper chart.
          </p>
        </div>

        {/* Current Week */}
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-center py-3 border-b-4 border-orange-500">
          <h2 className="text-black text-xl md:text-2xl font-black italic">
            Current Week : {currentWeekRange}
          </h2>
        </div>

        {/* Lucky Number */}
        <div className="border-y-4 border-orange-500 bg-gradient-to-r from-red-950 via-orange-950 to-yellow-950">
          <div className="bg-black text-center border-b border-orange-500 py-2">
            <h2 className="text-2xl italic font-black text-yellow-300">
              Today Satta Matka Lucky Number
            </h2>
          </div>

          <div className="grid grid-cols-2 text-center py-4 px-2 gap-4">
            <div>
              <h3 className="text-orange-300 text-xl italic font-black">
                Ank (शुभांक)
              </h3>

              <p className="text-4xl font-black text-white mt-2">2-5-7-8</p>
            </div>

            <div>
              <h3 className="text-yellow-300 text-xl italic font-black">
                Final Ank
              </h3>

              <p className="text-3xl font-black text-white mt-2">K-5, M-*</p>
            </div>
          </div>
        </div>

        {/* Live Update */}
        <div className="mt-3 border-2 border-orange-500 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-2">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl italic font-black text-white animate-pulse">
                📡 LIVE UPDATE
              </h2>

              <Image src={download} alt="Image" width={35} height={35} />
            </div>

            <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border-[3px] border-[#b8870d] bg-[#edf2ef] shadow-md">
              <div className="h-2 bg-[#f4b400]" />

              {markets.map((market, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4 border-b border-gray-400 py-1 px-1 last:border-b-0"
                >
                  <h2 className="text-center text-[10px] font-black italic uppercase tracking-wide text-[#2a1a1a] md:text-[16px]">
                    {market.name} {market.result}
                  </h2>

                  <button className="rounded-full border border-[#d8c06c] bg-gradient-to-b from-[#3e0074] via-[#250047] to-[#120022] px-2 py-1 text-[10px] font-extrabold text-white shadow-[0_0_15px_rgba(255,215,0,0.7)] transition-all hover:scale-105 ">
                    Refresh
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="w-full mt-5 border-2 border-orange-500 rounded-xl overflow-hidden bg-zinc-950">
        <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 py-3 text-center">
          <h2 className="text-white text-xl italic font-black uppercase">
            SATTA MATKA PLAY RESULT
          </h2>
        </div>

        <div>
          {!isLoading &&
            !isError &&
            marketList?.slice(0,30)?.map((item: any, index: number) => (
              <div
                key={index}
                className={`border-b border-zinc-700 text-center py-4 ${
                  item?.bg_yellow_status == 1
                    ? "bg-yellow-300 border-yellow-500"
                    : "border-slate-700"
                }`}
              >
                <h3 className={`text-xl italic font-black ${item.color}`}>
                  {item.name}
                </h3>

                <p className="text-white text-xl font-black">{item.result}</p>

                {index === 0 && (
                  <p className="text-yellow-300 text-lg font-black italic ">
                    Jodi Panel
                  </p>
                )}

                <p className="text-orange-300 italic font-black">
                  {item.open_time} - {item.close_time}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Charts */}
      <section className="w-full mt-5">
        <ChartSection
          title={`Weekly Panel Or Patti Chart From ${currentWeekRange}`}
          data={panelChart}
        />

        <ChartSection
          title={`Weekly Jodi Chart From ${currentWeekRange}`}
          data={jodiChart}
        />

        <ChartSection
          title={`Weekly Number Open To Close From ${currentWeekRange}`}
          data={weeklyNumbers}
        />
      </section>

      {/* Chart Links */}
      <div className="mt-4 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-white text-center font-black italic text-lg px-3 py-3 rounded-t-xl">
        TARA MATKA Play Jodi Charts
      </div>

      <section className="bg-zinc-950 rounded-b-xl overflow-hidden border-2 border-orange-500">
        {isLoading && (
          <div className="text-center text-white py-5">Loading...</div>
        )}

        {!isLoading &&
          !isError &&
          marketList?.slice(0, 20)?.map((item: any, index: number) => (
            <a
              key={index}
              href={`/jodi-chart/${item?.name
                ?.toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="block text-center py-4 text-xl font-black text-yellow-300 border-b border-zinc-800 hover:bg-orange-900 transition-all duration-300"
            >
              {item?.name}
            </a>
          ))}
      </section>

      {/* Fixed Buttons */}
      <div className="fixed bottom-3 left-2 z-50">
        <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition text-white px-4 py-2 rounded-xl font-black italic shadow-lg border border-white">
          TARA MATKA Play
        </button>
      </div>

      <div className="fixed bottom-3 right-2 z-50">
        <button className="bg-yellow-400 border-4 border-orange-500 text-black px-5 py-2 rounded-2xl font-black italic shadow-lg hover:scale-105 transition">
          Refresh
        </button>
      </div>
    </main>
  );
}
