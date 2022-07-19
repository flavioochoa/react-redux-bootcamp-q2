import { AlertColor } from "@mui/material";
import { ToastMessage } from "./MessageInterfaces";

export const getToast = (
  message: string,
  severity: AlertColor
): ToastMessage => {
  return { message, severity, isOpen: true };
};

export const errorToast = (message: string): ToastMessage => {
  return getToast(message, "error");
};

export const successToast = (message: string): ToastMessage => {
  return getToast(message, "success");
};
