"use client";

import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, CreditCard, Users } from 'lucide-react';
import { AnimeNavBar } from '@/components/ui/anime-navbar';

export function SiteHeader() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const locale = useLocale();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', matchPath: `/${locale}` },
        { href: '/pricing', matchPath: `/${locale}/pricing` },
        { href: '/business', matchPath: `/${locale}/business` },
        { href: '/partners', matchPath: `/${locale}/partners` },
    ];

    // Helper mapping for translation keys
    const labels: Record<string, string> = {
        '/': t('home'),
        '/pricing': t('pricing'),
        '/business': t('business'),
        '/partners': t('partners')
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'border-b border-white/10 bg-background/80 backdrop-blur-xl py-3'
                : 'border-b border-transparent bg-transparent py-5'
                }`}
        >
            <div className="flex items-center justify-between mx-auto px-6 max-w-7xl">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="font-bold text-2xl tracking-tighter text-glow-purple group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">DineQ</span>
                </Link>
                <nav className="hidden md:block relative z-10">
                    <AnimeNavBar
                        items={[
                            { name: labels['/'], url: '/', icon: Home },
                            { name: labels['/pricing'], url: '/pricing', icon: CreditCard },
                            { name: labels['/business'], url: '/business', icon: Briefcase },
                            { name: labels['/partners'], url: '/partners', icon: Users },
                        ]}
                        defaultActive={labels['/']}
                    />
                </nav>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <LanguageToggle />
                        <Button asChild className="bg-white text-black hover:bg-white/90 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98]">
                            <Link href="/demo">{t('demo')}</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.matchPath || pathname === link.matchPath + '/';
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href as never}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/60'
                                            }`}
                                    >
                                        {labels[link.href]}
                                    </Link>
                                );
                            })}
                            <div className="h-px bg-white/5 w-full my-2" />
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-foreground/40">{t('language')}</span>
                                <LanguageToggle />
                            </div>
                            <Button asChild className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]">
                                <Link href="/demo" onClick={() => setIsOpen(false)}>{t('demo')}</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
