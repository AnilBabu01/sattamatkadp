import {
  liveData,
  liveData2,
  forumLinks,
  chartData,
  topGuessers,
  fastResult,
  charts,
  faqData,
  faqData2,
} from "@/data/games";

import Link from "next/link";
import Image from "next/image";
import download from "@/public/images/download.gif";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `ONLINE MATKA PLAY - SATTA MATKA`,
    description: `Join India's most trusted Online Matka Play platform. Play Kalyan, Milan, Rajdhani & all markets at full rate. Fast withdrawals, live results & 100% trusted matka app.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/weekly-jodi-panna`,
    },
  };
}

const results = [
  {
    title: "RAJA-RANI MORNING",
    result: "136-08-459",
    time: "(09:40 - 10:40)",
    color: "text-orange-300",
  },
  {
    title: "KARNATAKA DAY",
    result: "588-10-118",
    time: "(10:00 - 11:00)",
    color: "text-red-300",
  },
  {
    title: "MADHUR MORNING",
    result: "255-27-179",
    time: "(11:35 - 12:35)",
    color: "text-amber-300",
  },
  {
    title: "SRIDEVI",
    result: "240-60-280",
    time: "(11:35 - 12:35)",
    color: "text-lime-300",
    highlight: true,
  },
  {
    title: "TIME BAZAR",
    result: "680-48-567",
    time: "(01:00 - 02:00)",
    color: "text-emerald-300",
  },
  {
    title: "MADHUR DAY",
    result: "388-99-126",
    time: "(01:30 - 02:30)",
    color: "text-yellow-300",
  },
  {
    title: "STAR DAY",
    result: "557-7",
    time: "(02:30 - 05:30)",
    color: "text-pink-300",
  },
  {
    title: "NEW TIME BAZAR",
    result: "120-36-349",
    time: "(01:00 - 02:00)",
    color: "text-rose-300",
  },
  {
    title: "MILAN DAY",
    result: "188-75-159",
    time: "(03:00 - 05:00)",
    color: "text-orange-200",
  },
];

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

