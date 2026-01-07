import { Suspense } from "react";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "../components/fallback";
import { CoinOverview } from "../components/home/CoinOverview";
import { TrendingCoins } from "../components/home/TrendingCoins";

const page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
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
