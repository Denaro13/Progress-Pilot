/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bright-blue": "hsl(220, 98%, 61%)",
      pink: "#ff49db",
      "dark-blue": "hsl(235, 24%, 19%)",
      white: "#fff",
      vlgb: "hsl(236, 33%, 92%)",
      lgb: "hsl(234, 39%, 85%)",
      dgb: "hsl(236, 9%, 61%)",
      vdb: "hsl(235, 21%, 11%)",
      vdgb: "hsl(235, 19%, 35%)",
      "light-gray": "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
