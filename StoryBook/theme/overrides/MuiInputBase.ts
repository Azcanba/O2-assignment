import { color, spacing } from "../tokens";

export const MuiInputBase = {
  styleOverrides: {
    root: {
      height: spacing(6),
      padding: `${spacing(1.5)}px ${spacing(2)}px`,
      color: color.surface.brand,
      caretShape: `underscore`,
    },
    input: {
      backgroundColor: color.surface.xLow,
    },
  },
};
