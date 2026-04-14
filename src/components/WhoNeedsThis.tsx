"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PinnedScrollSections = () => {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        let ScrollTriggerModule: any = null;

        const loadGSAP = async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');

            ScrollTriggerModule = ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            const sections = sectionsRef.current;

            sections.forEach((section, index) => {
                if (!section || index === sections.length - 1) return;

                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    onLeave: () => { gsap.set(section, { autoAlpha: 0 }); },
                    onEnterBack: () => { gsap.set(section, { autoAlpha: 1 }); }
                });

                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                    scale: 0.9,
                    ease: 'none'
                });
            });
        };

        loadGSAP();

        return () => {
            if (ScrollTriggerModule) {
                ScrollTriggerModule.getAll().forEach((trigger: any) => trigger.kill());
            }
        };
    }, []);

    const sections = [
        {
            title: 'Mid-Market PE Firms',
            subtitle: 'Primary Target',
            description: 'Firms with $500M–$5B AUM and 5–30 portfolio companies. You have the mandate to drive AI value creation but no internal implementation team. We are your execution arm.',
            features: ['Portfolio-wide AI deployment', 'EBITDA impact reporting', 'Operating partner dashboard'],
            bgColor: 'bg-gradient-to-br from-slate-900 to-blue-950',
            textColor: 'text-white',
            imageSrc: '/industries/am.jpg',
            imageAlt: 'Private equity operating partner reviewing AI performance dashboard'
        },
        {
            title: 'Upper Mid-Market Funds',
            subtitle: '$5B–$100B AUM',
            description: 'You have a Technology Operating Partner and a value creation mandate. We integrate with your existing team as the remote AI implementation partner your strategy requires.',
            features: ['Plug into existing value creation teams', 'Multi-portfolio deployment playbooks', 'Investment committee-ready reporting'],
            bgColor: 'bg-green-200',
            textColor: 'text-slate-900',
            imageSrc: '/industries/real.png',
            imageAlt: 'Upper mid-market PE fund value creation team'
        },
        {
            title: 'Service Industry Portfolios',
            subtitle: 'Highest ROI Vertical',
            description: 'HVAC, plumbing, pest control, home services, healthcare services — these portfolio companies bleed revenue through missed calls and manual scheduling. We fix that in weeks, not months.',
            features: ['AI voice agents replace answering services', 'Automated scheduling & dispatch', '$1M+ EBITDA impact per company'],
            bgColor: 'bg-gradient-to-br from-purple-900 to-indigo-900',
            textColor: 'text-white',
            imageSrc: '/industries/plumbers.png',
            imageAlt: 'Service industry portfolio company AI deployment'
        },
        {
            title: 'PE Operating Partners',
            subtitle: 'Your Direct Buyer',
            description: 'You were hired to deploy AI across the portfolio. The Big 4 quoted you $300K–$500K per company and a 6-month timeline. We deliver a working AI system in 4 weeks at a fraction of the cost.',
            features: ['AI Readiness Assessment in 30-45 days', 'Implementation sprint in 8–12 weeks', 'One partner, entire portfolio'],
            bgColor: 'bg-yellow-200',
            textColor: 'text-slate-900',
            imageSrc: '/industries/home_service.png',
            imageAlt: 'PE operating partner AI deployment workflow'
        }
    ];

    return (
        <div className='py-32'>
            <div className="flex-none text-center space-y-3 py-10">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Who we work with</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                    Built for PE firms that cannot afford to leave EBITDA on the table
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                    From mid-market funds to upper mid-market platforms — we deploy AI across your portfolio companies and measure everything in the language your LPs speak.
                </p>
            </div>

            <div className="relative">
                {sections.map((section, index) => (
                    <section
                        key={section.title}
                        ref={el => { sectionsRef.current[index] = el; }}
                        className="relative flex sm:h-screen items-center justify-center p-6"
                        style={{ zIndex: index + 1 }}
                    >
                        <div className={`relative flex h-full w-full sm:px-10 items-center justify-center rounded-3xl overflow-hidden ${section.bgColor} ${section.textColor}`}>
                            <div className="grid h-full w-full items-center gap-10 p-10 sm:p-14 lg:grid-cols-2">
                                <div className="mx-auto flex w-full max-w-xl flex-col text-left">
                                    <div className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.4em] opacity-75">
                                        {section.subtitle}
                                    </div>
                                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm sm:text-xl opacity-90">
                                        {section.description}
                                    </p>
                                    <div className="mt-8 grid gap-3 text-sm sm:text-base">
                                        {section.features.map(feature => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-current" aria-hidden="true" />
                                                <span className="opacity-90">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative flex h-full w-full items-center justify-center">
                                    <div className="relative sm:block hidden aspect-square w-full max-w-sm sm:max-w-md lg:max-w-xl">
                                        <Image
                                            src={section.imageSrc}
                                            alt={section.imageAlt}
                                            fill
                                            sizes="(min-width: 1024px) 40vw, 70vw"
                                            className="object-contain drop-shadow-2xl"
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PinnedScrollSections;
