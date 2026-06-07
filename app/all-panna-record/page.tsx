
import Link from "next/link";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `SATTA MATKA 220 PATTI PANNA CHART RECORD - SATTA MATKA`,
    description: `Satta Matka All Panna Record — complete 220 Patti chart grouped by digit family 0 to 9. Find every hot panna, single pana and weekly patti list free on one page.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/all-panna-record`,
    },
  };
}


import { Info, BarChart3, Pin, Flame } from "lucide-react";


const pannaData = [
  {
    number: 1,
    color: "bg-fuchsia-600",
    values: [
      "137__128__146__236__245__290",
      "380__470__489__560__678__579",
      "119__155__227__335__344__399",
      "588__669__777__100",
    ],
  },
  {
    number: 2,
    color: "bg-violet-600",
    values: [
      "129__138__147__156__237__246",
      "345__390__480__570__589__679",
      "110__228__255__336__499__660",
      "688__778__200__444",
    ],
  },
  {
    number: 3,
    color: "bg-cyan-600",
    values: [
      "120__139__148__157__238__247",
      "256__346__490__580__670__689",
      "166__229__337__355__445__599",
      "779__788__300__111",
    ],
  },
  {
    number: 4,
    color: "bg-sky-600",
    values: [
      "130__149__158__167__239__248",
      "257__347__356__590__680__789",
      "112__220__266__338__446__455",
      "699___770___400___888",
    ],
  },
  {
    number: 5,
    color: "bg-emerald-600",
    values: [
      "140__159__168__230__249__258",
      "267__348__357__456__690__780",
      "113__122__177__339__366__447",
      "799___889___500___555",
    ],
  },
  {
    number: 6,
    color: "bg-teal-600",
    values: [
      "123__150__169__178__240__259",
      "268__349__358__367__457__790",
      "114__277__330__448__466__556",
      "880___899___600___222",
    ],
  },
  {
    number: 7,
    color: "bg-indigo-600",
    values: [
      "124__160__179__250__269__278",
      "340__359__368__458__467__890",
      "115__133__188__223__377__449",
      "557___566___700___999",
    ],
  },
  {
    number: 8,
    color: "bg-pink-600",
    values: [
      "125__134__170__189__260__279",
      "350__369__378__459__468__567",
      "116__224__233__288__440__477",
      "558___990___800___666",
    ],
  },
  {
    number: 9,
    color: "bg-rose-600",
    values: [
      "126__135__180__234__270__289",
      "360__379__450__469__478__568",
      "117__144__199__225__388__559",
      "577___667___900___333",
    ],
  },
  {
    number: 0,
    color: "bg-amber-600",
    values: [
      "127__136__145__190__235__280",
      "370__389__460__479__569__578",
      "118__226__244__299__334__488",
      "668___677___000___550",
    ],
  },
];

const hotPannaData = [
  {
    title: "100-[ 1 ]-777",
    rows: [
      "128-137-146-236-245-290-380-470-489-560",
      "678-579-119-155-227-335-344-399-588-669",
    ],
    highlights: ["146", "119", "669"],
  },
  {
    title: "200-[ 2 ]-444",
    rows: [
      "129-138-147-156-237-246-345-390-480-570",
      "679-589-110-228-255-336-499-660-688-778",
    ],
    highlights: ["237", "228", "778"],
  },
  {
    title: "300-[ 3 ]-111",
    rows: [
      "120-139-148-157-238-247-256-346-490-580",
      "670-689-166-229-337-355-445-599-779-788",
    ],
    highlights: ["238", "337", "788"],
  },
  {
    title: "400-[ 4 ]-888",
    rows: [
      "130-149-158-167-239-248-257-347-356-590",
      "680-789-112-220-266-338-446-455-699-770",
    ],
    highlights: ["149", "446", "699"],
  },
  {
    title: "500-[[ 5 ]]-555",
    rows: [
      "140-159-168-230-249-258-267-348-357-456",
      "690-780-113-122-177-339-366-447-799-889",
    ],
    highlights: ["168", "447", "889"],
  },
  {
    title: "600-[[ 6 ]]-222",
    rows: [
      "123-150-169-178-240-259-268-349-358-457",
      "367-790-114-277-330-448-466-556-880-899",
    ],
    highlights: ["169", "448", "899"],
  },
  {
    title: "700-[[ 7 ]]-999",
    rows: [
      "124-160-179-250-269-278-340-359-368-458",
      "467-890-115-133-188-223-377-449-557-566",
    ],
    highlights: ["179", "377", "566"],
  },
  {
    title: "800[[ 8 ]]-666",
    rows: [
      "125-134-170-189-260-279-350-369-378-459",
      "567-468-116-224-233-288-440-477-558-990",
    ],
    highlights: ["170", "477", "990"],
  },
  {
    title: "900[[ 9 ]]-333",
    rows: [
      "126-135-180-234-270-289-360-379-450-469",
      "117-478-568-144-199-225-388-559-577-667",
    ],
    highlights: ["180", "559", "667"],
  },
  {
    title: "550-[[ 0 ]]-000",
    rows: [
      "127-136-190-235-280-279-370-479-460-569",
      "118-578-668-244-299-226-488-550-677-389",
    ],
    highlights: ["190", "668", "550"],
  },
];

