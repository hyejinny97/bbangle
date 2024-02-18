import { ReactNode } from 'react';

interface WrapperProps {
    title: string;
    children: ReactNode;
}

function Wrapper({ title, children }: WrapperProps) {
    return (
        <div className="py-4 w-[92%] m-auto flex flex-col gap-[10px]">
            <div className="text-sm font-medium text-zinc-600">{title}</div>
            <div className="flex flex-wrap gap-[10px]">{children}</div>
        </div>
    );
}

export default Wrapper;
