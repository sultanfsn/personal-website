import { FC, ReactNode } from "react";
import { classNames } from "../others/className";

export const Container: FC<{ children: ReactNode;}> = ({
  children,
}) => {
  return (
    <div className="w-full max-w-[360px] max-h-[580px] rounded-2xl bg-blurry-white px-8 py-4 sm:p-8 md:max-w-[960px] md:p-10">
        {children}
    </div>
  );
};
