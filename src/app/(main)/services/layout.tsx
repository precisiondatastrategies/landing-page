import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Precision Data',
    description: 'Comprehensive AI automation tools designed to streamline your operations and boost growth.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
