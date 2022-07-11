interface SidebarProps {
    className?: string;
}
function Sidebar({ className }: SidebarProps) {
    return <div className={className}>Sidebar</div>;
}

export default Sidebar;
