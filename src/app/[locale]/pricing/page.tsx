"use client"

import { Shield, Users, Rocket } from "lucide-react"
import {
    PricingTable,
    PricingTableHeader,
    PricingTableBody,
    PricingTableRow,
    PricingTableHead,
    PricingTableCell,
    PricingTablePlan,
    FeatureItem,
} from "@/components/ui/pricing-table"
import { Button } from "@/components/ui/button"

const FEATURES: FeatureItem[] = [
    { label: "Branches", values: ["1", "Up to 3", "Unlimited"] },
    { label: "QR Generation", values: [true, true, true] },
    { label: "Real-time Editing", values: [true, true, true] },
    { label: "Analytics", values: ["Basic", "Advanced", "Advanced+"] },
    { label: "Custom Branding", values: [false, true, true] },
    { label: "WhatsApp Orders", values: [false, true, true] },
    { label: "Priority Support", values: [false, true, true] },
    { label: "White Label", values: [false, false, true] },
    { label: "API Access", values: [false, false, true] },
]

export default function PricingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden px-4 py-24">

            {/* Keep existing particle or background system */}
            <div className="relative mx-auto max-w-6xl text-center mb-16">
                <h1 className="text-4xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                    Simple, transparent pricing
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                    Choose the plan that best fits your restaurant.
                </p>
            </div>

            <PricingTable className="mx-auto max-w-6xl">
                <PricingTableHeader>
                    <PricingTableRow>
                        <th />
                        <th className="p-2 z-10 w-1/4">
                            <PricingTablePlan
                                name="Starter"
                                badge="For Small Cafes"
                                price="499 EGP"
                                icon={Shield}
                                className="bg-card/50 backdrop-blur-md border-white/5 shadow-2xl"
                            >
                                <Button variant="outline" className="w-full rounded-[14px] bg-transparent border-white/10 hover:bg-white/5 active:scale-95 transition-all text-white font-semibold">
                                    Get Started
                                </Button>
                            </PricingTablePlan>
                        </th>

                        <th className="p-2 z-20 w-1/4">
                            <PricingTablePlan
                                name="Pro"
                                badge="Most Popular"
                                price="999 EGP"
                                icon={Users}
                                className="bg-card/80 backdrop-blur-xl border-primary/50 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] after:pointer-events-none after:absolute after:-inset-[1px] after:rounded-[17px] after:bg-gradient-to-b after:from-primary/40 after:to-transparent after:-z-10 scale-[1.02]"
                            >
                                <Button className="w-full rounded-[14px] bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all font-semibold shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                                    Get Started
                                </Button>
                            </PricingTablePlan>
                        </th>

                        <th className="p-2 z-10 w-1/4">
                            <PricingTablePlan
                                name="Enterprise"
                                badge="For Large Chains"
                                price="1999 EGP"
                                icon={Rocket}
                                className="bg-card/50 backdrop-blur-md border-white/5 shadow-2xl"
                            >
                                <Button variant="outline" className="w-full rounded-[14px] bg-transparent border-white/10 hover:bg-white/5 active:scale-95 transition-all text-white font-semibold">
                                    Get Started
                                </Button>
                            </PricingTablePlan>
                        </th>
                    </PricingTableRow>
                </PricingTableHeader>

                <PricingTableBody>
                    {FEATURES.map((feature, index) => (
                        <PricingTableRow key={index} className="hover:bg-white/[0.02] border-white/10 transition-colors">
                            <PricingTableHead className="text-white font-medium pl-6 text-base">{feature.label}</PricingTableHead>
                            {feature.values.map((value, i) => (
                                <PricingTableCell key={i} className="text-muted-foreground">
                                    {value}
                                </PricingTableCell>
                            ))}
                        </PricingTableRow>
                    ))}
                </PricingTableBody>
            </PricingTable>
        </div>
    )
}

