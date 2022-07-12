import { Alert, Snackbar } from "@mui/material";

import React from "react";
import { useMessages } from "./useMessages";

export const Messages: React.FC = () => {
  const { messages, closeMessage } = useMessages();

  return (
    <>
      {messages.map((messageItem) => {
        const { isOpen, id, severity, message } = messageItem;
        return (
          <Snackbar
            key={id}
            open={isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            onClose={() => {
              closeMessage(id);
            }}
          >
            <Alert severity={severity}>{message}</Alert>
          </Snackbar>
        );
      })}
    </>
  );
};
