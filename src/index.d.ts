interface SideNavlink extends React.HTMLProps<HTMLAnchorElement> {
    text: string,
    icon: React.ReactNode,
    isSelected?: boolean
}