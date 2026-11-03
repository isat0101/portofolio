/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#20221f",
        muted: "#74786f",
        paper: "#f8f8f6",
        sage: "#637b65",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(32, 34, 31, 0.055)",
      },
    },
  },
  plugins: [],
};
