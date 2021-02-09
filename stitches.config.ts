import { createStyled } from "@stitches/react";

const theme = {
  colors: {
    $hiContrast: "hsl(206,10%,5%)",
    $loContrast: "hsl(0, 0%, 99%)",

    $gray100: "hsl(206,22%,99%)",
    $gray200: "hsl(206,12%,97%)",
    $gray300: "hsl(206,11%,92%)",
    $gray400: "hsl(206,10%,84%)",
    $gray500: "hsl(206,10%,76%)",
    $gray600: "hsl(206,10%,44%)",
  },
  space: {
    $1: "12px",
    $2: "16px",
    $3: "24px",
    $4: "32px",
    $5: "40px",
    $6: "48px",
  },
  sizes: {
    $1: "12px",
    $2: "16px",
    $3: "24px",
    $4: "32px",
    $5: "40px",
    $6: "48px",
  },
  fontSizes: {
    $1: "12px",
    $2: "16px",
    $3: "24px",
    $4: "32px",
    $5: "40px",
    $6: "48px",
  },
  fonts: {
    $sans:
      "-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;",
    $serif:
      "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;",
    $mono:
      "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;",
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: (_config) => {
      return (
        value: keyof typeof theme["space"] | (string & Record<string, unknown>),
      ) => {
        return {
          marginLeft: value,
          marginRight: value,
        };
      };
    },
    marginY: (_config) => {
      return (
        value: keyof typeof theme["space"] | (string & Record<string, unknown>),
      ) => {
        return {
          marginTop: value,
          marginBottom: value,
        };
      };
    },
    paddingX: (_config) => {
      return (
        value: keyof typeof theme["space"] | (string & Record<string, unknown>),
      ) => {
        return {
          paddingLeft: value,
          paddingRight: value,
        };
      };
    },
    paddingY: (_config) => {
      return (
        value: keyof typeof theme["space"] | (string & Record<string, unknown>),
      ) => {
        return {
          paddingTop: value,
          paddingBottom: value,
        };
      };
    },
  },
  breakpoints: {
    bp1: (rule) => {
      return `@media (min-width: 520px) { ${rule} }`;
    },
    bp2: (rule) => {
      return `@media (min-width: 900px) { ${rule} }`;
    },
  },
});
