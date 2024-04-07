import { CreateStyled } from "@emotion/styled";

/**
 * Use this when using custom variables in emotion.
 * 
 * It removed and fixes the following warning:
 * Warning: Received [Value] for a non-[Value type] attribute [Variable].
 */
export const transientOptions: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith("$"),
};
