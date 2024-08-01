/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "text-primary-color": "var(--text-primary-color)",
        "white-color": "var(--white-color)",
        "btn-primary": "var(--btn-primary)",
      },
      backgroundImage: {

      }
    },

    screens: {
      sm: "640px",

      md: "786px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
