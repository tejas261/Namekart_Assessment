/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "240px",
      // => @media (min-width: 240px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
