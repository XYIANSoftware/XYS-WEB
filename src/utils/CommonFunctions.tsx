'use client';
import { useRouter } from 'next/navigation';

const CommonFunctions = () => {
    const currentRoute = window.location.pathname;
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        if (currentRoute !== to) {
            router.push(`/${to}`);
        } else {
            alert(`Already on page /${to}`);
        }
    };
    return { handleNavigateClick };
};

export default CommonFunctions;
