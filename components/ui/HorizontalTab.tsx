"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";

interface HorizontalTabProps {
  tabs: string[];
  children?: React.ReactNode;
  onClick?: () => void;
}
const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);

  const buttonClick = useCallback((i: number) => {
    setShouldOpenTab(i);

    onclick && onclick;
  }, []);
  return (
    <div className='container px-5 '>
      <div className='flex items-center justify-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            onClick={() => buttonClick(index)}
            key={index}
            className={cn(
              "border-gray flex  lg:h-[4rem] lg:w-[15rem] w-full items-center justify-center whitespace-nowrap border lg:px-6 px-1 py-3 text-center text-lg font-semibold uppercase  tracking-widest",
              index === 0 && "rounded-bl-2xl",
              index === tabs.length - 1 && "rounded-tr-2xl",
              shouldOpenTab === index && "bg-orange text-dark"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* content */}
      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? "block" : "hidden")}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;
