"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { QrCode } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 md:pt-48 pb-20 md:pb-32 flex items-center min-h-[90vh]">
            {/* Background: Radial gradient subtle, soft purple glow center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_50%)] -z-20" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left side: Content */}
                    <div className="flex flex-col items-start text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-4xl md:text-[48px] font-bold text-white mb-6 leading-tight"
                        >
                            Create Your Digital Menu in 60 Seconds
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-[16px] text-[#A1A1AA] mb-10 max-w-lg leading-relaxed"
                        >
                            Generate a smart QR menu, update items instantly, and track performance in real time.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary-hover rounded-xl px-8 py-3 font-semibold text-white h-auto">
                                <Link href="/register">Start Free Trial</Link>
                            </Button>

                            <Button asChild variant="outline" className="w-full sm:w-auto border border-white/10 hover:bg-white/5 rounded-xl px-8 py-3 font-semibold text-white h-auto bg-transparent">
                                <Link href="/demo">Watch Demo</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right side: Premium 3D Mockup */}
                    <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0 lg:h-[600px]" style={{ perspective: '1200px' }}>

                        {/* Background subtle radial glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                            <div className="w-[300px] h-[500px] bg-[#7C3AED] opacity-20 blur-[60px] rounded-full" />
                        </div>

                        {/* Soft shadow below device */}
                        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-[#7C3AED]/20 blur-[30px] rounded-full pointer-events-none" />

                        {/* SVG Gradient Definition for QR Code */}
                        <svg width="0" height="0" className="absolute">
                            <linearGradient id="qr-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop stopColor="#7C3AED" offset="0%" />
                                <stop stopColor="#8B5CF6" offset="100%" />
                            </linearGradient>
                        </svg>

                        <motion.div
                            initial={{ opacity: 0, y: 20, rotateX: 6, rotateY: -8 }}
                            animate={{
                                opacity: 1,
                                y: [0, -8, 0],
                                rotateX: 6,
                                rotateY: -8
                            }}
                            transition={{
                                opacity: { duration: 0.8 },
                                y: { duration: 4, ease: "easeInOut", repeat: Infinity }
                            }}
                            className="relative w-[300px] h-[600px] rounded-[3.5rem] border-[4px] border-[#27272a] bg-[#18181b] shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.05)] z-10"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Inner Screen */}
                            <div className="absolute inset-[4px] rounded-[3rem] bg-[#0a0a0f] overflow-hidden border border-white/5 flex flex-col items-center pt-14 pb-6 px-5 h-[calc(100%-8px)]">

                                {/* Device Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#18181b] rounded-b-3xl z-20 shadow-sm flex items-center justify-center">
                                    <div className="w-12 h-1.5 bg-background rounded-full opacity-50" />
                                </div>

                                {/* Subtle screen glow pulse */}
                                <motion.div
                                    animate={{ opacity: [0.03, 0.1, 0.03] }}
                                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                                    className="absolute inset-0 bg-[#7C3AED] pointer-events-none"
                                />

                                {/* Screen Content Container */}
                                <div className="relative z-10 w-full h-full flex flex-col items-center">

                                    {/* Top: Minimal QR Icon */}
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-sm mt-4">
                                        <QrCode className="w-6 h-6 text-[#7C3AED]" strokeWidth={1.5} />
                                    </div>

                                    {/* Middle: Gradient QR Code Rendering */}
                                    <div className="w-48 h-48 rounded-[2rem] bg-[#111827] border border-white/5 p-5 flex flex-col items-center justify-center mb-12 shadow-lg relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#8B5CF6]/10" />
                                        <QrCode className="w-full h-full" style={{ stroke: "url(#qr-gradient)" }} strokeWidth={1} />
                                    </div>

                                    {/* Bottom: Minimal Menu UI Preview (3 Cards) */}
                                    <div className="w-full space-y-3 flex-1 flex flex-col justify-end pb-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-full h-[60px] rounded-2xl bg-[#111827] border border-white/5 flex items-center p-3">
                                                <div className="w-10 h-10 rounded-[10px] bg-white/5 mr-4 shrink-0" />
                                                <div className="flex-1 space-y-2">
                                                    <div className="w-3/4 h-2 rounded-full bg-white/10" />
                                                    <div className="w-1/2 h-2 rounded-full bg-white/5" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Edge Reflections for 3D realism */}
                            <div className="absolute inset-0 rounded-[3.5rem] border-l border-white/10 pointer-events-none" />
                            <div className="absolute inset-0 rounded-[3.5rem] border-r border-black/50 pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
