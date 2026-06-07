import { topGuessers2 } from "@/data/games";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Guessing Chart Result`,
    description: `Get Satta Matka Guessing satta matka chart, panel chart, jodi chart and daily result updates.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/satta-matka-guessing-forum`,
    },
  };
}

export default function Page() {
  const rules = [
    "DO NOT USE BAD WORDS OR ABUSIVE LANGUAGE IN FORUM.",
    "DONT POST YOUR PHONE NUMBERS OR SITE LINKS.",
    "DONT POST GUESSING AT RESULT TIME",
    "DONT POST WRONG RESULT",
    "IF YOU DONT FOLLOW SITE RULES THAN, YOUR *IP* WILL BE BLOCKED PERMENTLY.",
    "NOTICE :- GAME PASS HONE PAR GUESSER KO WISH KARE THIS IS LAST WARNING TO ALL MEMBERS",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-black text-white">
      {/* Top Container */}
      <div className="border-2 border-cyan-500 shadow-[0_0_20px_#06b6d4]">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 py-5 text-center">
          <h1 className="text-5xl font-black italic tracking-wide text-white drop-shadow-lg">
            Guessing Forum
          </h1>
        </div>

        {/* Title Section */}
        <div className="bg-slate-900 border-y-2 border-cyan-500 text-center p-5">
          <h2 className="text-4xl font-black text-cyan-400 mb-3">
            Matka Guessing
          </h2>

          <p className="font-semibold text-lg text-slate-200 leading-8">
            Welcome Back To India's Best Matka Guessing Forum, Get Kalyan
            Guessing Free With Our Satta Matka Guessing Experts. Also Get Help
            In Milan Day, Milan Night, Rajdhani day/Night And Other Matka Games
            Related To Madhur Matka and Indian Matka In Satta Matka Guessing 143
            Forum.
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="grid md:grid-cols-3 gap-[2px] bg-cyan-500">
          {["GO TO HOME", "100% DATE FIX ANK", "FREE FORUM CLICK HERE"].map(
            (item) => (
              <button
                key={item}
                className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600
                hover:scale-95 duration-200 text-white font-black py-4 text-lg"
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* Rules Section */}
        <div className="bg-slate-950 border border-cyan-500">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="border-b border-cyan-700 py-3 text-center text-[15px] font-bold text-slate-200"
            >
              <span className="text-pink-500 mr-2">{index + 1} »</span>
              {rule}
            </div>
          ))}
        </div>

        {/* Post Box */}
        <div className="bg-gradient-to-r from-purple-900 via-slate-900 to-cyan-900 p-8 border-t-4 border-cyan-500">
          <div className="flex flex-col items-center">
            <label className="text-2xl text-cyan-300 font-bold mb-3">
              Text :
            </label>

            <textarea
              className="w-72 h-28 bg-slate-950 text-white border-2 border-cyan-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Write your message..."
            />

            <div className="mt-4 flex gap-3">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 px-5 py-2 rounded-lg font-bold text-white shadow-lg">
                Submit
              </button>

              <button className="bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-90 px-5 py-2 rounded-lg font-bold text-white shadow-lg">
                Refresh Forum
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Header */}
      <div className="bg-gradient-to-r from-pink-700 via-purple-700 to-cyan-700 text-white border-y-2 border-cyan-400 mt-6">
        <div className="flex justify-between px-4 py-3 text-sm font-black">
          <div>
            <div className="text-cyan-300">RUDRA PENAL KING</div>
            <div className="text-slate-200">30 May 08:10:44 pm</div>
          </div>

          <div className="text-yellow-300 text-center text-lg animate-pulse">
            Top Guesser
          </div>

          <div className="text-green-300">[Online]</div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Banner */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-pink-500 drop-shadow-lg animate-pulse">
            🔥 SATTA MATKA GUESSING FORUM 🔥
          </h1>

          <p className="text-xl font-bold mt-4 text-cyan-300">
            DATE: 30_05_2026
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topGuessers2.map((guesser) => (
            <div
              key={guesser.id}
              className="bg-slate-900 border-2 border-cyan-500 rounded-2xl shadow-[0_0_15px_#06b6d4] overflow-hidden hover:-translate-y-1 duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white p-4 text-center">
                <h2 className="text-2xl font-black tracking-wide">
                  {guesser.name}
                </h2>
              </div>

              {/* Card Body */}
              <div className="p-5 text-center">
                <p className="font-bold text-pink-400 text-lg">
                  📅 {guesser.date}
                </p>

                <p className="font-bold text-cyan-300 mt-3 text-lg">
                  📱 {guesser.phone}
                </p>

                <div className="my-5 bg-slate-950 border border-cyan-500 rounded-xl p-3">
                  <p className="font-black text-green-400 text-lg">
                    Ek Mauka Badlega Aapki Zindagi
                  </p>

                  <p className="text-sm text-slate-300 mt-1">
                    Guaranty Fix Office Se Game Milega
                  </p>
                </div>

                {/* Games */}
                <div className="border-t border-cyan-700 pt-4">
                  <h3 className="font-black text-pink-500 text-xl">
                    Active Games
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {guesser.games.map((game, index) => (
                      <li
                        key={index}
                        className="font-bold text-cyan-300 bg-slate-950 border border-cyan-700 rounded-lg py-2"
                      >
                        🎯 {game}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-5 bg-gradient-to-r from-pink-600 to-purple-700 p-3 rounded-lg font-black text-white">
                  Paisa Aapka Vishwas Hamara
                </div>

                <button className="mt-5 bg-gradient-to-r from-cyan-500 to-blue-700 hover:scale-95 duration-200 text-white px-6 py-3 rounded-xl font-black shadow-lg">
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
