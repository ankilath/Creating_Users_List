import { css, styled } from "styled-components";

type ButtonProps = {
  disabled?: boolean;
}

const buttonStyles = css`
  pointer-events: none;
  background: gray;
`;

const getButtonStyles = (props: ButtonProps) => {
   
  return props.disabled && buttonStyles;
};

export const ButtonModule = styled.button<ButtonProps>`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  ${getButtonStyles}

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;
