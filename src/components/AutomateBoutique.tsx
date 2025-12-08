"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Chart data
const clientGrowthData = [
    { month: 'Jul', clients: 0 },
    { month: 'Aug', clients: 0.3 },
    { month: 'Sept', clients: 0.2 },
    { month: 'Oct', clients: 0.8 },
    { month: 'Nov', clients: 2.8 },
    { month: 'Dec', clients: 3.2 },
]

const clientStatusData = [
    { name: 'Active', value: 2 },
    { name: 'Leads', value: 1 },
]

const stats = [
    { label: "Active Workflows", value: "12", change: "+3 this week" },
    { label: "Leads Captured", value: "847", change: "+124 this week" },
    { label: "Calls Handled", value: "1,234", change: "+89 this week" },
    { label: "Appointments", value: "156", change: "+23 this week" },
]

export default function AutomateBoutique() {
    return (
        <section id="platform" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Automate Boutique
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your AI Automation Hub
                    </p>
                </motion.div>

                {/* Mac Desktop Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Mac Window Frame */}
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                        {/* Mac Title Bar */}
                        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <p className="text-sm font-medium text-gray-700">Automate Boutique</p>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="bg-gray-50 p-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Automate Boutique</h3>
                                <p className="text-gray-600">Your AI Automation Hub</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                        <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                        <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Charts Grid - Left side wider */}
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                                {/* Client Growth Chart - Takes 3 columns (60%) */}
                                <div className="bg-white rounded-xl p-6 border border-gray-200 lg:col-span-3 animate-slide-in-left">
                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Client Growth</h4>
                                        <p className="text-sm text-gray-600">Total cumulative clients over the last 6 months</p>
                                    </div>
                                    <ResponsiveContainer width="100%" height={250}>
                                        <AreaChart data={clientGrowthData}>
                                            <defs>
                                                <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                            <XAxis
                                                dataKey="month"
                                                stroke="#9CA3AF"
                                                style={{ fontSize: '12px' }}
                                            />
                                            <YAxis
                                                stroke="#9CA3AF"
                                                style={{ fontSize: '12px' }}
                                                domain={[0, 4]}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: 'white',
                                                    border: '1px solid #E5E7EB',
                                                    borderRadius: '8px',
                                                    fontSize: '14px'
                                                }}
                                            />
                                            <Area
                                                type="basis"
                                                dataKey="clients"
                                                stroke="#3B82F6"
                                                strokeWidth={2}
                                                fill="url(#colorClients)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Client Status Chart - Takes 2 columns (40%) */}
                                <div className="bg-white rounded-xl p-6 border border-gray-200 lg:col-span-2 animate-slide-in-right">
                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Client Status</h4>
                                        <p className="text-sm text-gray-600">Distribution of client stages</p>
                                    </div>
                                    <ResponsiveContainer width="100%" height={250}>
                                        <BarChart data={clientStatusData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                            <XAxis
                                                dataKey="name"
                                                stroke="#9CA3AF"
                                                style={{ fontSize: '12px' }}
                                            />
                                            <YAxis
                                                stroke="#9CA3AF"
                                                style={{ fontSize: '12px' }}
                                                domain={[0, 4]}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: 'white',
                                                    border: '1px solid #E5E7EB',
                                                    borderRadius: '8px',
                                                    fontSize: '14px'
                                                }}
                                            />
                                            <Bar
                                                dataKey="value"
                                                fill="#3B82F6"
                                                radius={[8, 8, 0, 0]}
                                            >
                                                {/* Different colors for each bar */}
                                                {clientStatusData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3B82F6' : '#8B5CF6'} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                Real-time analytics, workflow management, and AI agent controls
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                   <Link href="https://www.automateboutique.app/" target="_blank" rel="noopener noreferrer">
                       <button className="px-8 py-3 font-semibold rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-200 hover:shadow-lg">
                        Explore the Platform
                    </button>
                   </Link>
                </motion.div>
            </div>
        </section>
    )
}
