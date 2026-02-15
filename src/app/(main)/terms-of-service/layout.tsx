import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Precision Data',
    description: 'Read our terms of service to understand the rules and guidelines for using Precision Data Strategies services.',
};

export default function TermsOfServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
