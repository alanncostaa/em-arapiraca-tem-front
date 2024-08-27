import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)']
      },

      colors: {
        "cabecalho": "var(--cabecalho)",
        "button": "var(--buttons)",
        "color-green": "var(--color-green)",
        "red": "var(--color-red)",
        "text": "var(--text-color)",
        "fundo": "var(--backgroud)"
      }
    },
  },
  plugins: [],
};
export default config;
