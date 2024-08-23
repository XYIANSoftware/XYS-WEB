import { MobileMenu } from '@/common/Menu/MobileMenu';
import { NextPage } from 'next';

interface Props {}

const Mission: NextPage<Props> = ({}) => {
    return (
        <div>
            <MobileMenu />
            mission page
        </div>
    );
};

export default Mission;
