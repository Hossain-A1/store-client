"use client";
import { useCallback, useState } from "react";

interface HorizontalTabProps {
  tabs: string[];
}
const HorizontalTab: React.FC<HorizontalTabProps> = ({ tabs }) => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);

  const buttonClick = useCallback((i: number) => {
    setShouldOpenTab(i);

    onclick && onclick;
  }, []);
  return (
    <div>
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            onClick={() => buttonClick(index)}
            key={index}
            className={`border-gray flex h-[4rem] w-[15rem] items-center justify-center whitespace-nowrap border px-6 py-3 text-center text-lg font-semibold uppercase  tracking-widest',
              ${index === 0 && "rounded-bl-2xl"}
              ${index === tabs.length - 1 && "rounded-tr-2xl"},
              ${shouldOpenTab === index && "bg-violet text-slate-50"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTab;
