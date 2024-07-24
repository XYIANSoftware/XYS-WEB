'use client';
import { useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';

export const MenuModel = () => {
    const router = useRouter();
    const menuModel: MenuItem[] = [
        {
            label: 'About',
            items: [
                { label: 'Mission', command: () => router.push('/mission') },
                { label: 'Company', command: () => router.push('/portfolio') },
                { label: 'Our Team', command: () => router.push('/team') },
            ],
        },
        {
            label: 'Services',
            items: [
                { label: 'Web Apps', command: () => router.push('/webApps') },
                {
                    label: 'Mobile Apps',
                    command: () => router.push('/mobileApps'),
                },
                { label: 'Software', command: () => router.push('/software') },
            ],
        },
        {
            label: 'Contact',
            items: [
                { label: 'Requests', command: () => router.push('/contact') },
                { label: 'Social', command: () => router.push('/social') },
                { label: 'Support', command: () => router.push('/support') },
            ],
        },
    ];

    return <Menu model={menuModel} />;
};
