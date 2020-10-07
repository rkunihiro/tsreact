import React, { useEffect, useState } from "react";

import { Hoge } from "~/component/Hoge";

export const App: React.FC = () => {
    const [message, setMessage] = useState("Hello");
    useEffect(() => {
        console.log(`App#useEffect`);
        return () => {
            console.log(`App#useEffect callback`);
        };
    });
    const onClick = () => {
        setMessage(new Date().toISOString());
    };
    return (
        <>
            <Hoge message={message} />
            <button onClick={onClick}>now</button>
        </>
    );
};
