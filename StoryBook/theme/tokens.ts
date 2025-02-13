// should come either from exported figma tokens or figma token API

export const color = {
  surface: {
    xHigh: "#8C8C9A",
    xLow: "#FFFFFF",
    brand: "#0050FF",
    danger: "#DC2828",
    dangerVariant: "#FFDCDC",
    warning: "#A56315",
    warningVariant: "#FA1B6",
  },
  content: {
    onNeutral: {
      xxHigh: "#2C2C31",
      medium: "#8C8C9A",
      low: "#C9C9CE",
      danger: "#DC2828",
      warning: "#A56315",
    },
  },
  state: {
    default: {
      hover: "#1A1A1A0F",
      focus: "#1A1A1ACC",
    },
  },
};

export const font = {
  labelM: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "0.16px",
  },
  labelS: {
    fontSize: "14px",
    fontWeight: 550,
    lineHeight: "17px",
    letterSpacing: "0.16px",
  },
  bodyM: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0.01px",
  },
};

export const dimenstions = {
  radius: {
    input: 12,
  },
  xs: 8,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xl5: 48, // Question - dimension/5xl = 48 ? ment to be dimensions/6xs ?
};

export const spacing = (multiplier: number) => multiplier * dimenstions.xs;
