// import { Helmet } from 'react-helmet-async'

import DayOrdersAmountCard from './day-orders.amount-card'
import MotherCanceledOrdersAmountCard from './mother-canceled-ordersamount-card'
import MotherOrdersAmountCard from './mother-orders-amount-card'
import { MothRevenueCard } from './mother-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      {/* <Helmet title="Dashboard" /> */}

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight"> Dashboard </h1>

        <div className="grid grid-cols-4 gap-4">
          <MothRevenueCard />
          <MotherOrdersAmountCard />
          <DayOrdersAmountCard />
          <MotherCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
