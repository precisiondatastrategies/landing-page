import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Precision Data',
    description: 'Learn about Precision Data Strategies and our mission to transform businesses through AI automation and data solutions.',
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
