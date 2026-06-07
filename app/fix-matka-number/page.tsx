import FixMatkaNumber from "./FixMatkaNumber";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `FIX MATKA | FIX SATTA | FIX MATKA NUMBER - SATTA MATKA`,
    description: `Looking for Fix Matka number today? sattamatkadpbos provides Fix Satta, Fix Jodi, Satta Matka Fix and live panel charts for Kalyan, Madhur, Milan & Rajdhani daily.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/weekly-jodi-panna`,
    },
  };
}

export default function Home() {
  return <FixMatkaNumber />;
}
