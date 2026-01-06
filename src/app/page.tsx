import Image from "next/image";
import { DataTable } from "../components/DataTable";
import Link from "next/link";
import { cn, formatCurrency } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import { fetcher } from "@/lib/coingecko.actions";
import { CoinOverview } from "../components/home/CoinOverview";
import { Suspense } from "react";
import { TrendingCoins } from "../components/home/TrendingCoins";

const dummyData: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      market_cap_rank: 1,
      thumb: "/assets/logo.svg",
      large: "/assets/logo.svg",
      data: {
        price: 89113.0,
        price_change_percentage_24h: { usd: 2.5 },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      market_cap_rank: 2,
      thumb: "/assets/converter.svg",
      large: "/assets/converter.svg",
      data: {
        price: 2500.0,
        price_change_percentage_24h: { usd: -1.2 },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      market_cap_rank: 3,
      thumb: "/assets/logo.svg",
      large: "/assets/logo.svg",
      data: {
        price: 150.0,
        price_change_percentage_24h: { usd: 5.0 },
      },
    },
  },
];

const page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<div>Loading coin overview...</div>}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<div>Loading trending coins...</div>}>
          <TrendingCoins />
        </Suspense>
      </section>

      <section className="w-full wt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
