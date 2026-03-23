import { Header } from "@/components/layout/header";
type MainLayoutProps = {
    children?: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <main id="top" className="mx-auto max-w-328 pb-10">
                {children}
            </main>
        </>
    );
}
