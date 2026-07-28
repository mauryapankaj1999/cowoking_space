import React from "react";

const MainHeading = ({ title }: { title: string }) => {
    return (
        <h2 className="text-3xl font-bold  text-gray-800 dark:text-white">{title}</h2>
    );
};

export default MainHeading;