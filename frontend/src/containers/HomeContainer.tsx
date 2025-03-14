import {containerBaseProps} from "../utils/prop.ts";

export const HomeContainer = ({ children }: containerBaseProps) => {
  return (
    <div className="relative z-auto bg-white">
        {children}
    </div>
  );
};
