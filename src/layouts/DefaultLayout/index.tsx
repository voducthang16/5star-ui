import Header from '../components/Header';

export interface DefaultLayoutProps {
    Children: React.ComponentType;
}

function DefaultLayout({ Children }: DefaultLayoutProps) {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <Children />
            </main>
        </div>
    );
}

export default DefaultLayout;
