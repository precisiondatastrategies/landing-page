import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | Precision Data',
    description: 'Learn about how Precision Data Strategies uses cookies and similar technologies on our website.',
};

export default function CookiePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
