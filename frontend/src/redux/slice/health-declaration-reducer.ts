import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { healthDeclarationBoxs } from "../../utils/constants";

interface attrPayload {
  attr: string;
  value: string | string[] | File[] | boolean;
}

interface BookingState {
  name: string;
  phone: string;
  email: string;
  address: string;
  id: string;
  date1: string;
  checkboxes: boolean[];
}

const initialState: BookingState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  id: "",
  date1: "",
  checkboxes: new Array(healthDeclarationBoxs.length).fill(false),
};

const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {
    init() {
      return { ...initialState };
    },
    setAttr(state, action: PayloadAction<attrPayload>) {
      let { attr, value } = action.payload;
      if (attr.includes("checkbox")) {
        const index: number = Number.parseInt(attr.split("_")[2]);
        console.log(attr+ "->" + index);

        state.checkboxes[index] = value as boolean;
        return;
      }
      return {
        ...state,
        [attr]: value,
      };
    },
  },
});

export const { init, setAttr } = healthSlice.actions;
export default healthSlice.reducer;
