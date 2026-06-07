import { Metadata } from "next";

// =========================
// CURRENT WEEK DATE RANGE
// =========================
function getCurrentWeekRange() {
  const today = new Date();

  // Monday Start
  const currentDay = today.getDay(); // 0 = Sunday
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return {
    startDate: formatDate(monday),
    endDate: formatDate(sunday),
  };
}

const { startDate, endDate } = getCurrentWeekRange();

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `SATTA MATKA FREE WEEKLY JODI AND PANNA GUESSING BY SATTA MATKA MARKET`,
    description: `Weekly Jodi Panna Chart From ${startDate} To ${endDate} – Get this week's Satta Matka jodi & panna results. Explore complete weekly open, close and panel numbers updated every week.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/weekly-jodi-panna`,
    },
  };
}

export default function Home() {
  const panelChart = [
    { digit: 0, values: "235 460 118 334 668" },
    { digit: 1, values: "236 579 119 588 669" },
    { digit: 2, values: "147 570 228 688 200" },
    { digit: 3, values: "247 490 166 599 779" },
    { digit: 4, values: "149 356 220 455 699" },
    { digit: 5, values: "258 690 113 447 889" },
    { digit: 6, values: "178 790 277 880 600" },
    { digit: 7, values: "278 338 115 449 557" },
    { digit: 8, values: "134 378 224 477 990" },
    { digit: 9, values: "360 450 117 225 667" },
  ];

  const weeklyJodi = [
    "45 46 92 93",
    "74 75 21 28",
    "04 06 57 58",
    "14 15 62 68",
    "84 85 86 82",
    "15 16 62 68",
  ];

  const weeklyOpenClose = [
    { day: "Mon.", value: "3-5-7-9" },
    { day: "Tues.", value: "1-4-5-7" },
    { day: "Wed.", value: "2-4-5-8" },
    { day: "Thur.", value: "3-4-6-8" },
    { day: "Fri.", value: "2-4-5-7" },
    { day: "Sat.", value: "0-1-4-7" },
    { day: "Sun.", value: "2-5-7-9" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black p-2 text-white">
      <div className="border-4 border-cyan-500 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.4)]">

        {/* Header */}
        <section className="bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 text-white text-center border-b-4 border-cyan-400 py-3">
          <h1 className="text-xl md:text-2xl font-black italic uppercase tracking-wide">
            SATTA MATKA WEEKLY JODI AND PANNA
          </h1>
        </section>

        <section className="bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-600 text-white text-center border-b-4 border-cyan-400 py-4">
          <h2 className="text-xl md:text-2xl font-black italic uppercase">
            SATTA WEEKLY JODI GUESSING SITE
          </h2>

          <p className="mt-3 text-base md:text-lg italic font-semibold px-4 text-cyan-100">
            weekly jodi or panna, weekly jodi panna line, weekly jodi panna
            mumbai, matka guru weekly single jodi and panna, weekly jodi and
            panna in kalyan
          </p>
        </section>

        {/* Panel Chart Header */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-y-4 border-cyan-400 text-center py-4">
          <h3 className="font-black italic text-lg md:text-xl text-black px-2">
            Weekly Panel Or Patti Chart From {startDate} To {endDate} For
            Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar
            Market
          </h3>
        </div>

        {/* Panel Chart */}
        <div className="bg-slate-950 py-6 text-center space-y-2">
          {panelChart.map((item) => (
            <div
              key={item.digit}
              className="text-lg md:text-xl font-black italic leading-relaxed text-cyan-300"
            >
              <span className="text-pink-400">{item.digit}</span> =&gt;{" "}
              <span className="text-yellow-300">{item.values}</span>
            </div>
          ))}
        </div>

        {/* Weekly Jodi Header */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 border-y-4 border-cyan-400 text-center py-4">
          <h3 className="font-black italic text-lg md:text-xl text-white px-2">
            Weekly Jodi Chart From {startDate} To {endDate} For Kalyan, Milan,
            Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market
          </h3>
        </div>

        {/* Weekly Jodi */}
        <div className="bg-slate-950 py-4 text-center space-y-2">
          {weeklyJodi.map((item, index) => (
            <div
              key={index}
              className="text-lg md:text-xl font-black italic leading-relaxed text-green-400"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Weekly Open Close Header */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 border-y-4 border-cyan-400 text-center py-4">
          <h3 className="font-black italic text-lg md:text-xl text-white px-2">
            Weekly Number Open To Close From {startDate} To {endDate} For
            Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar
            Market
          </h3>
        </div>

        {/* Weekly Open Close */}
        <div className="bg-slate-950 py-6 text-center space-y-2">
          {weeklyOpenClose.map((item) => (
            <div
              key={item.day}
              className="text-lg md:text-xl font-black italic leading-relaxed"
            >
              <span className="text-orange-400">{item.day}</span> =&gt;{" "}
              <span className="text-cyan-300">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Advertisement Section */}
        <div className="bg-gradient-to-b from-pink-950 via-slate-900 to-black border-4 border-pink-500 py-4 text-center px-3">
          <h2 className="text-yellow-300 text-2xl font-black mb-4 animate-pulse">
            ☩ बुकिंग चालू ☩
          </h2>

          <p className="text-lg md:text-xl font-black italic px-4 text-pink-300">
            कल्याण बाजार बम्पर धमाका अचूक जोड़ी पर कमाओ लाखों 100% फिक्स
          </p>

          <p className="text-xl font-black mt-4">
            कॉल :{" "}
            <span className="text-cyan-400 underline">
              1234567890
            </span>
          </p>

          <p className="text-xl font-black mt-2">
            कॉल :{" "}
            <span className="text-cyan-400 underline">
              1234567890
            </span>
          </p>

          <hr className="my-6 border-pink-500" />

          <p className="text-red-400 text-lg font-black italic">
            Note :- Don't Call For Trail Help
          </p>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto overflow-hidden rounded-b-2xl border-t-4 border-cyan-500 bg-gradient-to-b from-slate-900 to-black shadow-[0_0_20px_rgba(34,211,238,0.2)]">

          <div className="text-center py-3 px-2 text-sm md:text-lg font-black leading-10">
            <span className="text-cyan-400">Home</span>
            {" | "}
            <span className="text-pink-400">Matka Guessing</span>
            {" | "}
            <span className="text-yellow-400">Matka Chart</span>
            {" | "}
            <span className="text-blue-400">Matka Play</span>
            {" | "}
            <span className="text-green-400">Tara Matka</span>
            {" | "}
            <span className="text-orange-400">Fix Matka</span>
            {" | "}
            <span className="text-red-400">Sitemap</span>
          </div>

          <div className="border-t border-cyan-500" />

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

            <p className="font-black underline text-xl md:text-2xl text-yellow-300">
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
      </div>
    </main>
  );
}