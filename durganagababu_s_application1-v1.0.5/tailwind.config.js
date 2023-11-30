module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_3f: "#ffffff3f" },
        colors: "#afaeae",
        black: { 900: "#020305", "900_01": "#0d0f12", "900_7f": "#0d0f127f" },
        blue_gray: {
          200: "#a9c2cb",
          "600_cc": "#63757ccc",
          "600_33": "#63757c33",
          "600_66": "#63757c66",
        },
        gray: { 700: "#5c4f4f", 900: "#171e27", "900_7f": "#171e277f" },
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #ffffff3f",
        bs: "0px 19px  45px -10px #0d0f127f",
        bs3: "0px 20px  39px -12px #63757c33",
        bs2: "0px 20px  39px -12px #63757c66",
      },
      fontFamily: {
        plusjakartasans: "Plus Jakarta Sans",
        amazonicpersonaluse: "AMAZONIC PERSONAL USE",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
