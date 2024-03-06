import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface attrPayload {
  attr: string;
  value: string;
}

interface BookingState {
  name: string;
  phone: string;
  email: string;
  country: string;
  subject: string;
  bodyPart:string;
  reference:string;
  anythingElse:string;
}

const initialState: BookingState = {
  name: "",
  phone: "",
  email: "",
  country: "",
  subject: "",
  bodyPart:"",
  reference:"",
  anythingElse:"",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    init(state) {
      return { ...initialState };
    },
    setAttr(state, action: PayloadAction<attrPayload>) {
      const { attr, value } = action.payload;
      return {
        ...state,
        [attr]: value,
      };
    },
  },
});

export const { init, setAttr } = bookingSlice.actions;
export default bookingSlice.reducer;
