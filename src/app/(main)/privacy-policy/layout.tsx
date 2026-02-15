import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Precision Data',
    description: 'Read our privacy policy to understand how Precision Data Strategies collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
