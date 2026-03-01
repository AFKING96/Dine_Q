"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Starter",
            description: "Perfect for small cafes and food trucks.",
            monthlyPrice: 499,
            yearlyPrice: 4990,
            features: ["1 Branch", "Instant QR Generation", "Real-Time Menu Editing", "Basic Analytics"],
            isPopular: false
        },
        {
            name: "Pro",
            description: "Ideal for growing restaurants.",
            monthlyPrice: 999,
            yearlyPrice: 9990,
            features: ["Up to 3 Branches", "Advanced Analytics", "Custom Branding", "WhatsApp Orders", "Priority Support"],
            isPopular: true
        },
        {
            name: "Enterprise",
            description: "For large restaurant chains.",
            monthlyPrice: 1999,
            yearlyPrice: 19990,
            features: ["Unlimited Branches", "Custom Integrations", "Dedicated Account Manager", "White-label Solution", "API Access"],
            isPopular: false
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[32px] font-semibold tracking-tight text-white mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-[#A1A1AA] max-w-2xl mx-auto text-[16px] mb-8">
                        Choose the plan that best fits your business needs.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm ${!isYearly ? "text-white font-semibold" : "text-[#A1A1AA]"}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        >
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`} />
                        </button>
                        <span className={`text-sm ${isYearly ? "text-white font-semibold" : "text-[#A1A1AA]"}`}>Yearly</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-card rounded-2xl p-8 flex flex-col 
                            ${plan.isPopular ? "border-none ring-2 ring-primary md:scale-[1.03] z-10" : "border border-white/10"}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-[#A1A1AA] text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline text-white">
                                    <span className="text-4xl font-extrabold">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                                    <span className="text-[#A1A1AA] ml-1">EGP/{isYearly ? "yr" : "mo"}</span>
                                </div>
                            </div>

                            <ul className="mb-8 flex-1 space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-[#A1A1AA] text-sm">
                                        <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full rounded-xl bg-primary hover:bg-primary-hover text-white py-6 font-semibold">
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
