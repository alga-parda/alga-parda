import React from "react";

export default function Main(props) {
    const { children } = props;
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}
