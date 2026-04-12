import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies | Precision Data Strategies',
    description: 'Real-world AI deployment results for PE-backed service companies. EBITDA impact, exit valuation math, and implementation timelines.',
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
