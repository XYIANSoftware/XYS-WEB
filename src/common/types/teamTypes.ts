export interface MemberDetail {
    id: number;
    name: string;
    imageSrc: string;
    position: string;
    bio: string;
}
export interface AboutUsModel {
    id: number;
    text: string;
    type: 'primary' | 'secondary';
}
