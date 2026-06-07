"use client";

import Link from "next/link";
import { useGetMarketListQuery } from "../redux/api/apiClient";

export default function SattaMatkaChartClient() {
  const {
    data: marketResponse,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#140021] via-[#22003a] to-black p-2">
      <div className="overflow-hidden rounded-2xl border-2 border-fuchsia-500 bg-[#12001f] shadow-[0_0_25px_rgba(217,70,239,0.4)]">
        <div className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-700 border-b-2 border-fuchsia-400 py-3 px-2">
          <h1 className="text-center text-xl md:text-2xl font-black italic text-white drop-shadow-lg">
            ✨ Satta Matka Chart 2026 – Jodi & Panel Chart All Markets ✨
          </h1>
        </div>

        <section className="bg-[#170026] rounded-b-2xl overflow-hidden border border-fuchsia-500">
          {isLoading && (
            <div className="text-center text-white py-5">Loading...</div>
          )}

          {!isLoading &&
            !isError &&
            marketList?.slice(0,20)?.map((item: any, index: number) => (
              <a
                key={index}
                href={`/jodi-chart/${item?.name
                  ?.toLowerCase()
                  ?.replace(/\s+/g, "-")}`}
                className="block text-center py-4 text-lg md:text-xl font-black text-cyan-300 border-b border-fuchsia-900 hover:bg-fuchsia-700 hover:text-white transition-all duration-300"
              >
                ✦ {item?.name}
              </a>
            ))}
        </section>
      </div>
      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl border border-fuchsia-500 bg-gradient-to-b from-[#1a002b] to-black shadow-[0_0_25px_rgba(217,70,239,0.35)]">
        <div className="text-center py-3 px-2 text-sm md:text-lg font-black leading-9 bg-[#210036]">
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

        <div className="border-t border-fuchsia-500" />

        <div className="text-center py-4 px-2 space-y-2">
          <h3 className="text-pink-400 text-lg md:text-xl font-black italic break-all">
            https://sattamatkadpbos.com
          </h3>

          <p className="font-black text-lg md:text-xl text-white">
            ALL RIGHTS RESERVED (2012-2026)
          </p>

          <p className="font-black text-lg md:text-xl text-cyan-300">
            SITE OWNER:-
          </p>

          <p className="font-black underline text-2xl md:text-3xl text-yellow-300 animate-pulse">
            FAST BOSS SIR
          </p>

          <p className="text-cyan-400 font-black text-lg md:text-xl mt-2 break-all">
            1234567890
          </p>

          <p className="font-bold text-base md:text-lg mt-4 text-slate-300 break-all">
            https://sattamatkadpbos.com
          </p>
        </div>
      </footer>
    </main>
  );
}
