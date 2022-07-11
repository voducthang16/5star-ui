interface DefaultLayoutProps {
    Children: React.ComponentType;
}
function Footer({ Children }: DefaultLayoutProps) {
    return (
        <div>
            <h1>Hello World, Footer Here!!!!</h1>
            <Children />
        </div>
    );
}

export default Footer;
