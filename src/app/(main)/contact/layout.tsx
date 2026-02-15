import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Precision Data',
    description: 'Get in touch with Precision Data Strategies. Contact our team for AI automation solutions and expert consulting.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
