import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: "var(--font-gilroy)"
      },
      screens: {
        desktop: "1200px"
      },
      borderRadius: {
        full: "100%"
      },
      height: {
        screen: "100dvh"
      }
    },
  },
  plugins: [animate],
}

