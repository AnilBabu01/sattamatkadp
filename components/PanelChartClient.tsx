// app/panel-chart/[slug]/page.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { useGetMarketResultQuery } from "@/app/redux/api/apiClient";
import { games } from "@/data/games";

type Props = {
  slug: string;
};

type ApiItem = {
  id: number;
  name: string;
  result: string;
  date: string; // 06-06-2026
};

type WeeklyRow = {
  week: string;
  values: string[];
  results: string[];
  highlight: number[];
};

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.split("/").pop(),
  }));
}

/* =========================================================
   MINI DIGITS
========================================================= */
function MiniDigits({ value }: { value: string }) {
  console.log("from MiniDigits =", value);

  /*
    POSSIBLE VALUES

    224-8
    224-8-205
    ""
  */

  // DEFAULT
  let left = ["-", "-", "-"];
  let right = ["-", "-", "-"];

  if (value) {
    const parts = value.split("-");

    /*
      224-8
      LEFT = 224
    */
    if (parts.length === 2) {
      const first = parts[0] || "";

      left = [first[0] || "-", first[1] || "-", first[2] || "-"];
    }

    /*
      224-8-205
      LEFT = 224
      RIGHT = 205
    */
    if (parts.length >= 3) {
      const first = parts[0] || "";
      const last = parts[2] || "";

      left = [first[0] || "-", first[1] || "-", first[2] || "-"];

      right = [last[0] || "-", last[1] || "-", last[2] || "-"];
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[9px] sm:text-[10px] md:text-[11px] font-extrabold leading-none text-cyan-300">
      {/* ROW 1 */}
      <div className="flex justify-between p-[1px]">
        <span>{left[0]}</span>

        <span>{right[0]}</span>
      </div>

      {/* ROW 2 */}
      <div className="flex justify-between p-[1px]">
        <span>{left[1]}</span>

        <span>{right[1]}</span>
      </div>

      {/* ROW 3 */}
      <div className="flex justify-between p-[1px]">
        <span>{left[2]}</span>

        <span>{right[2]}</span>
      </div>
    </div>
  );
}
/* =========================================================
   DATE HELPERS
========================================================= */

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

function apiDateToObj(dateStr: string) {
  // 06-06-2026
  const [dd, mm, yyyy] = dateStr.split("-");

  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
}

function getMonday(date: Date) {
  const d = new Date(date);

  const day = d.getDay(); // 0 sunday

  const diff = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diff);

  d.setHours(0, 0, 0, 0);

  return d;
}

function getWeekKey(start: Date, end: Date) {
  return `${formatDate(start)} To ${formatDate(end)}`;
}

/* =========================================================
   RESULT -> JODI
   467-71-344 => 71
========================================================= */

function getJodi(result: string) {
  if (!result) return "";

  const parts = result.split("-");

  return parts[1] || "";
}

