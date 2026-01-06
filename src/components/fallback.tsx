import { DataTable } from "./DataTable";

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image skeleton animate-pulse"></div>
        <div className="info">
          <div className="header-line-sm skeleton animate-pulse"></div>
          <div className="header-line-lg skeleton animate-pulse"></div>
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton animate-pulse"></div>
      </div>
    </div>
  );
};

const skeletonColumns: DataTableColumn<any>[] = [
  {
    header: "Name",
    cellClassName: "name-cell",
    cell: () => (
      <div className="name-link">
        <div className="name-image skeleton animate-pulse"></div>
        <div className="name-line skeleton animate-pulse"></div>
      </div>
    ),
  },
  {
    header: "24h Change",
    cellClassName: "change-cell",
    cell: () => (
      <div className="price-change">
        <div className="change-icon skeleton animate-pulse"></div>
        <div className="change-line skeleton animate-pulse"></div>
      </div>
    ),
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: () => <div className="price-line skeleton animate-pulse"></div>,
  },
];

const skeletonData = Array.from({ length: 6 }, (_, i) => ({ id: i }));

export const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <DataTable
          data={skeletonData}
          columns={skeletonColumns}
          rowKey={(row) => row.id}
        />
      </div>
    </div>
  );
};
