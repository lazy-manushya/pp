export const squareSizing = (size: string = "48px") =>
  ` 
    --size: ${size};
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
    min-height: var(--size);
  `;
