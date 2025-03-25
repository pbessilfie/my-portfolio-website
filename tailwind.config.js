/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFFFFF",
        primaryColor2: "#9DFE76",
        darkBg: "#212000",
        secondaryColor: "#EFF5F9",
        secondaryColor2: "#FFF5F4",
        secondaryColor3: "#E4ECEA",
        secondaryColor4: "#EFF4FB",
        textColor: "#000000",
      },
      fontFamily: {
        "roboto-slab": ["Roboto Slab", "sans-serif"],
      },
    },
  },
  plugins: [],
};
