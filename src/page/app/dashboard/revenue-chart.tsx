import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function RevenueChart() {
  const data = [
    { date: '10/12', revenue: 1200 },
    { date: '11/12', revenue: 800 },
    { date: '12/12', revenue: 900 },
    { date: '13/12', revenue: 4000 },
    { date: '14/12', revenue: 4000 },
    { date: '15/12', revenue: 1200 },
    { date: '16/12', revenue: 640 },
  ]
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            {' '}
            Receita no periodo
          </CardTitle>
          <CardDescription> Receita diária no periodo </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}

            <XAxis dataKey="date" tickLine={false} axisLine={false} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />

            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
