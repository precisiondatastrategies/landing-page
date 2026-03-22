import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Private Equity & Institutional Services | Precision Data',
    description: 'We partner with private equity firms and mid-sized companies to drive measurable efficiency across portfolios through AI audits, custom automation, and strategic execution.',
};

export default function PrivateEquityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}