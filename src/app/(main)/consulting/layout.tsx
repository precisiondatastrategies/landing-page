import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Consulting Services | Precision Data',
    description: 'Expert AI consulting services to help your business succeed. Strategic planning, operational excellence, and digital transformation.',
};

export default function ConsultingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
