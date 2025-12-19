"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Star, ArrowUpRight, CheckCircle2, LayoutGrid, Users, CalendarDays, Calendar, MessageSquare, FileText, Key, BookOpen, Settings } from "lucide-react"

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
        <section id="platform" className="py-24 bg-[linear-gradient(135deg,#FFFDE7_0%,#E0F7FA_50%,#E1F5FE_100%)] overflow-hidden relative">
            {/* Decorative Ripple Effect - Right Side */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none z-0">
                <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    <circle cx="400" cy="400" r="150" stroke="white" strokeWidth="40" />
                    <circle cx="400" cy="400" r="250" stroke="white" strokeWidth="40" />
                    <circle cx="400" cy="400" r="350" stroke="white" strokeWidth="40" />
                </svg>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-left mb-16 max-w-4xl"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                        The Complete AI <br/> Operating System
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
                        Empower your business with 24/7 AI Voice Agents, instant lead qualification, and a built-in CRM. 
                        From automated workflows to multi-channel messaging, Automate Boutique handles the busy work so you can focus on growth.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-start gap-8">
                        <Link href="https://www.automateboutique.app/" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 bg-[#FFB088] hover:bg-[#FF9E6D] text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                                Explore the Platform <ArrowUpRight size={20} />
                            </button>
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                         <Image 
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                                            alt="User" 
                                            fill
                                            className="object-cover"
                                         />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900 text-xl leading-none mb-1">38,482</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">Happy Users</span>
                                    <div className="flex text-gray-900 text-xs items-center font-bold">
                                        <Star size={12} fill="black" className="mr-1"/> 4.8/5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mac Desktop Preview Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Floating Card - Right Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute -right-4 md:-right-12 top-1/3 z-20 bg-white p-6 rounded-2xl shadow-2xl max-w-xs hidden lg:block"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                                <div className="w-5 h-5 bg-pink-400 rounded-sm" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">AI Voice Agent</h4>
                                <p className="text-xs text-gray-500">(Inbound Call)</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Calls Handled</span>
                                <span className="font-bold text-gray-900">43</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Appointments</span>
                                <span className="font-bold text-gray-900">16</span>
                            </div>
                            <div className="flex -space-x-2 mt-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                         <Image 
                                            src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                                            alt="User" 
                                            fill
                                            className="object-cover"
                                         />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Mac Window Frame */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden ring-8 ring-black/5 relative z-10"
                    >
                        {/* Mac Title Bar */}
                        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                            </div>
                            <div className="flex-1 text-center flex justify-center items-center gap-2 text-gray-400 text-xs">
                                <div className="bg-gray-200 px-3 py-1 rounded-md flex items-center gap-2 w-64 justify-center">
                                     <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                     <span>automateboutique.app</span>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="bg-gray-50 p-8 min-h-[600px]">
                            <div className="flex flex-col md:flex-row gap-8 h-full">
                                {/* Sidebar (Visual Only) */}
                                <div className="w-48 hidden md:block space-y-6">
                                    <div className="flex items-center gap-2 text-blue-600 font-bold mb-8">
                                        <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
                                        <span>Trim.</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="px-3 py-2 bg-cyan-400 text-white rounded-lg text-sm font-medium flex items-center gap-3">
                                            <LayoutGrid size={16} /> Overview
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <Users size={16} /> Clients
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <CalendarDays size={16} /> Events
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <Calendar size={16} /> Calendar
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <MessageSquare size={16} /> Channels
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <FileText size={16} /> Contracts
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <Key size={16} /> API Keys
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <BookOpen size={16} /> Documentation
                                        </div>
                                        <div className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg flex items-center gap-3">
                                            <Settings size={16} /> Settings
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900">Home</h3>
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                            <div className="w-8 h-8 rounded-full bg-cyan-400 text-white flex items-center justify-center">+</div>
                                        </div>
                                    </div>

                                    {/* Stats Grid (Your Data) */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                                                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                                <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Charts Grid (Your Data) */}
                                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                                        {/* Client Growth Chart */}
                                        <div className="bg-white rounded-xl p-6 border border-gray-100 lg:col-span-3 shadow-sm">
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-900">Client Growth</h4>
                                            </div>
                                            <ResponsiveContainer width="100%" height={200}>
                                                <AreaChart data={clientGrowthData}>
                                                    <defs>
                                                        <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                                                    <XAxis dataKey="month" stroke="#9CA3AF" style={{ fontSize: '10px' }} tickLine={false} axisLine={false} />
                                                    <YAxis stroke="#9CA3AF" style={{ fontSize: '10px' }} domain={[0, 4]} tickLine={false} axisLine={false} />
                                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                                    <Area type="monotone" dataKey="clients" stroke="#3B82F6" strokeWidth={3} fill="url(#colorClients)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>

                                        {/* Client Status Chart */}
                                        <div className="bg-white rounded-xl p-6 border border-gray-100 lg:col-span-2 shadow-sm">
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-900">Client Status</h4>
                                            </div>
                                            <ResponsiveContainer width="100%" height={200}>
                                                <BarChart data={clientStatusData}>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                                                    <XAxis dataKey="name" stroke="#9CA3AF" style={{ fontSize: '10px' }} tickLine={false} axisLine={false} />
                                                    <YAxis stroke="#9CA3AF" style={{ fontSize: '10px' }} domain={[0, 4]} tickLine={false} axisLine={false} />
                                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                                        {clientStatusData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3B82F6' : '#8B5CF6'} />
                                                        ))}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
