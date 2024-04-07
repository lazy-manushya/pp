import {
  DisplaySize,
  HeadingSize,
  LabelSize,
  BodySize,
} from "./Typography.types";

export const DISPLAY_CONFIG: Record<
  DisplaySize,
  {
    styles: React.CSSProperties;
  }
> = {
  md: {
    styles: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "32px",
      letterSpacing: "-0.24px",
    },
  },
  lg: {
    styles: {
      fontSize: "32px",
      fontWeight: "600",
      lineHeight: "40px",
      letterSpacing: "-0.32px",
    },
  },
  xl: {
    styles: {
      fontSize: "36px",
      fontWeight: "600",
      lineHeight: "44px",
      letterSpacing: "-0.36px",
    },
  },
  xxl: {
    styles: {
      fontSize: "40px",
      fontWeight: "600",
      lineHeight: "48px",
      letterSpacing: "-0.4px",
    },
  },
};

export const HEADING_CONFIG: Record<
  HeadingSize,
  {
    styles: React.CSSProperties;
  }
> = {
  overline: {
    styles: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16px",
      letterSpacing: "0.72px",
    },
  },
  sm: {
    styles: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
    },
  },
  md: {
    styles: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "24px",
    },
  },
  lg: {
    styles: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "28px",
    },
  },
};

export const LABEL_CONFIG: Record<
  LabelSize,
  {
    styles: React.CSSProperties;
  }
> = {
  sm: {
    styles: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "26px",
    },
  },
  md: {
    styles: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
    },
  },
  lg: {
    styles: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
    },
  },
};

export const BODY_CONFIG: Record<
  BodySize,
  {
    styles: React.CSSProperties;
  }
> = {
  sm: {
    styles: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px",
    },
  },
  md: {
    styles: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
    },
  },
  lg: {
    styles: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
    },
  },
};
