import {containerBaseProps} from "../utils/prop.ts";

const ThreeInputsGridContainer = ({ children }: containerBaseProps) => {
  return <div className="grid grid-cols-3 gap-3 w-full">{children}</div>;
};

export default ThreeInputsGridContainer;
