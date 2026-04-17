import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Deployment Case Study: $1.8M EBITDA Impact | Precision Data Strategies',
    description: 'Illustrative example: How PDS deployed AI across a $48M PE-backed HVAC platform — adding $1.78M in annualized EBITDA and $15.3M to the projected exit valuation.',
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
