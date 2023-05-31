import React from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div className="flex md:flex-col flex-row self-start md:items-center md:gap-6 gap-4 lg:p-6 md:p-0 py-6">
      <img
        src={props.icon}
        alt="Feature Icon"
        width={88}
        height={88}
        className="md:w-22 md:h-22 w-14 h-14"
      />
      <div className="flex flex-col gap-2 xl:items-center md:text-center">
        <p className="md:text-display-xs text-body-xl font-semibold">
          {props.title}
        </p>
        <p className="md:text-body-md text-body-sm font-normal text-neutral-700">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