const markets = [
  {
    name: "SRIDEVI",
    result: "470-1",
  },
  {
    name: "TIME BAZAR",
    result: "180-98-189",
  },
  {
    name: "MILAN DAY",
    result: "258-50-226",
  },
  {
    name: "KALYAN",
    result: "***-**-***",
  },
  {
    name: "SRIDEVI NIGHT",
    result: "***-**-***",
  },
  {
    name: "MILAN NIGHT",
    result: "***-**-***",
  },
  {
    name: "KALYAN NIGHT",
    result: "***-**-***",
  },
  {
    name: "MAIN BAZAR",
    result: "***-**-***",
  },
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
        <h2 className="text-center text-lg md:text-2xl italic font-black text-white">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-black py-5">
        <div className="flex flex-col items-center gap-2">
          {data.map((item, index) => (
            <p
              key={index}
              className="text-lg md:text-3xl font-black italic text-yellow-300 leading-tight"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const currentDate = new Date()
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white py-2 px-2">
      <div className="max-w-[1600px] mx-auto border-2 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="border-b-4 border-orange-500 bg-gradient-to-r from-red-900 via-orange-800 to-yellow-700 text-center py-5 px-2">
          <h1 className="text-yellow-200 text-3xl italic font-black tracking-wide animate-pulse">
            ONLINE MATKA PLAY
          </h1>
        </div>

        {/* Description */}
        <div className="border-b-4 border-orange-500 bg-zinc-950 px-3 py-4 text-center">
          <h1 className="text-orange-300 text-xl italic font-black tracking-wide">
            Play Online Satta Matka
          </h1>

          <p className="text-[12px] italic leading-5 text-zinc-200 mt-2">
            online matka play, online matka, matka play, kalyan online game,
            matka online,, matkaplay, kalyan online matka, online matka play
            full rate app, trusted online matka app, kalyan online matka app,
            best matka app in india, matka booking app, satta matka online,
            online matka games, all matka play, online matka boss, kalyan online
            matka app
          </p>
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
            {markets.map((market, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 border-b border-gray-400 py-1 px-1 last:border-b-0"
              >
                {/* Market Name */}
                <h2 className="text-center text-[10px] font-black italic uppercase tracking-wide text-[#2a1a1a] md:text-[16px]">
                  {market.name} {market.result}
                </h2>

                {/* Refresh Button */}
                <button className="rounded-full border border-[#d8c06c] bg-gradient-to-b from-[#3e0074] via-[#250047] to-[#120022] px-2 py-1 text-[10px] font-extrabold text-white shadow-[0_0_15px_rgba(255,215,0,0.7)] transition-all hover:scale-105 ">
                  Refresh
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto p-2 bg-zinc-950">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-center py-3 rounded-lg">
              <h1 className="text-xl font-black italic text-white">
                Play Online Matka
              </h1>

              <p className="mt-3 text-sm md:text-lg font-semibold text-white">
                #1 Most Trusted Matka Play Website Call Us :
              </p>

              <span className="inline-block mt-2 bg-yellow-400 text-black px-5 py-2 rounded-full border-2 border-yellow-700 font-black">
                07828798920
              </span>
            </div>

            {/* Notice Board */}
            <div className="mt-3">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black text-center py-2 font-black italic text-xl rounded-t-lg">
                Notice Board
              </div>

              <div className="space-y-[2px]">
                {[
                  "Minimum Deposit : 500",
                  "Minimum Withdrawal: 1000",
                  "Maximum Withdrawal: No Limits",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-orange-500 text-center py-2 text-lg font-bold text-yellow-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Banner */}
            <div className="mt-4 border-2 border-orange-500 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 py-6 text-center rounded-xl">
              <h3 className="text-lg md:text-2xl font-black italic text-white px-2">
                अब सभी मटका बाजार खेलो ऑनलाइन ऐप पर रोज खेलो रोज कमाओ अभी
                डाउनलोड करो
              </h3>

              <button className="mt-5 px-8 py-3 bg-black hover:bg-zinc-900 text-yellow-300 text-lg font-black italic rounded-full shadow-lg border-2 border-yellow-500 transition">
                ONLINE MATKA PLAY
              </button>

              <p className="mt-3 text-lg font-black italic text-yellow-100">
                With 100% Trusted App
              </p>
            </div>

            {/* Play Rate */}
            <div className="mt-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 font-black italic text-xl rounded-t-lg">
                Matka Play Rate
              </div>

              <div className="space-y-[2px]">
                {[
                  "SINGLE 10 KA 95",
                  "JODI 10 KA 950",
                  "SINGLE PATTI 10 KA 1400",
                  "DOUBLE PATTI 10 KA 2800",
                  "TRIPPLE PATTI 10 KA 7000",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-zinc-900 border border-orange-500 text-center py-2 text-lg font-black text-yellow-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Result Header */}
            <div className="mt-4 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-center py-3 rounded-lg">
              <h2 className="text-white text-1xl italic font-black">
                SATTA MATKA PLAY RESULT
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="w-full mt-5 border-2 border-orange-500 rounded-xl overflow-hidden bg-zinc-950">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 py-3 text-center">
          <h2 className="text-white text-2xl md:text-3xl italic font-black uppercase">
            SATTA MATKA PLAY RESULT
          </h2>
        </div>

        {/* Rows */}
        <div>
          {results.map((item, index) => (
            <div
              key={index}
              className={`border-b border-zinc-700 text-center py-4 ${
                item.highlight
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                  : "bg-zinc-950"
              }`}
            >
              <h3
                className={`text-xl md:text-2xl italic font-black ${item.color}`}
              >
                {item.title}
              </h3>

              <p className="text-white text-3xl md:text-4xl font-black mt-1">
                {item.result}
              </p>

              {index === 0 && (
                <p className="text-yellow-300 text-lg font-black italic mt-1">
                  Jodi Panel
                </p>
              )}

              <p className="text-orange-300 text-sm md:text-lg italic font-black mt-2">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="w-full mt-5">
        <ChartSection
          title="Weekly Panel Or Patti Chart From 25-05-2026 To 31-05-2026"
          data={panelChart}
        />

        <ChartSection
          title="Weekly Jodi Chart From 25-05-2026 To 31-05-2026"
          data={jodiChart}
        />

        <ChartSection
          title="Weekly Number Open To Close From 25-05-2026 To 31-05-2026"
          data={weeklyNumbers}
        />
      </section>

      {/* Chart Links */}
      <div className="mt-4 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-white text-center font-black italic text-lg px-3 py-3 rounded-t-xl">
        Online Matka Play Jodi Charts
      </div>

      <section className="bg-zinc-950 rounded-b-xl overflow-hidden border-2 border-orange-500">
        {charts.map((item, index) => (
          <a
            key={index}
            href={`/jodi-chart/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block text-center py-4 text-xl font-black text-yellow-300 border-b border-zinc-800 hover:bg-orange-900 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </section>

      {/* Fixed Buttons */}
      <div className="fixed bottom-3 left-2 z-50">
        <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition text-white px-4 py-2 rounded-xl font-black italic shadow-lg border border-white">
          Online Matka Play
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
