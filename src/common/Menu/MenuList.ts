export interface MenuItem {
    label: string;
    route: string;
}
export const MENU: MenuItem[] = [
    { label: 'Home', route: '' },
    {
        label: 'Project Gallery',
        route: 'projectGallery',
    },
    {
        label: 'Our Team',
        route: 'team',
    },
    {
        label: 'About XYS',
        route: 'about',
    },
    {
        label: 'Privacy & Terms',
        route: 'privacy',
    },
];
