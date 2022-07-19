import "./MessageLink.css";

import { Links } from "../../../styles/components/Header.styles";
import { MessageLinkProps } from "./MessageLinkInterfaces";
import React from "react";

export const MessageLink: React.FC<MessageLinkProps> = ({
  message,
  path,
  linkLabel,
}) => {
  return (
    <div className="message-link-center message-link">
      <span>{message}</span>
      <Links to={path}>{linkLabel}</Links>
    </div>
  );
};
