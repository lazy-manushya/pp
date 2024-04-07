export function joinClassNames(
  ...classes: (string | number | undefined)[]
): string {
  classes = Array.from(new Set(classes));
  classes = classes.filter(Boolean);

  return classes.join(" ");
}
