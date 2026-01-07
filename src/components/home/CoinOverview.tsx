import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export const CoinOverview = async () => {
  let coin: CoinDetailsData | null = null;

  try {
    coin = await fetcher<CoinDetailsData>("/coins/bitcoin");
  } catch (error) {
    console.error("Error fetching coin overview:", error);
    // Return null to trigger fallback UI
    return null;
  }

  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image
          src={coin?.image?.large}
          alt={coin?.name}
          width={56}
          height={56}
        />

        <div className="info">
          <p>
            {coin?.name} / {coin?.symbol.toUpperCase()}
          </p>

          <h1>
            {coin?.market_data?.current_price?.usd
              ? formatCurrency(coin.market_data.current_price.usd)
              : "N/A"}
          </h1>
        </div>
      </div>
    </div>
  );
};
