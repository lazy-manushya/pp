"use client";

import styled from "@emotion/styled";

export const StyledInput = styled.input`
  position: relative;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  flex: 1;
  max-width: -webkit-fill-available;
  padding: 0 4px;
  text-align: inherit;
  overflow: hidden;

  &,
  &:-internal-autofill-selected,
  &::autofill,
  &:-webkit-autofill {
    font-size: 14px;
    font-weight: 500;
    color: #a4acb9;
  }

  &::placeholder {
    opacity: 0;
  }

  &:-internal-autofill-selected,
  &::autofill,
  &:-webkit-autofill {
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    background: transparent !important;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-buntton {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

export const StyledTextArea = styled.textarea`
  border: none !important;
  outline: none !important;
  background: transparent !important;
  flex: 1;
  max-width: -webkit-fill-available;
  padding: 0 4px;
  text-align: inherit;
  height: calc(100% - 1.25rem);
  resize: none;

  &::placeholder {
    opacity: 0;
  }

  &:-internal-autofill-selected,
  &::autofill,
  &:-webkit-autofill {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #434251;
    background: transparent !important;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-buntton {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const StyledContainer = styled.div<{ $hasValue: boolean }>`
  --label-top: 1rem;
  --label-top-focus: -0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  outline: none;
  font-size: 16px;
  background: #f6f8fa;
  border: 1.5px solid #f1f0f3;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: #555;
  outline: none;
  overflow: hidden;

  & > label {
    position: absolute;
    top: var(--label-top);
    left: 1.25rem;
    color: #818898;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    pointer-events: none;
    transition: all 240ms ease;
  }

  ${({ $hasValue }) => {
    const FOCUSED_INPUT_STYLES = `
      margin-top: 1.25rem;
      transition: padding 240ms ease;
    `;

    const FOCUSED_LABEL_STYLES = `
      color: #a4acb9;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      transform: translateY(var(--label-top-focus));
    `;

    return $hasValue
      ? `
          input,
          textarea {
            ${FOCUSED_INPUT_STYLES}
          }

          label {
            ${FOCUSED_LABEL_STYLES}
          }
        `
      : ` 
          &:focus-within > input,
          &:focus-within > textarea,
          & > input:not(:placeholder-shown),
          & > textarea:not(:placeholder-shown) {
            ${FOCUSED_INPUT_STYLES}
          }

          &:focus-within > label,
          & > input:not(:placeholder-shown) + label,
          & > textarea:not(:placeholder-shown) + label {
            ${FOCUSED_LABEL_STYLES}
          }
        `;
  }}
`;

export const StyledInputContainer = styled(StyledContainer)`
  height: 56px;
  align-items: center;
`;

export const StyledTextAreaContainer = styled(StyledContainer)`
  height: 160px;
  align-items: flex-start;
`;
