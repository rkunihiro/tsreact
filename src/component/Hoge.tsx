import React from "react";

export type Props = {
    message?: string;
};

export const Hoge: React.FC<Props> = ({ message }) => {
    return (
        <>
            <div>{message ?? "-"}</div>
        </>
    );
};

export function sum(a: number, b: number): number {
    return a + b;
}
