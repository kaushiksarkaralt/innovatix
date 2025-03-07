import React from "react";

export const BlackSpotlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative -z-50 overflow-x-hidden h-full w-full bg-black">
      <div className="absolute -z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute -z-50 left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-xl"></div>
      {children}
    </div>
  );
};
