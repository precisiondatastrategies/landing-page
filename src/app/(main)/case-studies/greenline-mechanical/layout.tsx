import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Greenline Mechanical Case Study | Precision Data',
    description: 'How AI Deployment Across a PE Portfolio Company Drove $1.8M in Annual EBITDA Improvement in Under 6 Months.',
};

export default function CaseStudyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}