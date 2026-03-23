type Props = {
    children?: React.ReactNode;
};

export async function MainLayout({ children }: Props) {
    return <div className="container">{children}</div>;
}