function HighlightText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  const parts = text.split("-");

  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          <span
            className={
              highlights.includes(part)
                ? "text-fuchsia-500 font-black"
                : "text-slate-200"
            }
          >
            {part}
          </span>

          {index !== parts.length - 1 && (
            <span className="text-cyan-400">-</span>
          )}
        </span>
      ))}
    </>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 py-4 text-center">
      {/* HEADER */}
      <div className="mx-2 border-2 border-cyan-400 bg-gradient-to-r from-fuchsia-700 via-violet-700 to-cyan-700 py-4 rounded-xl shadow-xl">
        <h1 className="text-2xl font-black italic tracking-wide text-white">
          ✨ ALL PANNA RECORD CHART ✨
        </h1>
      </div>

      <div className="mx-2 mt-3 border-2 border-fuchsia-500 bg-slate-900 rounded-xl py-4 px-3">
        <h2 className="text-xl italic font-black text-cyan-300">
          SATTA MATKA WEEKLY PATTI CHART
        </h2>

        <p className="mt-3 text-slate-300 italic text-sm leading-7">
          matka 220 patti, matka 220 patti chart, matka satta bazar 220 patti,
          220 patti guessing, matka patti formula
        </p>
      </div>

      {/* TITLE */}
      <div className="mx-4 mt-5 rounded-xl border-2 border-cyan-400 bg-gradient-to-r from-fuchsia-600 to-cyan-600 py-3 shadow-lg">
        <h2 className="text-xl italic font-black tracking-wide text-white">
          🔥 ALL PANNA RECORD 🔥
        </h2>
      </div>

      {/* PANNA DATA */}
      <div className="mt-8 space-y-10">
        {pannaData.map((item) => (
          <div key={item.number}>
            {/* CIRCLE */}
            <div
              className={`w-28 h-28 mx-auto rounded-full ${item.color}
              flex items-center justify-center
              text-white text-6xl font-black
              border-[6px] border-slate-800 shadow-[0_0_30px_rgba(34,211,238,0.4)]`}
            >
              {item.number}
            </div>

            {/* DATA BOX */}
            <div
              className="
              mx-2 md:mx-6
              mt-4
              rounded-2xl
              bg-slate-900
              border-2 border-cyan-500
              py-5
              px-2
              text-cyan-300
              italic
              font-black
              text-lg
              leading-loose
              shadow-xl
            "
            >
              {item.values.map((row, index) => (
                <div key={index}>{row}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* HOT PANNA */}
      <div className="mx-2 mt-10 rounded-xl border-2 border-fuchsia-500 bg-gradient-to-r from-cyan-700 to-fuchsia-700 py-3">
        <h1 className="text-center text-2xl font-black italic text-white">
          💎 ALL HOT PANNA (PATTI)
        </h1>
      </div>

      <div className="mx-2 mt-3 rounded-2xl border-2 border-cyan-500 bg-slate-900 py-6 px-3 shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          {hotPannaData.map((item, index) => (
            <div
              key={index}
              className="mb-10 rounded-2xl border border-fuchsia-500 bg-slate-950 p-5"
            >
              <h2 className="mb-5 text-2xl font-black italic text-cyan-300">
                {item.title}
              </h2>

              {item.rows.map((row, rowIndex) => (
                <p
                  key={rowIndex}
                  className="italic font-bold text-lg md:text-xl leading-10"
                >
                  <HighlightText
                    text={row}
                    highlights={item.highlights}
                  />
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="bg-gradient-to-b from-slate-950 to-black py-10 px-3 md:px-6 space-y-6">
        {/* INFO BOX */}
        <div className="bg-slate-900 border-2 border-cyan-500 rounded-3xl shadow-2xl max-w-4xl mx-auto p-6 md:p-8">
          <h3 className="font-black text-3xl mb-6 text-fuchsia-400 text-center">
            📄 What is All Panna Record in Satta Matka?
          </h3>

          <p className="text-center text-base md:text-lg leading-9 text-slate-300">
            All Panna Record is a complete reference chart of all 220 valid
            three-digit numbers used in Satta Matka. These numbers are called
            Panna, Patti, or Panel.
          </p>
        </div>

        {/* SECTION 1 */}
        <section className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-cyan-500 p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-cyan-500/20 p-3 rounded-xl">
              <Info size={22} className="text-cyan-300" />
            </div>

            <h2 className="font-black italic text-1xl text-white">
              What is 220 Patti in Satta Matka?
            </h2>
          </div>

          <p className="text-center italic font-semibold text-slate-300 leading-8">
            In Satta Matka, there are exactly 220 valid Panna numbers.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: "EXAMPLE 1",
                panna: "128 → 1+2+8 = 11",
                result: "Final Ank → 1",
              },
              {
                title: "EXAMPLE 2",
                panna: "236 → 2+3+6 = 11",
                result: "Final Ank → 1",
              },
              {
                title: "EXAMPLE 3",
                panna: "137 → 1+3+7 = 11",
                result: "Final Ank → 1",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-fuchsia-500 bg-slate-950 p-5 text-center"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.title}
                </p>

                <p className="font-black text-white">{item.panna}</p>

                <p className="italic font-bold text-fuchsia-400">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-fuchsia-500 p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-fuchsia-500/20 p-3 rounded-xl">
              <BarChart3 size={22} className="text-fuchsia-300" />
            </div>

            <h2 className="font-black italic text-1xl text-white">
              Panna types — single, double and triple
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "SINGLE PANA",
                desc: "All three digits are different",
                value: "123, 456, 789",
              },
              {
                title: "DOUBLE PANA",
                desc: "Two digits are the same",
                value: "112, 224, 338",
              },
              {
                title: "TRIPLE PANA",
                desc: "All three digits are same",
                value: "111, 222 ... 000",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-1xl border border-cyan-500 bg-slate-950 p-6 text-center"
              >
                <h3 className="text-sm font-black text-cyan-300 mb-4">
                  {item.title}
                </h3>

                <p className="italic font-semibold text-slate-300">
                  {item.desc}
                </p>

                <p className="mt-4 font-black text-fuchsia-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-cyan-500 p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-cyan-500/20 p-3 rounded-xl">
              <Pin size={22} className="text-cyan-300" />
            </div>

            <h2 className="font-black italic text-1xl text-white">
              How to use All Panna Record for guessing?
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "Find your predicted final ank (0 to 9)",
              "Go to that digit group in the Panna chart",
              "Study which Panna numbers appear most in recent results",
              "Cross-check with Weekly Patti Chart for hot numbers",
              "Select your Panna based on pattern and frequency",
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-fuchsia-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <p className="italic font-semibold text-slate-300 text-left">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-fuchsia-500 p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-fuchsia-500/20 p-3 rounded-xl">
              <Flame size={22} className="text-fuchsia-300" />
            </div>

            <h2 className="font-black italic text-1xl text-white">
              What are Hot Panna numbers?
            </h2>
          </div>

          <p className="italic leading-9 text-slate-300 font-medium">
            Hot Panna are three-digit numbers that appear more frequently in a
            particular market during a specific period.
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-8 overflow-hidden rounded-3xl border-2 border-cyan-500 bg-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
        <div className="text-center py-4 px-2 text-1xl md:text-1xl font-black leading-10">
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
        </div>

        <div className="border-t border-cyan-500" />

        <div className="text-center py-5 px-2 space-y-2">
          <h3 className="text-fuchsia-400 text-lg md:text-1xl font-black italic break-all">
            https://sattamatkadpbos.com
          </h3>

          <p className="font-black text-lg text-white">
            ALL RIGHTS RESERVED (2012-2026)
          </p>

          <p className="font-black text-lg text-cyan-300">
            SITE OWNER:-
          </p>

          <p className="font-black underline text-1xl text-yellow-300">
            FAST BOSS SIR
          </p>

          <p className="text-cyan-400 font-black text-1xl mt-3 break-all">
            1234567890
          </p>

          <p className="font-bold text-base mt-4 text-slate-400 break-all">
            https://sattamatkadpbos.com
          </p>
        </div>
      </footer>
    </main>
  );
}