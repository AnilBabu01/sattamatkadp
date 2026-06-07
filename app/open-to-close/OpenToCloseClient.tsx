"use client";
import { markets } from "@/data/games";
import Link from "next/link";
import { useGetMarketListQuery } from "../redux/api/apiClient";

const markets2 = [
  "Kalyan",
  "Main Bazar",
  "Milan Day",
  "Milan Night",
  "Rajdhani Day",
  "Rajdhani Night",
  "Time Bazar",
  "Madhur Day",
  "Madhur Night",
  "+ More",
];

const tips = [
  {
    title: "Always check 3 Ank before market opens",
    description:
      "early access gives you more time to analyze and cross-reference with chart history.",
  },
  {
    title: "Compare with previous day results",
    description:
      "patterns often repeat on specific days of the week. Weekly comparison is key.",
  },
  {
    title: "Use chart history for pattern analysis",
    description:
      "combine OTC data with jodi and panel chart records for a complete picture.",
  },
  {
    title: "Never rely on a single number",
    description:
      "always use the full 3 Ank range to maximize your chances of covering the right digit.",
  },
];

export default function OpenToCloseClient() {
  const {
    data: marketResponse,
    isLoading,
    isError,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black  text-white">
      <div className=" overflow-hidden rounded-2xl border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 text-white text-center py-6 px-4 border-b-2 border-cyan-400">
          <h1 className="italic font-black text-2xl md:text-4xl leading-tight">
            Satta Matka Open To Close - Fix 3 Ank Daily
          </h1>

          <h2 className="italic font-bold text-sm md:text-xl mt-3 text-cyan-100">
            FIX 3 ANK OPEN TO CLOSE FOR ALL MARKETS
          </h2>

          <div className="border-t border-cyan-300 mt-5 pt-5 space-y-2">
            <p className="italic font-black text-xl md:text-3xl text-yellow-300">
              !! Game Update Time !!
            </p>

            <p className="italic font-bold text-lg md:text-xl text-white">
              ☀️ Day 02.00 PM
            </p>

            <p className="italic font-bold text-lg md:text-xl text-white">
              🌙 Night 08.00 PM
            </p>
          </div>
        </div>

        {/* DATE */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-center border-y-2 border-black py-2">
          <h3 className="text-lg md:text-xl font-black italic text-black">
            Date : {new Date().toLocaleDateString("en-GB").replace(/\//g, "-")}
          </h3>
        </div>

        {/* MARKET ROWS */}
        <div className="bg-slate-950 p-2 md:p-4 grid gap-3">
          {isLoading && (
            <div className="text-center text-white py-5">Loading...</div>
          )}

          {!isLoading &&
            !isError &&
            marketList?.slice(0, 20)?.map((market: any, index: number) => (
              <div
                key={index}
                className="rounded-xl border border-cyan-500 bg-gradient-to-r from-slate-900 to-slate-800 text-center py-4 px-3 shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span
                  className={`${market.color} inline-block rounded-md px-4 py-1 text-sm md:text-lg font-black italic text-white shadow`}
                >
                  {market.name}
                </span>

                {"title" in market ? (
                  <div className="mt-3 space-y-1">
                    <div className="text-cyan-300 text-lg md:text-2xl font-black italic">
                      {market.title}
                    </div>

                    <div className="text-white text-lg md:text-xl font-bold italic">
                      CALL KARE
                    </div>

                    <div className="text-pink-400 text-xl md:text-3xl font-black italic break-all">
                      {market.phone}
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 space-y-1">
                    <div className="text-cyan-300 text-lg md:text-2xl italic font-black">
                      ({market.open_time} - {market.close_time})
                    </div>

                    <div className="text-white text-lg md:text-2xl italic font-black">
                      {market.close}
                    </div>

                    <div className="text-pink-400 text-xl md:text-3xl italic font-black">
                      {market.result}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* INFO SECTION */}
        <div className="bg-gradient-to-b from-slate-900 to-black py-8 px-3 md:px-6 space-y-6">
          {/* INFO BOX 1 */}
          <div className="bg-slate-800 border border-cyan-500 rounded-2xl shadow-xl max-w-4xl mx-auto p-5 md:p-8">
            <h3 className="font-black text-2xl md:text-3xl mb-5 text-cyan-300 text-center">
              📄 What is Satta Matka Open To Close?
            </h3>

            <p className="text-center text-base md:text-lg leading-8 text-slate-200">
              Open To Close (OTC) is one of the most important concepts in Satta
              Matka. It refers to the relationship between the opening number
              and closing number declared in each Matka market session.
            </p>

            <div className="mt-6 bg-slate-900 border-l-4 border-cyan-400 p-5 rounded-lg">
              <p className="text-center font-semibold text-slate-100 text-sm md:text-lg">
                Example: If Open is 5 and Close is 0 — the Jodi becomes 50 and
                the Panna is derived from this combination.
              </p>
            </div>
          </div>

          {/* INFO BOX 2 */}
          <div className="bg-slate-800 border border-pink-500 rounded-2xl shadow-xl max-w-4xl mx-auto p-5 md:p-8">
            <h3 className="font-black text-2xl md:text-3xl mb-5 text-pink-300 text-center">
              📄 What is Fix 3 Ank?
            </h3>

            <p className="text-center text-base md:text-lg leading-8 text-slate-200">
              Fix 3 Ank means three specific digits predicted by experts that
              are most likely to appear as Open or Close in a particular Matka
              market on a given day.
            </p>

            <div className="mt-6 bg-slate-900 border-l-4 border-pink-400 p-5 rounded-lg">
              <p className="text-center font-semibold text-slate-100 text-sm md:text-lg">
                Players use these 3 Ank numbers to narrow down their guessing
                range and make smarter decisions instead of guessing from all 10
                digits (0–9), you focus on just 3.
              </p>
            </div>
          </div>

          {/* HOW TO USE */}
          <section className="bg-slate-800 border border-cyan-500 rounded-2xl shadow-xl max-w-4xl mx-auto p-5 md:p-8">
            <h2 className="font-black italic text-2xl md:text-3xl flex items-center justify-center gap-2 text-cyan-300 text-center">
              🧿 How to Use Open To Close on DPBoss?
            </h2>

            <p className="text-center mt-6 text-slate-300 italic font-semibold text-base md:text-lg">
              DPBoss updates Fix 3 Ank Open To Close for all major markets twice
              daily:
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {/* DAY */}
              <div className="border border-yellow-500 rounded-2xl p-6 text-center bg-gradient-to-b from-yellow-500/10 to-transparent">
                <div className="text-5xl">☀️</div>

                <div className="text-yellow-400 font-black uppercase tracking-wider mt-3 text-lg">
                  Day Markets
                </div>

                <div className="text-4xl md:text-5xl font-black text-white mt-2">
                  2:00 PM
                </div>

                <div className="italic text-slate-400 mt-2">Updated Daily</div>
              </div>

              {/* NIGHT */}
              <div className="border border-cyan-500 rounded-2xl p-6 text-center bg-gradient-to-b from-cyan-500/10 to-transparent">
                <div className="text-5xl">🌙</div>

                <div className="text-cyan-400 font-black uppercase tracking-wider mt-3 text-lg">
                  Night Markets
                </div>

                <div className="text-4xl md:text-5xl font-black text-white mt-2">
                  8:00 PM
                </div>

                <div className="italic text-slate-400 mt-2">Updated Daily</div>
              </div>
            </div>

            {/* MARKETS */}
            <div className="mt-8 border-t border-slate-700 pt-5">
              <div className="text-center font-black italic text-cyan-300 text-xl">
                MARKETS COVERED
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-5">
                {markets2.map((market) => (
                  <span
                    key={market}
                    className="px-4 py-2 border border-cyan-500 rounded-full bg-slate-900 text-cyan-300 font-bold italic text-sm md:text-base"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* STRATEGY TIPS */}
          <section className="bg-slate-800 border border-pink-500 rounded-2xl shadow-xl max-w-4xl mx-auto p-5 md:p-8">
            <h2 className="font-black italic text-2xl md:text-3xl flex items-center justify-center gap-2 text-pink-300 text-center">
              💡 Open To Close Strategy Tips
            </h2>

            <div className="space-y-6 mt-8">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-slate-900 rounded-xl p-4 border border-slate-700"
                >
                  <div className="h-10 w-10 min-w-[40px] rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center font-black text-white">
                    {index + 1}
                  </div>

                  <p className="italic text-sm md:text-lg text-slate-200 leading-7">
                    <span className="font-black text-white">{tip.title}</span>
                    {" — "}
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl border border-cyan-500 bg-gradient-to-b from-slate-900 to-black shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <div className="text-center py-1 px-1 text-sm md:text1xl font-black leading-10">
          <Link href="/" className="text-cyan-400">
            Home
          </Link>
          {" | "}
          <Link href="/satta-matka-guessing-forum" className="text-pink-400">
            Matka Guessing
          </Link>
          {" | "}
          <Link href="/satta-matka-chart" className="text-yellow-400">
            Matka Chart
          </Link>
          {" | "}
          <Link href="/online-matka-play" className="text-blue-400">
            Matka Play
          </Link>
          {" | "}
          <Link href="/tara-matka-mumbai" className="text-green-400">
            Tara Matka
          </Link>
          {" | "}
          <Link href="/fix-matka-number" className="text-orange-400">
            Fix Matka
          </Link>
          {" | "}
          <Link href="/sitemap.xml" className="text-orange-400">
            Sitemap
          </Link>
          {" | "}
        </div>

        <div className="border-t border-cyan-500" />

        <div className="text-center py-2 px-1 space-y-1">
          <h3 className="text-pink-400 text-1xl md:text-1xl font-black italic break-all">
            https://sattamatkadpbos.com
          </h3>

          <p className="font-black text-lg md:text-1xl text-white">
            ALL RIGHTS RESERVED (2012-2026)
          </p>

          <p className="font-black text-lg md:text-1xl text-cyan-300">
            SITE OWNER:-
          </p>

          <p className="font-black underline text-xl md:text-1xl text-yellow-300">
            FAST BOSS SIR
          </p>

          <p className="text-cyan-400 font-black text-1xl md:text-1xl mt-2 break-all">
            1234567890
          </p>

          <p className="font-bold text-base md:text-1xl mt-4 text-slate-300 break-all">
            https://sattamatkadpbos.com
          </p>
        </div>
      </footer>
    </main>
  );
}
