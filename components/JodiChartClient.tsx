// app/jodi-chart/[slug]/JodiChartClient.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  slug: string;
};

export default function JodiChartClient({ slug }: Props) {
  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();

  // =========================
  // DATE STATES
  // =========================

  const today = new Date().toISOString().split("T")[0];

  const [fromDate, setFromDate] = useState("2026-06-01");
  const [toDate, setToDate] = useState(today);

  // =========================
  // API DATA STATES
  // =========================

  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState<string[][]>([]);

  // =========================
  // FETCH DATA AUTOMATICALLY
  // =========================

  useEffect(() => {
    fetchChartData();
  }, [fromDate, toDate, formattedTitle]);

  const fetchChartData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://sattamatkadpbos.com/apis/client_cron_market.php?action=get_results&name=${encodeURIComponent(
          formattedTitle,
        )}&from_date=${fromDate}&to_date=${toDate}`,
        {
          cache: "no-store",
        },
      );

      const data = await response.json();

      if (data?.data && Array.isArray(data.data)) {
        const rows: string[][] = [];

        for (let i = 0; i < data.data.length; i += 7) {
          rows.push(
            data.data.slice(i, i + 7).map((item: any) => item.result || "--"),
          );
        }

        setChartData(rows);
      } else {
        setChartData([]);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      setChartData([]);
    } finally {
      setLoading(false);
    }
  };

  const redNumbers = [
    "05",
    "72",
    "16",
    "44",
    "00",
    "66",
    "94",
    "49",
    "22",
    "77",
    "61",
    "50",
    "88",
    "38",
  ];

  const latestResult = chartData.flat().slice(-1)[0] || "";

  return (
    <div
      id="top"
      className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-950 via-slate-900 to-black py-4 text-white"
    >
      <div className="px-2">
        {/* Header */}
        <div className="overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 rounded-lg">
          <div className="bg-gradient-to-r from-cyan-700 to-blue-900 py-4 text-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black italic uppercase text-cyan-300 tracking-wide">
              {formattedTitle}
            </h1>
          </div>

          <div className="border-t-2 border-pink-500 bg-slate-900 py-4 text-center">
            <h2 className="text-lg sm:text-xl md:text-3xl font-black italic text-pink-400">
              {formattedTitle}
            </h2>

            <p className="mt-2 px-3 text-[11px] sm:text-xs md:text-sm font-semibold italic text-slate-300 leading-relaxed lowercase">
              {formattedTitle} chart, {formattedTitle} result satta chart,{" "}
              {formattedTitle} result matka chart, {formattedTitle} jodi chart
              record, day night {formattedTitle} matka chart result,{" "}
              {formattedTitle} jodi penal chart, {formattedTitle} bazar
              guessing, dhan express chart ank, satta matka {formattedTitle},
              results of dhan express, {formattedTitle} satta matka,{" "}
              {formattedTitle} chart dpboss
            </p>
          </div>
        </div>

        {/* Result Section */}
        <div className="mt-3 border-2 border-cyan-500 bg-slate-900 py-5 text-center rounded-lg">
          <h2 className="text-lg md:text-2xl font-black uppercase text-cyan-300">
            {formattedTitle}
          </h2>

          <div className="mt-2 text-3xl md:text-5xl font-black text-pink-400 tracking-wider">
            {latestResult}
          </div>

          <button
            onClick={fetchChartData}
            className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-5 py-2 text-sm md:text-xl font-black italic text-white shadow-xl hover:scale-105 transition"
          >
            {loading ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>

        {/* DATE FILTER SECTION */}
        <div className="mt-4 border-2 border-pink-500 bg-slate-900 rounded-xl p-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* FROM DATE */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="mb-1 text-cyan-300 font-bold text-sm">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="bg-slate-800 border border-cyan-500 rounded-lg px-4 py-2 text-white outline-none"
              />
            </div>

            {/* TO DATE */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="mb-1 text-pink-400 font-bold text-sm">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="bg-slate-800 border border-pink-500 rounded-lg px-4 py-2 text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Go Bottom Button */}
        <div className="my-4 flex justify-center">
          <a
            href="#bottom"
            className="rounded-lg border border-cyan-400 bg-slate-900 px-4 py-2 text-sm md:text-lg font-bold italic text-cyan-300 shadow-lg transition hover:bg-slate-800 hover:scale-105"
          >
            Go to Bottom
          </a>
        </div>

        {/* Chart Table */}
        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <div className="border-2 border-cyan-500 bg-slate-900 p-2 shadow-2xl rounded-xl">
              <table className="border-collapse">
                <tbody>
                  {chartData.length > 0 ? (
                    chartData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((num, colIndex) => (
                          <td
                            key={colIndex}
                            className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border border-slate-700 text-center text-lg sm:text-xl md:text-2xl font-black italic ${
                              redNumbers.includes(num)
                                ? "text-pink-400"
                                : "text-white"
                            }`}
                            style={{
                              fontFamily: "Georgia, serif",
                              textShadow: "0px 0px 10px rgba(34,211,238,0.7)",
                            }}
                          >
                            {typeof num === "string" && num.includes("-")
                              ? num.split("-")[1]
                              : num}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-10 text-cyan-300 font-bold"
                      >
                        {loading ? "Loading Chart..." : "No Data Found"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div id="bottom" className="my-4 flex justify-center">
          <a
            href="#top"
            className="rounded-lg border border-pink-400 bg-slate-900 px-4 py-2 text-sm md:text-lg font-bold italic text-pink-400 shadow-lg transition hover:bg-slate-800 hover:scale-105"
          >
            Go to Top
          </a>
        </div>
      </div>

      {/* Footer Result */}
      <div className="mx-2 border-2 border-cyan-500 bg-slate-900 text-center py-4 rounded-xl">
        <h1 className="text-cyan-300 text-lg md:text-2xl font-black uppercase tracking-wide">
          {formattedTitle}
        </h1>

        <div className="mt-2 text-2xl md:text-4xl font-black text-pink-400">
          {latestResult}
        </div>

        <button
          onClick={fetchChartData}
          className="mt-3 px-5 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white font-black shadow-lg hover:scale-105 transition"
        >
          {loading ? "Refreshing..." : "Refresh Result"}
        </button>
      </div>

      {/* Whatsapp Banner */}
      <div className="flex justify-center mt-4 px-2">
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-5 py-3 rounded-xl text-sm md:text-lg font-black shadow-2xl text-center">
          Join our WhatsApp channel for fast Result
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-900 border border-cyan-500 mt-5 py-4 mx-2 rounded-xl">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs sm:text-sm md:text-lg font-bold">
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
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 border border-cyan-500 text-center py-5 mt-4 mx-2 rounded-xl shadow-lg">
        <h2 className="text-pink-400 text-lg md:text-2xl font-black italic">
          sattamatkadpbos
        </h2>

        <div className="mt-3 text-sm md:text-lg font-black text-cyan-300">
          ALL RIGHTS RESERVED (2012-2026)
        </div>

        <div className="mt-2 text-sm md:text-lg font-black text-white">
          SITE OWNER:-
        </div>

        <div className="mt-2 text-sm md:text-xl font-black underline text-pink-400">
          FAST BOSS SIR
        </div>

        <div className="mt-2 text-cyan-300 text-sm md:text-xl font-black">
          1234567890
        </div>

        <div className="mt-3 text-xs md:text-base font-bold text-slate-400 break-all px-2">
          https://sattamatkadpbos.com
        </div>
      </div>
    </div>
  );
}
