import { add, remove } from "../../../stores/features/MessagesSlice";
import { errorToast, successToast } from "./MessageUtils";

import { useAppState } from "../../../hooks/useAppState";

export const useMessages = () => {
  const { messagesState, dispatch } = useAppState();

  const addSuccessMessage = (message: string) => {
    dispatch(add(successToast(message)));
  };

  const addErrorMessage = (message: string) => {
    dispatch(add(errorToast(message)));
  };

  const closeMessage = (id: string) => {
    dispatch(remove(id));
  };

  return {
    messages: messagesState.messages,
    addSuccessMessage,
    addErrorMessage,
    closeMessage,
  };
};
