import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#2B384C",
        "secondary-color-500": "#6D96B6",
        "secondary-color-700": "#5A7B94",
        tertiary: "#0000ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
