import { DefaultLayoutProps } from '~/layouts/DefaultLayout';

function Footer({ Children }: DefaultLayoutProps) {
    return (
        <div>
            <h1>Hello World, Footer Here!!!!</h1>
            <Children />
        </div>
    );
}

export default Footer;
