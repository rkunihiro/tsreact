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
