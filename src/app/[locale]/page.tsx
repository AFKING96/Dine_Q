import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PricingSection } from '@/components/sections/pricing-section';
import { LogoCloud3 } from '@/components/logo-cloud-3';

export default function Home() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden min-h-screen pt-28">
      <Hero />
      <div className="relative z-10 w-full overflow-hidden bg-background">
        <LogoCloud3 />
        <FeaturesSection />
        <PricingSection />
      </div>
    </div>
  );
}
