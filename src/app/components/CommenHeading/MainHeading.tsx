import React from "react";

interface MainHeadingProps {
  title: string;
  white?: boolean;
}

const MainHeading = ({
  title,
  white = false,
}: MainHeadingProps) => {
  return (
    <h2
      className={`lg:text-4xl text-2xl font-bold font-financierDisplay ${
        white ? "text-white" : "text-primary"
      }`}
    >
      {title}
    </h2>
  );
};

export default MainHeading;