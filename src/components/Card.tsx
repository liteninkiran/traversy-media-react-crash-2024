import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    bg?: string;
}

export const Card = ({children, bg = 'bg-gray-100'}: Props) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    );
}
