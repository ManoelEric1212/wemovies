export const theme = {
  colors: {
    primary: "#2F2E41",
    secondary: "#009EDD",
    buttonPrimary: "#009EDD",
    buttonPrimaryHover: "#0077b5",
    buttonSecondary: "#039B00",
    background: "#2F2E41",
    text: "#FFFFFF",
    textSecondary: "#2F2E41",
    textSubTitle: "#999999",
    input: "#D9D9D9",
    white: "#FFFFFF",
  },
  font: {
    family: "'Open Sans', sans-serif",
    sizes: {
      small: "0.75rem", // 12px
      medium: "1.25", // 20px
      large: "1.5rem", // 24px
      xlarge: "2rem", // 32px
    },
    weight: {
      regular: 400,
      medium: 600,
      bold: 700,
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  radius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  breakpoints: {
    mobile: "600px",
    tablet: "790px",
    desktop: "1024px",
    wide: "1440px",
  },
} as const;
