"use client";


import {
    QrCode,
    FileEdit,
    Store,
    TrendingUp,
    Palette,
    MessageCircle
} from 'lucide-react';

export function FeaturesSection() {
    const features = [
        {
            title: "Instant QR Generation",
            icon: QrCode,
        },
        {
            title: "Real-Time Menu Editing",
            icon: FileEdit,
        },
        {
            title: "Multi-Branch Support",
            icon: Store,
        },
        {
            title: "Sales Analytics",
            icon: TrendingUp,
        },
        {
            title: "Custom Branding",
            icon: Palette,
        },
        {
            title: "WhatsApp Orders",
            icon: MessageCircle,
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-card border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 flex flex-col items-start"
                        >
                            <feature.icon className="w-6 h-6 text-primary mb-4" />
                            <h3 className="text-[20px] font-semibold text-white">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
