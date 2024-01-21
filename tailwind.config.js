export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        text: {
          DEFAULT: "#27272E",
          secondary: "#737373",
          gary: "#6E6E6E",
          softGary: "#A0AEC0",
          lighter: "#425466",
          main:"#222"
        },
        gary: {
          DEFAULT: "#A0AEC0",
          100: "#8492A6",
        },
        blue: {
          DEFAULT: "#4C6FFF",
          100: "#E4ECF7",
          200: "#DDE5F0",
          300:"#C7DCF2",
          800:"#007AFF"
        },
        light: {
          100: "#EDF2F7",
          200: "#F6F6F6",
          300: "#EEFCEF",
          400: "#F9F9FB",
        },
        green: {
          DEFAULT: "#26A86F",
          100: "#DCF1DE",
          200:"#9BE8BB",
          800:"#27AE60"
        },
        red: {
          DEFAULT: "#F16063",
          bg: "#FFE6E4",
          200: "#FEEEE1",
          300: "#FFDFC6",
        },
      },
      fontSize:{
        xxs:"10px"
      },
      boxShadow: {
        "boo-1": "0px 7px 70px 5px rgba(50, 50, 71, 0.15)",
        "boo-2": "0px 3px 8px -1px rgba(50, 50, 71, 0.10)",
      },
    },
  },
  plugins: [],
};
