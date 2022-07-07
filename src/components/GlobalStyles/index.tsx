import './GlobalStyles.scss';
import './Flex_Grid.scss';
interface GlobalStylesProps {
    Children: React.ComponentType;
}

function GlobalStyles({ Children }: GlobalStylesProps) {
    return <Children />;
}

export default GlobalStyles;
