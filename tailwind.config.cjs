/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
      myanmar: ["Noto Sans Myanmar"],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '0.5rem',
        xl: '2rem',
        '2xl': '4rem',
      },
    },
    colors: {
      red: colors.red,
      green: "#058523",
      yellow: colors.yellow,
      white: "#FFFFFF",
      black: "#00000",
      subtleGrey: "#EFEFEF",
      grey: "#54595F",
      dreamLabColor1: "#0092FF",
      dreamLabColor2: "#00D7FF",
      dreamLabColor3: "#00BEFF",
      dreamLabColor4: "#1D3160",
      dreamLabColor5: "#D9F9FF",
      textColor1: "#54595F",
      textColor2: "#EFEFEF",
      textColor3: "#595959",
      textColor4: "#262626",
      grey2: "#8c8c8c",
      grey4: "#434343",
      grey6: "#e4e4e4",
      cardBg1: "#F8F8FC",
      stoke: "#bfbfbf",
      gold: "#C58F09",
      greyNav: "#8E98B0",
      orangee : "#C99206"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
