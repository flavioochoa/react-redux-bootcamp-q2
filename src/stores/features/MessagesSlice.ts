import {
  MessagesState,
  ToastMessage,
} from "../../components/Common/Messages/MessageInterfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { findIndexById } from "../../utils/utils";
import { postOrder } from "./CartSlice";
import { successToast } from "../../components/Common/Messages/MessageUtils";
import { v4 as uuidv4 } from "uuid";

const initialState: MessagesState = {
  messages: [],
};

export const messagesReducer = createSlice({
  name: "messagesReducer",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ToastMessage>) => {
      state.messages.push({ ...action.payload, id: uuidv4() });
    },
    remove: (state, action: PayloadAction<string>) => {
      const { messages } = state;
      const { payload: id } = action;
      const index = findIndexById(messages, id);

      if (index !== -1) {
        messages.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.fulfilled, (state, action) => {
      const { message, order } = action.payload;
      const success = successToast(`${message} - ${order}`);
      state.messages.push({ ...success, id: uuidv4() });
    });
  },
});

export const { add, remove } = messagesReducer.actions;

export default messagesReducer.reducer;
