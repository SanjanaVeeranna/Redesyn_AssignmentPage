import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#592EBF",
        darkBlue: "#1A3365",
        unselected: "#8C8C8C" ,
},
fontFamily:{
  groteskBook: ["var(--font-groteskBook)"],
  groteskLight: ["var(--font-groteskLight)"],
  groteskMedium:["var(--font-groteskMedium)"]

},
      screens: {
        dv: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
