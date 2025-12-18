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
                if (!section || index === sections.length - 1) {
                    return;
                }

                // Pin the panel while keeping previous ones hidden on scroll.
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    onLeave: () => {
                        gsap.set(section, { autoAlpha: 0 });
                    },
                    onEnterBack: () => {
                        gsap.set(section, { autoAlpha: 1 });
                    }
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
            title: 'Real Estate',
            subtitle: 'Property Management',
            description: 'Automate lead qualification, schedule property viewings, and handle tenant inquiries 24/7 with intelligent AI agents.',
            features: ['Lead capture & qualification', 'Automated scheduling', 'Property info delivery'],
            bgColor: 'bg-gradient-to-br from-purple-900 to-indigo-900',
            textColor: 'text-white',
            imageSrc: '/industries/real.png',
            imageAlt: 'Illustrated smart home dashboard for real estate teams'
        },
        {
            title: 'Law Firms',
            subtitle: 'Legal Services',
            description: 'Streamline client intake, schedule consultations, and provide instant case status updates through conversational AI.',
            features: ['Client intake automation', 'Appointment booking', 'Case status updates'],
            bgColor: 'bg-green-200',
            textColor: 'text-slate-900',
            imageSrc: '/industries/law_firm1.png',
            imageAlt: 'Digital legal operations workspace illustration'
        },
        {
            title: 'Plumbers',
            subtitle: 'Home Services',
            description: 'Never miss an emergency call. AI agents handle service requests, schedule appointments, and send technician details instantly.',
            features: ['24/7 emergency response', 'Smart scheduling', 'Service tracking'],
            bgColor: 'bg-gradient-to-br from-purple-900 to-indigo-900',
            textColor: 'text-white',
            imageSrc: '/industries/plumbers.png',
            imageAlt: 'AI routing urgent work order for plumbing teams'
        },
        {
            title: 'All SMBs',
            subtitle: 'Small & Medium Business',
            description: 'Scale your customer service without scaling costs. Handle inquiries, bookings, and support across all channels seamlessly.',
            features: ['Omnichannel support', 'Cost-effective scaling', 'Custom automation'],
            bgColor: 'bg-yellow-200',
            textColor: 'text-slate-900',
            imageSrc: '/industries/home_service.png',
            imageAlt: 'Collaborative workspace showing unified customer support for SMBs'
        }
    ];

    return (
        <div className='py-32'>
            <div className="flex-none text-center space-y-3 py-10">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Who needs this?</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                    Built for teams that cannot afford to miss a lead
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                    Scroll to see how the platform adapts to different industries while keeping every interaction on brand.
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