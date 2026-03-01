"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Coffee, Utensils, LayoutGrid, Hotel, Palmtree, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Reveal } from '@/components/motion/Reveal';

export default function BusinessPage() {
    const t = useTranslations('Index');

    const sectors = [
        {
            title: t('business_cafes_title'),
            problem: t('business_cafes_problem'),
            bullets: [t('business_cafes_b1'), t('business_cafes_b2'), t('business_cafes_b3')],
            icon: Coffee,
            color: "from-orange-500/20 to-orange-500/5",
            iconColor: "text-orange-500",
        },
        {
            title: t('business_restaurants_title'),
            problem: t('business_restaurants_problem'),
            bullets: [t('business_restaurants_b1'), t('business_restaurants_b2'), t('business_restaurants_b3')],
            icon: Utensils,
            color: "from-blue-500/20 to-blue-500/5",
            iconColor: "text-blue-500",
        },
        {
            title: t('business_foodcourts_title'),
            problem: t('business_foodcourts_problem'),
            bullets: [t('business_foodcourts_b1'), t('business_foodcourts_b2'), t('business_foodcourts_b3')],
            icon: LayoutGrid,
            color: "from-green-500/20 to-green-500/5",
            iconColor: "text-green-500",
        },
        {
            title: t('business_hotels_title'),
            problem: t('business_hotels_problem'),
            bullets: [t('business_hotels_b1'), t('business_hotels_b2'), t('business_hotels_b3')],
            icon: Hotel,
            color: "from-purple-500/20 to-purple-500/5",
            iconColor: "text-purple-500",
        },
        {
            title: t('business_beach_title'),
            problem: t('business_beach_problem'),
            bullets: [t('business_beach_b1'), t('business_beach_b2'), t('business_beach_b3')],
            icon: Palmtree,
            color: "from-cyan-500/20 to-cyan-500/5",
            iconColor: "text-cyan-500",
        }
    ];

    return (
        <div className="flex flex-col min-h-screen py-24 px-6 max-w-6xl mx-auto w-full">
            <Reveal width="100%">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Built to Scale Real Restaurant Operations.
                    </h2>
                    <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
                        Whether you manage a single location or a growing brand,
                        DineQ gives you centralized control across every branch.
                    </p>
                </div>
            </Reveal>

            <div className="space-y-10 mt-16 max-w-4xl mx-auto w-full">
                {sectors.map((sector) => (
                    <Reveal key={sector.title} width="100%">
                        <div
                            className="
                                relative
                                w-full
                                rounded-2xl
                                border border-white/10
                                bg-[#0f111a]
                                p-10
                                transition-all duration-300
                                hover:border-violet-500/40
                            "
                        >
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-violet-600/15 flex items-center justify-center text-violet-400">
                                        <sector.icon size={18} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {sector.title}
                                    </h3>
                                </div>

                                <p className="text-white/60 text-sm max-w-xl leading-relaxed">
                                    {sector.problem}
                                </p>

                                <ul className="space-y-3 pt-2">
                                    {sector.bullets.map(bullet => (
                                        <li key={bullet} className="flex items-center gap-2 text-sm text-white/70">
                                            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <button className="
                                    mt-6
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-lg
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-medium
                                    bg-white
                                    text-black
                                    hover:bg-white/90
                                    transition
                                ">
                                    <Link href="/demo">
                                        Request Demo
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
