import React from "react";

const MainHeading = ({ title }: { title: string }) => {
    return (
        <h2 className="text-4xl font-bold font-financierDisplay text-primary ">{title}</h2>
    );
};

export default MainHeading;