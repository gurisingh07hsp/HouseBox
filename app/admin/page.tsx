'use client'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  CalendarCheck,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

const stats = [
  { title: "Total Revenue", value: "$124,580", change: "+12.5%", up: true, icon: DollarSign, color: "bg-yellow-500/10 txt-main" },
  { title: "Total Bookings", value: "1,248", change: "+8.2%", up: true, icon: CalendarCheck, color: "bg-emerald-500/10 text-emerald-600" },
  { title: "Active Customers", value: "3,462", change: "+5.1%", up: true, icon: Users, color: "bg-blue-500/10 text-blue-600" },
  { title: "Tour Packages", value: "86", change: "-2.3%", up: false, icon: MapPin, color: "bg-purple-500/10 text-purple-600" },
];

const revenueData = [
  { month: "Jan", revenue: 18500 },
  { month: "Feb", revenue: 22300 },
  { month: "Mar", revenue: 19800 },
  { month: "Apr", revenue: 28400 },
  { month: "May", revenue: 32100 },
  { month: "Jun", revenue: 35800 },
  { month: "Jul", revenue: 29600 },
  { month: "Aug", revenue: 38200 },
  { month: "Sep", revenue: 34500 },
  { month: "Oct", revenue: 41200 },
  { month: "Nov", revenue: 37800 },
  { month: "Dec", revenue: 45600 },
];

const bookingsByDestination = [
  { destination: "Bali", bookings: 245 },
  { destination: "Paris", bookings: 198 },
  { destination: "Tokyo", bookings: 176 },
  { destination: "Maldives", bookings: 154 },
  { destination: "Dubai", bookings: 132 },
  { destination: "Rome", bookings: 118 },
];

const recentBookings = [
  { id: "BK-001", customer: "Sarah Johnson", destination: "Bali, Indonesia", date: "Mar 12, 2026", amount: "$2,450", status: "confirmed" },
  { id: "BK-002", customer: "Michael Chen", destination: "Paris, France", date: "Mar 11, 2026", amount: "$3,200", status: "pending" },
  { id: "BK-003", customer: "Emma Wilson", destination: "Tokyo, Japan", date: "Mar 10, 2026", amount: "$4,100", status: "confirmed" },
  { id: "BK-004", customer: "James Brown", destination: "Maldives", date: "Mar 09, 2026", amount: "$5,800", status: "cancelled" },
  { id: "BK-005", customer: "Lisa Anderson", destination: "Dubai, UAE", date: "Mar 08, 2026", amount: "$2,900", status: "confirmed" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  pending: "bg-amber-500/10 text-amber-600 border-amber-200",
  cancelled: "bg-red-500/10 text-red-600 border-destructive/20",
};
export default function Page() {
  return (
          <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Welcome back! Here's your travel agency overview.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="border border-gray-300 rounded-lg shadow">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? "text-emerald-600" : "text-destructive"}`}>
                  {stat.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 border border-gray-300 p-6 rounded-lg shadow">
          <div className="pb-2">
            <div className="text-base font-semibold">Revenue Overview</div>
          </div>
          <div>
            {/* <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(40, 96%, 56%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(40, 96%, 56%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3, 31.8%, 91.4%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215.4, 16.3%, 46.9%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(215.4, 16.3%, 46.9%)" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="hsl(40, 96%, 56%)" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer> */}
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 shadow">
          <div className="pb-2">
            <div className="text-base font-semibold">Top Destinations</div>
          </div>
          <div>
            {/* <ResponsiveContainer width="100%" height={280}>
              <BarChart data={bookingsByDestination} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3, 31.8%, 91.4%)" />
                <XAxis type="number" tick={{ fontSize: 11 }} stroke="hsl(215.4, 16.3%, 46.9%)" />
                <YAxis dataKey="destination" type="category" tick={{ fontSize: 11 }} width={60} stroke="hsl(215.4, 16.3%, 46.9%)" />
                <Tooltip />
                <Bar dataKey="bookings" fill="hsl(40, 96%, 56%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer> */}
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      {/* <div className="border border-gray-300 rounded-lg p-6 shadow">
        <div className="flex flex-row items-center justify-between pb-2">
          <div className="text-base font-semibold">Recent Bookings</div>
          <a href="/admin/bookings" className="text-sm txt-main hover:underline flex items-center gap-1">
            View All <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">ID</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden sm:table-cell">Destination</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium hidden md:table-cell">Date</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Amount</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-2 font-mono text-xs">{booking.id}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{booking.customer}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden sm:table-cell">{booking.destination}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{booking.date}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{booking.amount}</td>
                    <td className="py-3 px-2">
                      <span className={`text-xs p-1 rounded-lg capitalize ${statusColors[booking.status]}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
    // <Dashboard/>
  );
}