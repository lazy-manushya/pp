"use client";

import React, { useRef } from "react";
import { useTextField } from "@react-aria/textfield";
import { mergeProps, useId } from "@react-aria/utils";

import { joinClassNames } from "@/utils/classNames";

import {
  StyledInput,
  StyledInputContainer,
  StyledTextArea,
  StyledTextAreaContainer,
} from "./TextField.styles";
import { ITextFieldProps } from "./TextField.types";

const TextField: React.FC<ITextFieldProps> = ({
  prependContent,
  appendContent,
  className,
  label = "",
  id: idFromProps,
  style,
  textArea,
  inputClassName,
  ...restProps
}) => {
  const ref = useRef<any>();
  const ariaLabel = label || restProps.name || restProps.placeholder;
  const { inputProps, labelProps } = useTextField(
    {
      ...restProps,
      className: inputClassName,
      "aria-label": ariaLabel,
      "aria-labelledby ": ariaLabel,
    } as any,
    ref
  );

  const id = useId(idFromProps);

  const props = {
    ...mergeProps(restProps, inputProps),
  };

  const ContainerComponent = textArea
    ? StyledTextAreaContainer
    : StyledInputContainer;

  return (
    <ContainerComponent
      $hasValue={!!inputProps.value}
      className={className}
      style={style}
    >
      {prependContent}
      {textArea ? (
        <StyledTextArea
          {...(props as any)}
          id={id}
          ref={ref}
          className={joinClassNames(inputClassName, inputProps.className)}
        />
      ) : (
        <StyledInput
          {...props}
          id={id}
          ref={ref}
          {...inputProps}
          className={joinClassNames(inputClassName, inputProps.className)}
        />
      )}
      <label>{ariaLabel}</label>
      {appendContent}
    </ContainerComponent>
  );
};

export default TextField;
