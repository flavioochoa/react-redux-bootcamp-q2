import { AlertColor } from "@mui/material";

export interface ToastMessage {
  message: string;
  severity: AlertColor;
  isOpen: boolean;
}

export interface ToastMessages extends ToastMessage {
  id: string;
}

export interface MessagesState {
  messages: Array<ToastMessages>;
}
