"use client";

import { ChefHat, Coffee, Pizza, Sandwich, IceCream, CupSoda } from "lucide-react";

export function LogoCloud3() {
    const logos = [
        { name: "Restaurant One", icon: ChefHat },
        { name: "Cafe Two", icon: Coffee },
        { name: "Bistro Three", icon: Pizza },
        { name: "Diner Four", icon: Sandwich },
        { name: "Eatery Five", icon: IceCream },
        { name: "Lounge Six", icon: CupSoda },
    ];

    // Triple items for seamless marquee across ultra-wide screens
    const items = [...logos, ...logos, ...logos];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center mb-16">
                <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-white mb-4">
                    Powering Modern Restaurants Across Egypt & MENA
                </h2>
                <p className="text-[#A1A1AA] text-[16px]">
                    Used by growing cafes and restaurants
                </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden h-[160px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">

                <div className="absolute inset-0 w-full h-full flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex w-fit overflow-hidden">
                        <div
                            className="flex min-w-full shrink-0 animate-marquee-reverse items-center gap-[42px] hover:[animation-play-state:paused]"
                        >
                            {items.map((logo, idx) => (
                                <div key={idx} className="flex items-center gap-3 grayscale invert opacity-40 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    <logo.icon className="w-8 h-8 text-black" />
                                    <span className="font-bold text-xl tracking-tight text-black">{logo.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
