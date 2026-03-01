"use client";

import { motion } from 'framer-motion';
import { Users, Building2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Reveal } from '@/components/motion/Reveal';

export function PartnersSection() {
    const plans = [
        {
            title: "Referral Partner",
            desc: "Earn commissions by referring restaurants.",
            bullets: ["High commission rates", "Dedicated support", "Marketing materials"],
            icon: Users,
            cta: "Become a Partner",
            color: "from-glow-purple/20 to-glow-purple/5",
            iconColor: "text-glow-purple",
        },
        {
            title: "Reseller Partner",
            desc: "Sell DineQ as part of your service.",
            bullets: ["White-label options", "Volume discounts", "API integrations"],
            icon: Building2,
            cta: "Apply to Resell",
            color: "from-glow-blue/20 to-glow-blue/5",
            iconColor: "text-glow-blue",
        }
    ];

    return (
        <section className="py-24 bg-background w-full">
            <div className="container mx-auto px-6 max-w-6xl">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[32px] font-semibold tracking-tight text-white mb-4">
                            Grow with DineQ
                        </h2>
                        <p className="text-[#A1A1AA] max-w-2xl mx-auto text-[16px] mb-8">
                            Join our ecosystem and earn by helping restaurants modernize their service.
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, i) => (
                        <Reveal key={plan.title} width="100%" delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.01 }}
                                className={`p-8 rounded-2xl border border-white/10 bg-card flex flex-col h-full transition-all duration-500 premium-card-hover relative overflow-hidden`}
                            >
                                <div className={`absolute top-0 right-0 p-12 -z-10 opacity-5 rotate-12 ${plan.iconColor}`}>
                                    <plan.icon className="w-32 h-32 fill-current" />
                                </div>
                                <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${plan.iconColor} shadow-lg`}>
                                    <plan.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>
                                <p className="text-[#A1A1AA] mb-8 leading-relaxed text-sm h-10">
                                    {plan.desc}
                                </p>
                                <div className="space-y-4 mb-10 flex-1">
                                    {plan.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <CheckCircle className={`w-5 h-5 shrink-0 ${plan.iconColor}`} />
                                            <span className="text-[#A1A1AA] text-sm">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button asChild size="lg" className="w-full h-14 bg-white text-black hover:bg-white/90 font-bold text-[16px] rounded-xl shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]">
                                    <Link href="/demo">
                                        {plan.cta}
                                    </Link>
                                </Button>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