/* =========================================================
   PANEL LOGIC
========================================================= */
function generateWeeklyChart(data: ApiItem[]): WeeklyRow[] {
  if (!data || data.length === 0) return [];

  /* =====================================================
     SORT DATE
  ===================================================== */
  const sorted = [...data].sort((a, b) => {
    return apiDateToObj(a.date).getTime() - apiDateToObj(b.date).getTime();
  });

  /* =====================================================
     DATE => FULL RESULT
     DATE => JODI
  ===================================================== */
  const resultMap: Record<string, string> = {};

  const jodiMap: Record<string, string> = {};

  sorted.forEach((item) => {
    const dateObj = apiDateToObj(item.date);

    const key = formatDate(dateObj);

    // FULL RESULT
    resultMap[key] = item.result || "";

    // JODI
    jodiMap[key] = getJodi(item.result);
  });

  /* =====================================================
     FIRST + LAST DATE
  ===================================================== */
  const firstDate = apiDateToObj(sorted[0].date);

  const lastDate = apiDateToObj(sorted[sorted.length - 1].date);

  /* =====================================================
     START FROM MONDAY
  ===================================================== */
  let currentWeekStart = getMonday(firstDate);

  const rows: WeeklyRow[] = [];

  while (currentWeekStart <= lastDate) {
    const weekStart = new Date(currentWeekStart);

    const weekEnd = new Date(currentWeekStart);

    weekEnd.setDate(weekEnd.getDate() + 6);

    const values: string[] = [];

    const results: string[] = [];

    const highlight: number[] = [];

    /* =====================================================
       7 DAYS
    ===================================================== */
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(weekStart);

      currentDate.setDate(currentDate.getDate() + i);

      const key = formatDate(currentDate);

      // FULL RESULT
      const fullResult = resultMap[key] || "";

      // JODI
      const jodi = jodiMap[key] || "";

      // PUSH
      results.push(fullResult);

      values.push(jodi);

      // HIGHLIGHT DOUBLE
      if (jodi && jodi.length === 2 && jodi[0] === jodi[1]) {
        highlight.push(i);
      }
    }

    rows.push({
      week: getWeekKey(weekStart, weekEnd),

      // FULL RESULT ARRAY
      results,

      // JODI ARRAY
      values,

      highlight,
    });

    /* =====================================================
       NEXT WEEK
    ===================================================== */
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return rows;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function PanelChartClient({ slug }: Props) {
  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();

  const today = new Date().toISOString().split("T")[0];

  const [fromDate, setFromDate] = useState("2026-06-01");

  const [toDate, setToDate] = useState(today);

  const { data, isLoading, isFetching, refetch } = useGetMarketResultQuery({
    name: formattedTitle,
    fromDate,
    toDate,
  });

  console.log("API DATA =", data);

  /* =========================================================
     API DATA
  ========================================================= */

  const apiData: ApiItem[] = data?.data || [];

  /* =========================================================
     WEEKLY DATA
  ========================================================= */

  const chartDataPanel = useMemo(() => {
    return generateWeeklyChart(apiData);
  }, [apiData]);

  /* =========================================================
     LATEST RESULT
  ========================================================= */

  const latestResult =
    apiData?.length > 0 ? apiData[apiData.length - 1]?.result : "Loading...";

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-2 text-white"
    >
      <div className="w-full px-1 sm:px-2">
        {/* HEADER */}
        <div className="overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/20">
          <div className="bg-gradient-to-r from-cyan-700 to-blue-900 py-3 text-center">
            <h1 className="text-sm sm:text-lg md:text-3xl font-black italic uppercase text-cyan-300 tracking-wide">
              {formattedTitle}
            </h1>
          </div>

          <div className="border-t-2 border-pink-500 bg-slate-900 py-3 text-center">
            <h2 className="text-xs sm:text-base md:text-2xl font-black italic text-pink-400">
              {formattedTitle}
            </h2>
            <p className="lowercase">
              {formattedTitle} panel chart, dhan express night panel patti
              record chart, day {formattedTitle} matka panel chart,{" "}
              {formattedTitle} panel chart guessing, {formattedTitle} matka day
              night panel chart, {formattedTitle} chart panel, day dhan express
              penal chart record, {formattedTitle} panel chart result
            </p>
          </div>
        </div>

        {/* RESULT */}
        <div className="border-2 border-cyan-500 bg-slate-900 py-3 text-center mt-2">
          <h2 className="text-xs sm:text-sm md:text-xl font-extrabold uppercase text-cyan-300">
            {formattedTitle}
          </h2>

          <div className="text-lg sm:text-3xl md:text-5xl font-black text-pink-400 mt-1">
            {latestResult}
          </div>

          <button
            onClick={() => refetch()}
            className="mt-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-2 text-[10px] sm:text-sm md:text-lg font-black italic text-white shadow-lg hover:scale-105 transition"
          >
            {isFetching ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>

        {/* DATE FILTER */}
        <div className="mt-4 border-2 border-pink-500 bg-slate-900 rounded-xl p-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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

        {/* GO BOTTOM */}
        <div className="my-3 flex justify-center">
          <a
            href="#bottom"
            className="rounded border border-cyan-400 bg-slate-900 px-3 py-2 text-[10px] sm:text-xs md:text-sm font-bold italic text-cyan-300 shadow-lg hover:bg-slate-800 transition"
          >
            Go to Bottom
          </a>
        </div>

        {/* LOADING */}
        {isLoading && (
          <div className="text-center py-10 text-cyan-300 font-black text-xl">
            Loading Chart...
          </div>
        )}

        {/* CHART */}
        {!isLoading && (
          <div className="w-full border-[2px] sm:border-[3px] border-cyan-500 bg-slate-900 shadow-2xl overflow-hidden">
            {chartDataPanel.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-8 border-b border-slate-700"
              >
                {/* DATE */}
                <div className="flex flex-col items-center justify-center border-r border-slate-700 bg-slate-800 py-[2px]">
                  <div className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none text-cyan-300">
                    {row.week.split(" To ")[0]}
                  </div>

                  <div className="text-[6px] sm:text-[9px] md:text-[14px] font-black italic leading-none text-pink-400">
                    To
                  </div>

                  <div className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none text-cyan-300">
                    {row.week.split(" To ")[1]}
                  </div>
                </div>

                {/* VALUES */}
                {row.values.map((value, index) => (
                  <div
                    key={index}
                    className="relative flex h-[34px] sm:h-[45px] md:h-[65px] items-center justify-center border-r border-slate-700 bg-slate-950"
                  >
                    <MiniDigits value={row.results[index]} />

                    <span
                      className={`relative z-10 text-[10px] sm:text-[12px] md:text-[22px] font-black italic leading-none ${
                        row.highlight.includes(index)
                          ? "text-pink-400"
                          : "text-white"
                      }`}
                      style={{
                        fontFamily: "Georgia, serif",
                        textShadow: "0px 0px 10px rgba(34,211,238,0.8)",
                      }}
                    >
                      {value || "-"}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* GO TOP */}
        <div id="bottom" className="my-3 flex justify-center">
          <a
            href="#top"
            className="rounded border border-pink-400 bg-slate-900 px-3 py-2 text-[10px] sm:text-xs md:text-sm font-bold italic text-pink-400 shadow-lg hover:bg-slate-800 transition"
          >
            Go to Top
          </a>
        </div>

        {/* FOOTER RESULT */}
        <div className="border-2 border-cyan-500 bg-slate-900 text-center py-3 mt-3 mx-1">
          <h1 className="text-cyan-300 text-xs sm:text-sm md:text-xl font-black uppercase tracking-wide">
            {formattedTitle}
          </h1>

          <div className="text-lg sm:text-2xl md:text-4xl font-black text-pink-400 mt-1">
            {latestResult}
          </div>

          <button
            onClick={() => refetch()}
            className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white text-[10px] sm:text-xs md:text-base font-black shadow-lg hover:scale-105 transition"
          >
            {isFetching ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>
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
