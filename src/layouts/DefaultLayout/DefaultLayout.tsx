import Header from '~/layouts/components/Header';

interface DefaultLayoutProps {
    Children: React.ComponentType;
}

function DefaultLayout({ Children }: DefaultLayoutProps) {
    return (
        <div>
            <Header />
            <main className="mt-16">
                <Children />
            </main>
        </div>
    );
}

export default DefaultLayout;
