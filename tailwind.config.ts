import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkGray: 'var(--color-dark-gray)',
        lightGray: 'var(--color-light-gray)',
        teal: 'var(--color-teal)',
        darkBlue: 'var(--color-dark-blue)',
        lightBlue: 'var(--color-light-blue)',
        lightestBlue: 'var(--color-lightest-blue)',
        offWhite: 'var(--color-off-white)',
        white: 'var(--color-white)',
      },
    },
  },
  plugins: [],
};
export default config;
