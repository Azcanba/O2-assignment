import { color, dimenstions, font } from "../tokens";

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      borderRadius: dimenstions.radius.input,
      ":not(.Mui-disabled)": {
        ".MuiOutlinedInput-notchedOutline": { border: `1px solid ${color.surface.xHigh}` },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: `3px solid ${color.state.default.focus}`,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: `3px solid ${color.state.default.focus}`,
        },
      },
      input: {
        padding: 0,
        "&::placeholder": {
          color: color.content.onNeutral.low,
          opacity: 1,
          ...font.bodyM,
        },
      },
    },
  },
};
