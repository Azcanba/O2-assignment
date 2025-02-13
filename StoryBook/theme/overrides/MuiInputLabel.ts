import { color, font, spacing } from "../tokens";

export const MuiInputLabel = {
  styleOverrides: {
    root: {
      marginBottom: spacing(1),
      color: color.content.onNeutral.xxHigh,
      ...font.labelM,
      ".MuiInputLabel-asterisk": {
        color: color.surface.danger,
      },
    },
  },
};
