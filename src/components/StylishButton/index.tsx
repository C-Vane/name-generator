import React, { FC } from "react";
import { StylishButtonContainer, StylishButtonA } from "./styles";
import { StylishButtonProps } from "./interfaces";

const StylishButton: FC<StylishButtonProps> = ({ onClick, text }) => {
  return (
    <StylishButtonContainer onClick={onClick}>
      <StylishButtonA>{text}</StylishButtonA>
    </StylishButtonContainer>
  );
};

export default StylishButton;
